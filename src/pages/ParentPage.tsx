import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentHero from '../components/parent/ParentHero'
import SolutionsGrid from '../components/parent/SolutionsGrid'
import ParentAbout from '../components/parent/ParentAbout'
import ParentContact from '../components/parent/ParentContact'
import ParentFooter from '../components/parent/ParentFooter'
import { LangProvider, useLang } from '../context/LangContext'

function ParentInner() {
  const { content } = useLang()
  const { hash } = useLocation()

  useEffect(() => {
    document.title = content.meta.title
  }, [content])

  useEffect(() => {
    const id = hash.startsWith('#') ? hash.slice(1) : hash
    if (!id) {
      window.scrollTo(0, 0)
      return
    }
    const t = window.setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo(0, 0)
    }, 0)
    return () => window.clearTimeout(t)
  }, [hash])

  return (
    <div className="min-h-screen bg-canvas-base text-white antialiased">
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
