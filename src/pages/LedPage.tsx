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
import { isLedSubdomain } from '../lib/site'

function setMeta(property: string, content: string) {
  const el = document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

export default function LedPage() {
  useEffect(() => {
    document.title = 'Pellexa LED — Custom LED Display Solutions | Philippines'
    setMeta('description', 'Custom LED display solutions for any space in the Philippines — indoor, outdoor, corporate, retail, residential, and more. Factory-direct, professionally installed, locally supported.')
    setMeta('og:title', 'Pellexa LED — Custom LED Display Solutions')
    setMeta('og:description', 'Next-generation LED displays, custom-engineered and factory-direct. Indoor, outdoor, rental & event solutions professionally managed in the Philippines.')
    setMeta(
      'og:url',
      isLedSubdomain() ? `${window.location.origin}/` : 'https://pellexa.com/led',
    )
    setMeta('twitter:title', 'Pellexa LED — Custom LED Display Solutions')
    setMeta('twitter:description', 'Premium LED displays, factory-direct in the Philippines. Custom sizes, pixel pitches, and mounting solutions.')
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-dark-950 text-white antialiased">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhyPellexa />
        <Advantage />
        <Solutions />
        <Showcase />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
