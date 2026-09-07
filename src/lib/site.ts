/**
 * When the LED site is served at led.pellexa.com, the parent hub lives on the apex domain.
 */
export function isLedSubdomain(): boolean {
  if (typeof window === 'undefined') return false
  return window.location.hostname.toLowerCase() === 'led.pellexa.com'
}

/** URL for the Pellexa hub (parent site). */
export function hubUrl(): string {
  if (typeof window === 'undefined') return '/'
  if (isLedSubdomain()) return 'https://pellexa.com'
  return '/'
}

/**
 * Canonical URL for a hub-owned path such as `/terms` or `/privacy`.
 *
 * The legal pages are registered once, on the parent hub route tree. The LED
 * subdomain runs a separate route tree where `/:market` would swallow those
 * paths, so callers there need an absolute apex URL instead of a router path.
 */
export function hubPath(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  return isLedSubdomain() ? `https://pellexa.com${clean}` : clean
}
