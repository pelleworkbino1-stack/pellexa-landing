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

/**
 * Ceiling for a generated `mailto:` URL.
 *
 * The practical limit is set by the mail client, not the spec: Windows Outlook
 * truncates the command line well before a browser's own URL cap, and reports
 * of failures cluster around 2,048. 1,900 keeps a margin under that.
 *
 * Hebrew is what makes this bite. `encodeURIComponent` expands each Hebrew
 * letter to six characters (%D7%90), so the same brief costs roughly twice as
 * much in Hebrew as in English — the audit measured 3,330 vs 1,762.
 */
export const MAILTO_SAFE_LIMIT = 1900

/**
 * Builds a `mailto:` URL that degrades instead of silently truncating.
 *
 * Under the limit the body is pre-filled as normal. Over it, the returned href
 * carries the subject only and `oversizeBrief` holds the full text, which
 * `MailtoFallback` then exposes through its copy button. That keeps the CTA
 * working rather than handing the mail client a URL it will cut mid-word.
 */
export function buildGuardedMailto(email: string, subject: string, body: string) {
  const encodedSubject = encodeURIComponent(subject)
  const full = `mailto:${email}?subject=${encodedSubject}&body=${encodeURIComponent(body)}`
  if (full.length <= MAILTO_SAFE_LIMIT) {
    return { href: full, oversizeBrief: undefined as string | undefined, length: full.length }
  }
  const subjectOnly = `mailto:${email}?subject=${encodedSubject}`
  return { href: subjectOnly, oversizeBrief: body, length: full.length }
}

type MailtoFallbackProps = {
  email: string
  mailtoHref: string
  ctaLabel: string
  secondaryHref?: string
  secondaryLabel?: string
  /**
   * Set by `buildGuardedMailto` when the pre-filled body was dropped to keep
   * the URL inside the mail-client limit. Switches the copy button from the
   * address to the full brief and swaps in the oversize note.
   */
  oversizeBrief?: string
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
  oversizeBrief,
}: MailtoFallbackProps) {
  const { content } = useLang()
  const t = content.mailtoFallback
  const [copied, setCopied] = useState(false)

  const isOversize = Boolean(oversizeBrief)

  const onCopy = async () => {
    await copyToClipboard(oversizeBrief ?? email)
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
          {isOversize
            ? copied
              ? t.copiedBrief
              : t.copyBrief
            : copied
              ? t.copied
              : t.copy}
        </button>
      </div>

      <p className="text-xs text-ink-dim leading-relaxed mb-3">
        {isOversize ? t.oversizeNote : t.fallbackNote}
      </p>
      <p className="text-sm font-mono text-white select-all break-all">{email}</p>
    </div>
  )
}
