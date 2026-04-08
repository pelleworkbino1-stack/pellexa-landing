export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-950 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gold-500 to-gold-400 opacity-15" />
              <span className="font-display font-bold text-sm text-gold-400">P</span>
            </div>
            <span className="font-display font-semibold text-sm text-white">
              Pellexa
            </span>
          </div>

          <p className="text-xs text-dark-500">
            &copy; {new Date().getFullYear()} Pellexa LED Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {['Privacy', 'Terms'].map((link) => (
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
    </footer>
  )
}
