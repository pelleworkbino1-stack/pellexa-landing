import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyPellexa from '../components/WhyPellexa'
import Advantage from '../components/Advantage'
import Solutions from '../components/Solutions'
import Showcase from '../components/Showcase'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import { MarketBanner } from '../components/MarketSelector'
import { useMarket } from '../hooks/useMarket'
import { isLedSubdomain } from '../lib/site'

function setMeta(property: string, content: string) {
  const el = document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

export default function LedPage() {
  const { market } = useMarket()

  useEffect(() => {
    document.title = market.meta.title
    setMeta('description', market.meta.description)
    setMeta('og:title', market.meta.ogTitle)
    setMeta('og:description', market.meta.ogDescription)
    setMeta(
      'og:url',
      isLedSubdomain() ? `${window.location.origin}/` : 'https://pellexa.com/led',
    )
    setMeta('twitter:title', market.meta.twitterTitle)
    setMeta('twitter:description', market.meta.twitterDescription)
    window.scrollTo(0, 0)
  }, [market])

  return (
    <div className="min-h-screen bg-dark-950 text-white antialiased">
      <MarketBanner />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhyPellexa />
        <Advantage />
        <Solutions />
        {market.showcase.visible && <Showcase />}
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
