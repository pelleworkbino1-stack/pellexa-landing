import { useState } from 'react'
import { Check, Copy, ExternalLink, Mail } from 'lucide-react'
import { useLang } from '../../context/LangContext'

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.cssText = 'position:fixed;opacity:0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
}

type MailtoFallbackProps = {
  email: string
  mailtoHref: string
  ctaLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}

/**
 * Mailto primary CTA with a copy-to-clipboard fallback so a missing mail
 * client does not strand the inquiry.
 *
 * Reads `content.mailtoFallback` for its own UI strings, so every call site
 * must sit inside a `LangProvider`. Both do: `/sourcing` and `/acrylic`.
 */
export default function MailtoFallback({
  email,
  mailtoHref,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
}: MailtoFallbackProps) {
  const { content } = useLang()
  const t = content.mailtoFallback
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    await copyToClipboard(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
        <a
          href={mailtoHref}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-7 py-3.5 text-sm font-semibold text-canvas-base shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transition-all duration-300 hover:scale-[1.03]"
        >
          <ExternalLink size={14} />
          {ctaLabel}
        </a>
        {secondaryHref && secondaryLabel ? (
          <a
            href={secondaryHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-silver-anchor/15 bg-silver-anchor/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-silver-anchor/10 hover:border-silver-anchor/25 transition-all duration-300"
          >
            <Mail size={16} />
            {secondaryLabel}
          </a>
        ) : null}
        <button
          type="button"
          onClick={onCopy}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-silver-anchor/15 bg-silver-anchor/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-silver-anchor/10 hover:border-silver-anchor/25 transition-all duration-300"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? t.copied : t.copy}
        </button>
      </div>

      <p className="text-xs text-ink-dim leading-relaxed mb-3">
        {t.fallbackNote}
      </p>
      <p className="text-sm font-mono text-white select-all break-all">{email}</p>
    </div>
  )
}
