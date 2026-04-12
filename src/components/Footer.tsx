import { Link } from 'react-router-dom'
import { hubUrl, isLedSubdomain } from '../lib/site'
import { useMarket } from '../hooks/useMarket'

const logoBlock = (
  <>
    <div className="relative flex items-center justify-center w-8 h-8">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gold-500 to-gold-400 opacity-15 group-hover:opacity-30 transition-opacity" />
      <span className="font-display font-bold text-sm text-gold-400">P</span>
    </div>
    <div className="flex items-baseline gap-1">
      <span className="font-display font-semibold text-sm text-white">Pellexa</span>
      <span className="font-display font-medium text-xs text-gold-400/70">LED</span>
    </div>
  </>
)

export default function Footer() {
  const { market } = useMarket()
  const c = market.footer

  return (
    <footer className="border-t border-white/5 bg-dark-950 py-12">
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

          <p className="text-sm text-dark-300 text-center max-w-md">
            {c.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-xs text-dark-500">
              {c.copyright.replace('{year}', String(new Date().getFullYear()))}
            </p>
            <div className="flex items-center gap-6">
              {[c.privacy, c.terms].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-dark-400 hover:text-white transition-colors"
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
