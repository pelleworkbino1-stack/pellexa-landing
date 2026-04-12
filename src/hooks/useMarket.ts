import { useContext } from 'react'
import { MarketContext, type MarketContextValue } from '../context/MarketContext'

export function useMarket(): MarketContextValue {
  return useContext(MarketContext)
}
