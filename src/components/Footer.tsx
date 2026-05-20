import { Link } from 'react-router-dom'
import { hubUrl, isLedSubdomain } from '../lib/site'
import { useMarket } from '../hooks/useMarket'
import PellexaLogo from './PellexaLogo'

const logoBlock = <PellexaLogo variant="full" className="justify-center" />

export default function Footer() {
  const { market } = useMarket()
  const c = market.footer

  return (
    <footer className="border-t border-silver-anchor/5 bg-canvas-base py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6">
          {isLedSubdomain() ? (
            <a href={hubUrl()} className="flex items-center gap-2 group">
              {logoBlock}
            </a>
          ) : (
            <Link to="/" className="flex items-center gap-2 group">
              {logoBlock}
            </Link>
          )}

          <p className="text-sm text-ink-muted text-center max-w-md">
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
