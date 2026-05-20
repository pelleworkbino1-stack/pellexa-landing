import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { ALL_THEME_CLASSES, resolveBrand } from './brandRegistry'
import { isLedSubdomain } from '../lib/site'

/**
 * Route-Based Theme Dispatcher
 *
 * Listens to the active URL via `useLocation()` and emits exactly one
 * `.theme-*` class onto `document.documentElement` (the `<html>` element).
 * The class rebinds the Tier 3 `--brand-*` token group defined in
 * `src/index.css`, which in turn re-tints every utility class compiled
 * against those tokens — automatically and without component-level prop
 * drilling.
 *
 * DESIGN CONSTRAINTS satisfied:
 * - Zero layout impact: applies the class to the existing `<html>` element
 *   via side-effect; renders `{children}` unwrapped. No new DOM nodes, no
 *   flex/grid context changes, no possibility of breaking the pristine
 *   structural design.
 * - Zero motion impact: never touches transitions, transforms, or
 *   animations. CSS variables swap is instantaneous on route change.
 * - SSR-safe: guards `document` access (even though this codebase is
 *   client-only Vite — defensive against future SSR adoption).
 * - HMR-safe: the `useEffect` cleanup phase removes any previously-applied
 *   theme class before applying the new one, so hot reloads don't pile up
 *   stale scope classes.
 * - Subdomain override: `led.pellexa.com` serves the LED experience at the
 *   apex path (`/` or `/:market`). Resolved as LED regardless of pathname.
 *
 * The provider must be rendered INSIDE `<BrowserRouter>` because
 * `useLocation()` requires router context. See `src/App.tsx`.
 */

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    const profile = isLedSubdomain()
      ? resolveBrand('/led')
      : resolveBrand(pathname)

    for (const cls of ALL_THEME_CLASSES) {
      if (cls !== profile.className) {
        root.classList.remove(cls)
      }
    }
    if (!root.classList.contains(profile.className)) {
      root.classList.add(profile.className)
    }
    root.dataset.brand = profile.key
  }, [pathname])

  return <>{children}</>
}
