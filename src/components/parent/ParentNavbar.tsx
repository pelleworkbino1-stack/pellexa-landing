import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import PellexaLogo from '../PellexaLogo'

function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'he' : 'en')}
      className="inline-flex items-center gap-1.5 rounded-full bg-silver-anchor/5 border border-silver-anchor/10 px-3 py-1.5 text-xs font-medium text-ink-muted hover:bg-silver-anchor/10 hover:text-white transition-all"
      aria-label="Switch language"
    >
      <Globe size={14} />
      <span>{lang === 'en' ? 'עב' : 'EN'}</span>
    </button>
  )
}

export default function ParentNavbar() {
  const { content } = useLang()
  const c = content.nav
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-canvas-base/80 backdrop-blur-xl border-b border-silver-anchor/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-18 items-center justify-between">
          <a href="/" className="group transition-opacity hover:opacity-90">
            <PellexaLogo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {c.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <LangToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 border border-brand-500/20 px-5 py-2 text-sm font-medium text-brand-400 hover:bg-brand-500/20 hover:border-brand-500/40 transition-all duration-300"
            >
              {c.cta}
            </a>
          </div>

          <button
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute inset-x-0 top-full bg-canvas-elevated/95 backdrop-blur-2xl border-b border-silver-anchor/5"
          >
            <div className="flex flex-col gap-1 p-5">
              {c.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base text-ink-muted hover:text-white hover:bg-silver-anchor/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-4 py-3">
                <LangToggle />
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 block rounded-full bg-brand-500/10 border border-brand-500/20 px-5 py-3 text-center text-sm font-medium text-brand-400 hover:bg-brand-500/20 transition-all"
              >
                {c.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
