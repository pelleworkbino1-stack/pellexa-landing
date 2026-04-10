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
