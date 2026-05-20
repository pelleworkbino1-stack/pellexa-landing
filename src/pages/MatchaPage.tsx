import { useEffect } from 'react'
import ParentNavbar from '../components/parent/ParentNavbar'
import Hero from '../components/Hero'
import WhyPellexa from '../components/WhyPellexa'
import Advantage from '../components/Advantage'
import Solutions from '../components/Solutions'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import FoodContact from '../components/food/FoodContact'
import Footer from '../components/Footer'
import { MarketProvider } from '../context/MarketContext'
import { LangProvider } from '../context/LangContext'
import { matcha } from '../markets/matcha'

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

/**
 * Pellexa Matcha Sourcing — dedicated product-line page (/food/matcha).
 *
 * Brand identity is resolved at the document root by the route-based
 * `ThemeProvider`, which emits `.theme-agri` on `<html>` for every `/food/*`
 * path. That scope rebinds the Tier 3 `--brand-*` token group to Deep Matcha
 * (#0F5257) and unlocks `--brand-secondary-*` for the Cocoa Brown runway
 * (#8B5A2B) used by tier badges, eyebrow labels, and 1px structural rules.
 * Tier 1 canvas + silver-anchor are global and never touched.
 */
export default function MatchaPage() {
  useEffect(() => {
    document.title = matcha.meta.title
    setMeta('description', matcha.meta.description)
    setMeta('og:title', matcha.meta.ogTitle)
    setMeta('og:description', matcha.meta.ogDescription)
    setMeta('og:url', `${window.location.origin}/food/matcha`)
    setMeta('twitter:title', matcha.meta.twitterTitle)
    setMeta('twitter:description', matcha.meta.twitterDescription)
    window.scrollTo(0, 0)
  }, [])

  return (
    <LangProvider>
      <MarketProvider override={matcha}>
        <div className="relative min-h-screen bg-canvas-base text-white antialiased">
          <ParentNavbar />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[130px] mix-blend-screen"
              style={{ animation: 'matcha-breathe 8s ease-in-out infinite' }}
            />
            <div className="absolute top-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-brand-400/10 blur-[150px] mix-blend-screen" />
            <div
              className="absolute top-2/3 left-1/3 h-[550px] w-[550px] rounded-full bg-brand-500/10 blur-[140px] mix-blend-screen"
              style={{ animation: 'matcha-breathe 11s ease-in-out 2.5s infinite' }}
            />
            <div
              className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-brand-400/10 blur-[130px] mix-blend-screen"
              style={{ animation: 'matcha-breathe 9s ease-in-out 1s infinite' }}
            />
          </div>

          <main className="relative z-10">
            <Hero />
            <WhyPellexa />
            <Advantage />
            <Solutions />
            <Process />
            <FAQ />
            <FoodContact />
          </main>
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </MarketProvider>
    </LangProvider>
  )
}
