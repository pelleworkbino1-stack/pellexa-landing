import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyPellexa from './components/WhyPellexa'
import Advantage from './components/Advantage'
import Solutions from './components/Solutions'
import Showcase from './components/Showcase'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
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
