/**
 * Pellexa Multi-Branch Brand Registry
 *
 * Single source of truth that maps URL paths → branch identity → CSS scope
 * class. Consumed by `ThemeProvider` (the route-based dispatcher) and by any
 * future surface that needs to reason about the active brand (analytics tags,
 * conditional microcopy, OG image selection, etc.).
 *
 * The CSS scope classes themselves (`.theme-parent`, `.theme-led`,
 * `.theme-agri`) are defined in `src/index.css` and rebind the Tier 3
 * `--brand-*` token group. Tier 1 (canvas + silver-anchor) is global and is
 * NEVER touched by this registry — that's the entire point of the locked
 * corporate signature.
 *
 * Ordering matters: `resolveBrand` walks the array top-down and returns the
 * first matching profile, so more specific routes must be listed before more
 * general ones. The `parent` profile sits last as the catch-all.
 */

export type BrandKey = 'parent' | 'led' | 'agri'

export interface BrandProfile {
  /** Stable identifier for analytics, data-attributes, conditional logic. */
  key: BrandKey
  /** CSS class applied to `<html>` by ThemeProvider. Matches `src/index.css`. */
  className: string
  /** Path matcher. Tested against `useLocation().pathname` only. */
  match: RegExp
  /** Human-readable label for DevTools / debugging. */
  label: string
}

/**
 * Path resolution table.
 *
 * - `/led`, `/led/...`           → Electric Cyan
 * - `/food`, `/food/...`         → Matcha + Cocoa (Agri)
 * - `/`, `/sourcing`, `/acrylic` → Premium Sky Blue + Bronze runway (parent
 *                                   core). The General Sourcing + dedicated
 *                                   Acrylic verticals both cascade from the
 *                                   parent token profile by design — adding
 *                                   per-route theme scopes for them would
 *                                   bloat the token system without delivering
 *                                   a meaningful brand differentiation.
 *
 * NOTE — LED subdomain (`led.pellexa.com`) does NOT carry the `/led` prefix
 * (its paths are `/` and `/:market`). The subdomain override is handled in
 * `ThemeProvider` so the registry stays a pure URL-path map.
 */
export const brandRegistry: readonly BrandProfile[] = [
  {
    key: 'led',
    className: 'theme-led',
    match: /^\/led(\/|$)/,
    label: 'Pellexa LED — Electric Cyan',
  },
  {
    key: 'agri',
    className: 'theme-agri',
    match: /^\/food(\/|$)/,
    label: 'Pellexa Agri-Food — Matcha + Cocoa runway',
  },
  {
    key: 'parent',
    className: 'theme-parent',
    match: /^\/(sourcing(\/|$)|acrylic(\/|$)|$)/,
    label:
      'Pellexa Corporate — Premium Sky Blue + Bronze (root / sourcing / acrylic)',
  },
] as const

export const DEFAULT_BRAND: BrandProfile =
  brandRegistry.find((b) => b.key === 'parent') ?? brandRegistry[0]

/** Full set of theme class names — used by the dispatcher to clear stale classes. */
export const ALL_THEME_CLASSES: readonly string[] = brandRegistry.map(
  (b) => b.className,
)

/**
 * Resolve the active brand profile from a URL pathname.
 * Falls back to Parent (Sky Blue) when no route matches — guarantees every
 * surface always has exactly one brand identity, never zero.
 */
export function resolveBrand(pathname: string): BrandProfile {
  return brandRegistry.find((b) => b.match.test(pathname)) ?? DEFAULT_BRAND
}
