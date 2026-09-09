import { useEffect, Fragment, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Lock, Scale, ArrowRight } from 'lucide-react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import { LangProvider } from '../context/LangContext'

/**
 * Pellexa Privacy Policy (`/privacy`).
 *
 * The clause text below is a verbatim transcription of
 * `docs/PRIVACY_POLICY.md`, which is the legal source of truth. Edit the
 * markdown first, then mirror it here — never the other way around.
 *
 * The body is deliberately pinned to `dir="ltr" lang="en"`: `LangProvider`
 * flips `<html>` to RTL when the navbar toggle is set to Hebrew, and the legal
 * text must stay left-to-right regardless of that chrome state.
 *
 * Unlike the vertical pages, section content carries no scroll-reveal
 * animation. Opacity-gated legal text would break in-page search and would
 * hide clauses from anyone landing on a deep anchor.
 */

const PAGE_TITLE = 'Privacy Policy — Pellexa International LLC'
const PAGE_DESCRIPTION =
  'Privacy Policy for pellexa.com — no tracking analytics, no advertising pixels, and no sale of data. Two essential first-party preference cookies, Resend as a transactional bridge for the LED intake form, and GDPR/CCPA rights exercised via pelle@pellexa.com.'
const LAST_UPDATED = 'September 2026'

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

const EMAIL_PATTERN = /[\w.+-]+@[\w-]+\.[\w.]+/

/**
 * Minimal inline renderer for the `**bold**` and `` `code` `` markers carried
 * over from the markdown source, plus autolinking of contact addresses.
 * Recursion terminates because a bold span cannot itself contain `*`.
 */
