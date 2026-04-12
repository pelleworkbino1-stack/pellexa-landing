import type { MarketConfig, MarketId } from './types'
import { ph } from './ph'
import { il } from './il'
import { globalMarket } from './global'

const MARKETS: Record<MarketId, MarketConfig> = {
  ph,
  il,
  global: globalMarket,
}

export function getMarket(id: MarketId): MarketConfig {
  return MARKETS[id] ?? MARKETS.global
}

export function isValidMarket(id: string): id is MarketId {
  return id in MARKETS
}

export { MARKETS }
export type { MarketConfig, MarketId }
