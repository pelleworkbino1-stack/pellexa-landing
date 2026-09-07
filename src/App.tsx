import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LedPage from './pages/LedPage'
import ParentPage from './pages/ParentPage'
import FoodPage from './pages/FoodPage'
import MatchaPage from './pages/MatchaPage'
import CocoaPage from './pages/CocoaPage'
import GeneralSourcingPage from './pages/GeneralSourcingPage'
import AcrylicSourcingPage from './pages/AcrylicSourcingPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import { isLedSubdomain } from './lib/site'
import { MarketProvider } from './context/MarketContext'
import { ThemeProvider } from './theme/ThemeProvider'

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
      <Route path="/food" element={<FoodPage />} />
      <Route path="/food/matcha" element={<MatchaPage />} />
      <Route path="/food/cacao" element={<CocoaPage />} />
      <Route path="/sourcing" element={<GeneralSourcingPage />} />
      <Route path="/acrylic" element={<AcrylicSourcingPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}
