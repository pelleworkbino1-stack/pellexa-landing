import { useEffect } from 'react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import ParentContact from '../components/parent/ParentContact'
import CocoaPortfolio from '../components/parent/CocoaPortfolio'
import { LangProvider } from '../context/LangContext'

/**
 * Pellexa Cacao Derivatives — dedicated product-line page (/food/cacao).
 *
 * Mirrors the structural pattern of /food/matcha: full-bleed agri theme,
 * navbar + dedicated portfolio body + contact intake + footer. Brand
 * identity (.theme-agri → Vibrant Matcha + Cocoa Brown runway) is applied
 * automatically by the route-based `ThemeProvider` because the existing
 * `^\/food(\/|$)/` regexp in `brandRegistry.ts` already covers `/food/cacao`
 * — no registry edit required.
 *
 * `<CocoaPortfolio />` renders §§2/3/4/5 of `docs/cocoa_knowlage.md` and
 * closes with a master conversion CTA that scrolls to `#contact`.
 * `<ParentContact />` is mounted directly below so that anchor resolves on
 * this page without leaving the route.
 */

const PAGE_TITLE = 'Pellexa Cacao Derivatives — Single-Origin Filipino Sourcing'
const PAGE_DESCRIPTION =
  'Single-origin Filipino cacao derivatives portfolio — premium powder, butter, and liquor grades with verified analytical parameters, HACCP + GMP + FDA compliance, and CIF maritime logistics to global enterprise customers.'

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

export default function CocoaPage() {
  useEffect(() => {
    document.title = PAGE_TITLE
    setMeta('description', PAGE_DESCRIPTION)
    setMeta('og:title', PAGE_TITLE)
    setMeta('og:description', PAGE_DESCRIPTION)
    setMeta('og:url', `${window.location.origin}/food/cacao`)
    setMeta('twitter:title', PAGE_TITLE)
    setMeta('twitter:description', PAGE_DESCRIPTION)
    window.scrollTo(0, 0)
  }, [])

  return (
    <LangProvider>
      <div className="min-h-screen bg-canvas-base text-white antialiased">
        <ParentNavbar />
        <main>
          <CocoaPortfolio />
          <ParentContact />
        </main>
        <ParentFooter />
      </div>
    </LangProvider>
  )
}
