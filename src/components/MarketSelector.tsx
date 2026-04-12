import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, X } from 'lucide-react'
import { useMarket } from '../hooks/useMarket'
import type { MarketId } from '../markets/types'
import { isLedSubdomain } from '../lib/site'

const markets: { id: MarketId; flag: string; label: string }[] = [
  { id: 'il', flag: '🇮🇱', label: 'Israel' },
  { id: 'ph', flag: '🇵🇭', label: 'Philippines' },
  { id: 'global', flag: '🌍', label: 'Other' },
]

function MarketToggle() {
  const { marketId, setMarketId } = useMarket()
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const current = markets.find((m) => m.id === marketId) ?? markets[2]

  const select = (id: MarketId) => {
    setMarketId(id)
    setOpen(false)
    const base = isLedSubdomain() ? '' : '/led'
    const path = id === 'global' ? base || '/' : `${base}/${id}`
    navigate(path + location.hash)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-medium text-dark-300 hover:bg-white/10 hover:text-white transition-all"
        aria-label="Select region"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 rtl:right-auto rtl:left-0 top-full mt-2 z-50 min-w-[160px] rounded-xl border border-white/10 bg-dark-900/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              {markets.map((m) => (
                <button
                  key={m.id}
                  onClick={() => select(m.id)}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                    marketId === m.id
                      ? 'bg-gold-500/10 text-gold-400'
                      : 'text-dark-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{m.flag}</span>
                  <span>{m.label}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export function MarketBanner() {
  const { setMarketId } = useMarket()
  const navigate = useNavigate()
  const location = useLocation()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hasCookie = document.cookie.includes('pellexa_market=')
    if (!hasCookie) setShow(true)
  }, [])

  const select = (id: MarketId) => {
    setMarketId(id)
    setShow(false)
    const base = isLedSubdomain() ? '' : '/led'
    const path = id === 'global' ? base || '/' : `${base}/${id}`
    navigate(path + location.hash)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-dark-900/95 backdrop-blur-md border-b border-white/5 overflow-hidden fixed top-0 left-0 right-0 z-[70]"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-dark-300">
              <Globe size={16} className="text-gold-400 shrink-0" />
              <span className="text-sm">Select your region:</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {markets.map((m) => (
                <button
                  key={m.id}
                  onClick={() => select(m.id)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-dark-300 hover:bg-gold-500/10 hover:border-gold-500/20 hover:text-gold-400 transition-all"
                >
                  <span>{m.flag}</span>
                  <span>{m.label}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShow(false)}
              className="p-1.5 text-dark-400 hover:text-white transition-colors shrink-0"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MarketToggle
