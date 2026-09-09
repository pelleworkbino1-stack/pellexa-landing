import { Link } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import PellexaLogo from '../PellexaLogo'

/** Keyed on the route rather than the label, which changes with the EN/HE toggle. */
const LEGAL_LINKS = [
  ['privacy', '/privacy'],
  ['terms', '/terms'],
] as const

export default function ParentFooter() {
  const { content } = useLang()
  const c = content.footer

  return (
    <footer className="border-t border-silver-anchor/5 bg-canvas-base py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6">
          <PellexaLogo variant="full" />

          <p className="text-sm text-ink-muted text-center max-w-lg">
            {c.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {/* ink-muted/90 lands at ~5.07:1 on --canvas-base. silver-trace,
                the previous value, measured 1.855:1 and failed WCAG AA. */}
            <p className="text-xs text-ink-muted/90">
              {c.copyright.replace('{year}', String(new Date().getFullYear()))}
            </p>
            <div className="flex items-center gap-6">
              {LEGAL_LINKS.map(([labelKey, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="text-xs text-ink-dim hover:text-white transition-colors"
                >
                  {c[labelKey]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
