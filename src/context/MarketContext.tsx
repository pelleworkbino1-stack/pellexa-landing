import { createContext, useEffect, useMemo, type ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import type { MarketConfig, MarketId } from '../markets/types'
import { getMarket, isValidMarket } from '../markets'

const COOKIE_KEY = 'pellexa_market'

function getCookie(key: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${key}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

function setCookie(key: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${key}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`
}

export interface MarketContextValue {
  market: MarketConfig
  marketId: MarketId
  setMarketId: (id: MarketId) => void
}

export const MarketContext = createContext<MarketContextValue>(null!)

interface MarketProviderProps {
  children: ReactNode
  /**
   * When provided, the provider bypasses URL-param/cookie resolution and exposes
   * the given config directly. Used by non-regional verticals (e.g. /food) so
   * existing market-driven section components can render against vertical data
   * without polluting the regional cookie or the MarketSelector UI.
   */
  override?: MarketConfig
}

export function MarketProvider({ children, override }: MarketProviderProps) {
  const { market: urlMarket } = useParams<{ market?: string }>()

  const marketId = useMemo<MarketId>(() => {
    if (override) return override.id
    if (urlMarket && isValidMarket(urlMarket)) return urlMarket
    const saved = getCookie(COOKIE_KEY)
    if (saved && isValidMarket(saved)) return saved
    return 'global'
  }, [urlMarket, override])

  const market = useMemo(
    () => override ?? getMarket(marketId),
    [marketId, override],
  )

  useEffect(() => {
    document.documentElement.lang = market.lang
    document.documentElement.dir = market.dir
    if (!override) setCookie(COOKIE_KEY, marketId)
  }, [market, marketId, override])

  const setMarketId = (id: MarketId) => {
    setCookie(COOKIE_KEY, id)
  }

  return (
    <MarketContext.Provider value={{ market, marketId, setMarketId }}>
      {children}
    </MarketContext.Provider>
  )
}
