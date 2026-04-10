import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LedPage from './pages/LedPage'
import ParentPage from './pages/ParentPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParentPage />} />
        <Route path="/led" element={<LedPage />} />
      </Routes>
    </BrowserRouter>
  )
}