function rich(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|[\w.+-]+@[\w-]+\.[\w.]+)/g)

  return parts.filter(Boolean).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-ink-primary">
          {rich(part.slice(2, -2))}
        </strong>
      )
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="rounded bg-silver-anchor/10 px-1.5 py-0.5 font-mono text-[0.9em] text-brand-secondary-300"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    if (EMAIL_PATTERN.test(part) && EMAIL_PATTERN.exec(part)?.[0] === part) {
      return (
        <a
          key={i}
          href={`mailto:${part}`}
          className="text-brand-400 underline decoration-brand-400/30 underline-offset-4 hover:decoration-brand-400 transition-colors"
        >
          {part}
        </a>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

const INTRO = [
  '**Pellexa International LLC** ("Pellexa," "we," "us," or "our") respects the privacy of corporate visitors and prospective enterprise partners who access **pellexa.com** (the "Site").',
  'This Privacy Policy outlines how data is handled across our web infrastructure, specifying the exact technical mechanisms and third-party tools utilized on the Site.',
] as const

type Point = string | { text: string; sub: readonly string[] }

interface LegalSection {
  title: string
  body?: readonly string[]
  points?: readonly Point[]
  /** Paragraphs that must follow the bullet list rather than precede it. */
  after?: readonly string[]
}

const SECTIONS: readonly LegalSection[] = [
  {
    title: 'Scope of Policy',
    body: [
      'This Privacy Policy governs solely information processed via the Site. It does not apply to offline supply agreements, confidential commercial specifications exchanged during bilateral negotiations, or transactions conducted under bespoke Non-Disclosure Agreements (NDAs).',
    ],
  },
  {
    title: 'Information Handled & Submission Architecture',
    body: [
      'The Site does not offer user registration, portal logins, or public accounts. Data interaction occurs through the following distinct channels:',
    ],
    points: [
      '**LED Intake Inquiry Form:** Submissions through our specialized LED inquiry interface are transmitted via an API integration powered by **Resend** directly to our dedicated internal inbox at **led.sales@pellexa.com**. **Inquiry data is not stored in a web database or hosted storage repository.**',
      '**Standard Vertical Forms (`mailto:` links):** Inquiries concerning our agri-food, parent, acrylic, and general sourcing verticals operate strictly via native `mailto:` links. Clicking these triggers your local email application, transmitting communications directly from your mail client to Pellexa’s corporate email servers without intermediary website retention.',
      '**Automated Technical Server Logs:** Our domain management and hosting providers (Cloudflare and Vercel) record standard baseline server diagnostic data (e.g., incoming IP address, browser type, operating system, timestamp). This information is utilized exclusively for edge-network stability, DDoS mitigation, and routing integrity.',
    ],
  },
  {
    title: 'Cookies and Browser Storage',
    body: [
      'Pellexa does not deploy marketing, advertising, cross-site retargeting, or behavioral analytics cookies.',
    ],
    points: [
      {
        text: '**First-Party Preference Cookies:** The Site exclusively utilizes two essential first-party preference cookies managed locally in your browser:',
        sub: [
          '`pellexa_lang`: Retains your language interface selection for up to 365 days (`SameSite=Lax`).',
          '`pellexa_market`: Retains your chosen geographical market view for up to 365 days (`SameSite=Lax`).',
        ],
      },
      '**Storage Technologies:** The Site does not utilize `localStorage` or `sessionStorage` in its application source code. You can configure your browser to block or clear these cookies at any time.',
    ],
  },
  {
    title: 'Third-Party Services and Analytics Scripts',
    body: [
      '4.1. **No Tracking Analytics:** The Site does not execute tracking scripts such as Google Analytics, Vercel Analytics, Cloudflare Web Analytics, or Meta (Facebook) Pixels.',
      '4.2. **Third-Party Typography:** The Site loads typography assets from Google Fonts (`index.html`) to ensure uniform typographic presentation across desktop and mobile devices.',
      '4.3. **Transactional Delivery:** The Resend email API is used exclusively as a transmission bridge for the LED contact form to route incoming inquiries to Pellexa.',
    ],
  },
  {
    title: 'Use of Submitted Information',
    body: [
      'Information voluntarily communicated to Pellexa via email or form submissions is utilized strictly for lawful B2B commercial objectives:',
    ],
    points: [
      'Reviewing project specifications, RFQs, and commercial requirements;',
      'Responding directly to your corporate representatives;',
      'Evaluating sourcing feasibility and coordinating supply chain consultation.',
    ],
  },
  {
    title: 'Absolute Prohibition on the Sale of Data',
    body: [
      '**Pellexa does not sell, rent, lease, monetize, or trade your personal or corporate contact details to third-party data brokers, marketing agencies, or unsolicited third parties under any circumstances.**',
    ],
  },
  {
    title: 'International Privacy Rights (GDPR, CCPA & Global Provisions)',
    body: [
      'In accordance with international data protection frameworks (including the EU General Data Protection Regulation, the California Consumer Privacy Act, and the Philippine Data Privacy Act):',
    ],
    points: [
      '**Right of Access & Portability:** You may request confirmation regarding whether we retain communication records containing your personal business contact details.',
      '**Right to Rectification:** You may request corrections to inaccurate corporate contact details.',
      '**Right to Erasure ("Right to Be Forgotten"):** You may request the deletion of your historical inquiry emails from our active operational mailboxes.',
      '**Right to Revoke Consent:** You may revoke authorization for Pellexa to contact you at any time.',
    ],
    after: [
      'To exercise any of these rights, submit a direct written request to our executive desk at **pelle@pellexa.com**. Requests are reviewed and processed within statutory timelines.',
    ],
  },
  {
    title: 'Data Security Measures',
    body: [
      'We maintain administrative and technical standards across our hosting architecture, domain DNS, and corporate Google Workspace environments to safeguard incoming communications. However, because internet data transmissions cannot be guaranteed 100% invulnerable, inquiries are submitted at your own discretion.',
    ],
  },
  {
    title: 'Policy Amendments',
    body: [
      'Pellexa reserves the right to revise this Privacy Policy to reflect technical adjustments or legal requirements. Updated policies become effective immediately upon posting to this page.',
    ],
  },
  {
    title: 'Data Controller Contact',
    body: [
      'For questions, compliance requests, or privacy clarifications, contact our designated data officer:',
    ],
    points: [
      '**Entity:** Pellexa International LLC',
      '**Registered Address:** 30 N Gould St Ste R, Sheridan, WY 82801, USA',
      '**Managing Executive:** Pelle Bino, Founder & Managing Member',
      '**Executive Contact Email:** pelle@pellexa.com',
      '**Technical Sourcing Inquiries:** led.sales@pellexa.com',
    ],
  },
] as const

const sectionId = (index: number) => `section-${index + 1}`

const pointText = (point: Point) => (typeof point === 'string' ? point : point.text)

function LegalHero() {
  return (
    <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(var(--brand-glow), 0.05) 0%, transparent 60%)',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative mx-auto max-w-3xl px-5 sm:px-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-secondary-500/8 border border-brand-secondary-400/20 px-4 py-1.5 mb-7 backdrop-blur-sm">
          <Lock size={14} className="text-brand-secondary-400" />
          <span className="text-xs font-medium tracking-wide text-brand-secondary-400 uppercase">
            Legal
          </span>
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white mb-4">
          Privacy Policy
        </h1>

        <p className="text-xs font-semibold tracking-widest uppercase text-brand-secondary-400 mb-8">
          Last Updated: {LAST_UPDATED}
        </p>

        {INTRO.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[15px] sm:text-base text-ink-body leading-[1.8] mb-4 last:mb-0"
          >
            {rich(paragraph)}
          </p>
        ))}
      </motion.div>
    </section>
  )
}

