import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react'
import type { ParentContent } from '../markets/types'
import { parentEn } from '../markets/parent-en'
import { parentHe } from '../markets/parent-he'

type Lang = 'en' | 'he'

const COOKIE_KEY = 'pellexa_lang'

function getCookie(key: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${key}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

function setCookie(key: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${key}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`
}

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  content: ParentContent
}

const LangContext = createContext<LangContextValue>(null!)

export function useLang() {
  return useContext(LangContext)
}

interface LangProviderProps {
  children: ReactNode
  /**
   * Pins the locale for this subtree and suppresses the cookie write.
   *
   * `/terms` and `/privacy` pass `force="en"`: the legal copy is
   * English-authoritative, so the navbar and footer must stay English too
   * rather than framing English clauses in Hebrew chrome.
   *
   * Skipping the cookie write is the load-bearing half. `setCookie` runs on
   * every mount, so without this guard merely opening a legal page would
   * overwrite a Hebrew visitor's stored preference and drop them back into
   * English on every other route.
   */
  force?: Lang
}

export function LangProvider({ children, force }: LangProviderProps) {
  const [preferred, setPreferred] = useState<Lang>(() => {
    const saved = getCookie(COOKIE_KEY)
    if (saved === 'he' || saved === 'en') return saved
    return 'en'
  })

  const lang = force ?? preferred
  const content = useMemo(() => (lang === 'he' ? parentHe : parentEn), [lang])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
    if (!force) setCookie(COOKIE_KEY, lang)
  }, [lang, force])

  const setLang = (l: Lang) => {
    if (force) return
    setPreferred(l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, content }}>
      {children}
    </LangContext.Provider>
  )
}
