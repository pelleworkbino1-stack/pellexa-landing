import { useLang } from '../../context/LangContext'
import PellexaLogo from '../PellexaLogo'

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
            <p className="text-xs text-silver-trace">
              {c.copyright.replace('{year}', String(new Date().getFullYear()))}
            </p>
            <div className="flex items-center gap-6">
              {[c.privacy, c.terms].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-ink-dim hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
