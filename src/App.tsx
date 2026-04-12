import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LedPage from './pages/LedPage'
import ParentPage from './pages/ParentPage'
import { isLedSubdomain } from './lib/site'
import { MarketProvider } from './context/MarketContext'

function LedWithMarket() {
  return (
    <MarketProvider>
      <LedPage />
    </MarketProvider>
  )
}

function AppRoutes() {
  if (isLedSubdomain()) {
    return (
      <Routes>
        <Route path="/:market" element={<LedWithMarket />} />
        <Route path="/" element={<LedWithMarket />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<ParentPage />} />
      <Route path="/led/:market" element={<LedWithMarket />} />
      <Route path="/led" element={<LedWithMarket />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
