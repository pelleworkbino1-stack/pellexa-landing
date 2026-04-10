import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LedPage from './pages/LedPage'
import ParentPage from './pages/ParentPage'
import { isLedSubdomain } from './lib/site'

function AppRoutes() {
  if (isLedSubdomain()) {
    return <LedPage />
  }
  return (
    <Routes>
      <Route path="/" element={<ParentPage />} />
      <Route path="/led" element={<LedPage />} />
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
