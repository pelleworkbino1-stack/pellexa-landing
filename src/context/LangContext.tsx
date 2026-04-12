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

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = getCookie(COOKIE_KEY)
    if (saved === 'he' || saved === 'en') return saved
    return 'en'
  })

  const content = useMemo(() => (lang === 'he' ? parentHe : parentEn), [lang])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
    setCookie(COOKIE_KEY, lang)
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, content }}>
      {children}
    </LangContext.Provider>
  )
}
