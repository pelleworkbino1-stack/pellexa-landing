import { useLang } from '../../context/LangContext'

export default function ParentFooter() {
  const { content } = useLang()
  const c = content.footer

  return (
    <footer className="border-t border-white/5 bg-dark-950 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gold-500 to-gold-400 opacity-15" />
              <span className="font-display font-bold text-sm text-gold-400">P</span>
            </div>
            <span className="font-display font-semibold text-sm text-white">
              Pellexa
            </span>
          </div>

          <p className="text-sm text-dark-300 text-center max-w-lg">
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
