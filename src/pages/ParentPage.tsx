import { useEffect } from 'react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentHero from '../components/parent/ParentHero'
import SolutionsGrid from '../components/parent/SolutionsGrid'
import ParentAbout from '../components/parent/ParentAbout'
import ParentContact from '../components/parent/ParentContact'
import ParentFooter from '../components/parent/ParentFooter'

export default function ParentPage() {
  useEffect(() => {
    document.title = 'Pellexa — Strategic Technology Solutions for the Philippines'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-dark-950 text-white antialiased">
      <ParentNavbar />
      <main>
        <ParentHero />
        <SolutionsGrid />
        <ParentAbout />
        <ParentContact />
      </main>
      <ParentFooter />
    </div>
  )
}
