import { useEffect } from 'react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentHero from '../components/parent/ParentHero'
import SolutionsGrid from '../components/parent/SolutionsGrid'
import ParentAbout from '../components/parent/ParentAbout'
import ParentContact from '../components/parent/ParentContact'
import ParentFooter from '../components/parent/ParentFooter'
import { LangProvider, useLang } from '../context/LangContext'

function ParentInner() {
  const { content } = useLang()

  useEffect(() => {
    document.title = content.meta.title
    window.scrollTo(0, 0)
  }, [content])

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

export default function ParentPage() {
  return (
    <LangProvider>
      <ParentInner />
    </LangProvider>
  )
}
