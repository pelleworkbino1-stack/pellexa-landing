import { useEffect } from 'react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import ParentContact from '../components/parent/ParentContact'
import CocoaPortfolio from '../components/parent/CocoaPortfolio'
import { LangProvider, useLang } from '../context/LangContext'

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

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

/**
 * Page body. Lives inside `LangProvider` so `dir`, `lang`, and the SEO meta
 * tags follow the EN/HE toggle — same split as `AcrylicBody`.
 */
function CocoaBody() {
  const { lang, content } = useLang()
  const meta = content.cocoa.meta

  useEffect(() => {
    document.title = meta.title
    setMeta('description', meta.description)
    setMeta('og:title', meta.title)
    setMeta('og:description', meta.description)
    setMeta('og:url', `${window.location.origin}/food/cacao`)
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
  }, [meta])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-canvas-base text-white antialiased">
      <ParentNavbar />
      <main dir={lang === 'he' ? 'rtl' : 'ltr'} lang={lang}>
        <CocoaPortfolio />
        <ParentContact />
      </main>
      <ParentFooter />
    </div>
  )
}

export default function CocoaPage() {
  return (
    <LangProvider>
      <CocoaBody />
    </LangProvider>
  )
}