function TableOfContents() {
  return (
    <section className="relative pb-12">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <nav
          aria-label="Table of contents"
          className="rounded-2xl border border-silver-anchor/10 bg-canvas-overlay/40 backdrop-blur-sm p-6 sm:p-7"
        >
          <p className="text-[11px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-4">
            Contents
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {SECTIONS.map((section, i) => (
              <li key={section.title} className="flex items-baseline gap-2.5">
                <span className="font-mono text-xs text-brand-secondary-400 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <a
                  href={`#${sectionId(i)}`}
                  className="text-sm text-ink-muted hover:text-white transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}

function LegalBody() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-8">
      {SECTIONS.map((section, i) => (
        <section
          key={section.title}
          id={sectionId(i)}
          className="scroll-mt-28 border-t border-silver-anchor/10 py-10 sm:py-12"
        >
          <div className="flex items-baseline gap-3 mb-5">
            <span className="font-mono text-xs text-brand-secondary-400 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h2 className="font-display font-semibold text-xl sm:text-2xl text-white leading-snug">
              {section.title}
            </h2>
          </div>

          {section.body?.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[15px] sm:text-base text-ink-body leading-[1.8] mb-4 last:mb-0"
            >
              {rich(paragraph)}
            </p>
          ))}

          {section.points && (
            <ul className="mt-5 space-y-3">
              {section.points.map((point) => (
                <li key={pointText(point)} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-brand-secondary-400/60 shrink-0" />
                  <div className="text-sm sm:text-[15px] text-ink-dim leading-[1.75]">
                    {rich(pointText(point))}
                    {typeof point !== 'string' && (
                      <ul className="mt-2.5 space-y-2 ps-1">
                        {point.sub.map((sub) => (
                          <li key={sub} className="flex items-start gap-3">
                            <span className="mt-2 h-1 w-1 rounded-full bg-brand-secondary-400/40 shrink-0" />
                            <span>{rich(sub)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {section.after?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 text-[15px] sm:text-base text-ink-body leading-[1.8]"
            >
              {rich(paragraph)}
            </p>
          ))}
        </section>
      ))}
    </div>
  )
}

function CrossLink() {
  return (
    <section className="relative pb-20 sm:pb-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="rounded-2xl border border-silver-anchor/10 bg-canvas-elevated/60 backdrop-blur-md p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <Scale size={20} className="text-brand-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-display font-semibold text-base text-white">
                Terms and Conditions
              </p>
              <p className="text-sm text-ink-dim">
                The commercial and legal framework governing this Site.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <Link
              to="/terms"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:gap-3 transition-all duration-300"
            >
              Read Terms
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/"
              className="text-sm text-ink-muted hover:text-white transition-colors"
            >
              Return to Pellexa
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PrivacyPage() {
  useEffect(() => {
    document.title = PAGE_TITLE
    setMeta('description', PAGE_DESCRIPTION)
    setMeta('og:title', PAGE_TITLE)
    setMeta('og:description', PAGE_DESCRIPTION)
    setMeta('og:url', `${window.location.origin}/privacy`)
    setMeta('twitter:title', PAGE_TITLE)
    setMeta('twitter:description', PAGE_DESCRIPTION)
    window.scrollTo(0, 0)
  }, [])

  return (
    <LangProvider>
      <div className="min-h-screen bg-canvas-base text-white antialiased">
        <ParentNavbar />
        <main dir="ltr" lang="en">
          <LegalHero />
          <TableOfContents />
          <LegalBody />
          <CrossLink />
        </main>
        <ParentFooter />
      </div>
    </LangProvider>
  )
}
