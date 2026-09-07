import type { MarketConfig, MarketId } from './types'
import { ph } from './ph'
import { il } from './il'
import { globalMarket } from './global'
import { matcha } from './matcha'

const MARKETS: Record<MarketId, MarketConfig> = {
  ph,
  il,
  global: globalMarket,
  matcha,
}

export function getMarket(id: MarketId): MarketConfig {
  return MARKETS[id] ?? MARKETS.global
}

export function isValidMarket(id: string): id is MarketId {
  return id in MARKETS
}

/** Temporary bank-compliance soft-hide. Set true to restore PH. */
export const PH_MARKET_PUBLIC = false

export function isPublicMarket(id: string): id is MarketId {
  if (!isValidMarket(id)) return false
  if (!PH_MARKET_PUBLIC && id === 'ph') return false
  return true
}

export { MARKETS }
export type { MarketConfig, MarketId }
