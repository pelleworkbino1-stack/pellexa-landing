import { useEffect, Fragment, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Scale, ShieldCheck, ArrowRight } from 'lucide-react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import { LangProvider } from '../context/LangContext'

/**
 * Pellexa Terms and Conditions (`/terms`).
 *
 * The clause text below is a verbatim transcription of
 * `docs/TERMS_AND_CONDITIONS.md`, which is the legal source of truth. Edit the
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

const PAGE_TITLE = 'Terms and Conditions — Pellexa International LLC'
const PAGE_DESCRIPTION =
  'Terms and Conditions for pellexa.com — an informational B2B showcase with no e-commerce checkout or web payment processing. Commercial engagements are executed offline under separate bilateral written agreements, governed by the laws of the State of Wyoming, USA.'
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
  'Welcome to the website of **Pellexa International LLC** ("Pellexa," "we," "us," or "our"). By accessing or browsing the website located at **pellexa.com** (the "Site"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these Terms, you must discontinue use of the Site immediately.',
] as const

interface LegalSection {
  title: string
  body?: readonly string[]
  points?: readonly string[]
}

const SECTIONS: readonly LegalSection[] = [
  {
    title: 'Informational Portal & Non-Binding Nature',
    body: [
      '1.1. **Informational Showcase Only:** This Site operates strictly as an informational and commercial showcase detailing Pellexa’s global supply chain advisory, sourcing, quality inspection, and procurement management services.',
      '1.2. **No Binding Commercial Offers:** None of the materials published on this Site—including but not limited to vertical descriptions, product specifications, minimum order quantity (MOQ) indications, project estimates, or intake questionnaires—constitute a legally binding offer, formal quote, or commercial warranty by Pellexa.',
      '1.3. **Exploratory Inquiries:** Any submission transmitted via contact forms, intake links, or email addresses constitutes a preliminary, exploratory inquiry only and does not establish a contractual, fiduciary, agency, or supply relationship between you and Pellexa.',
    ],
  },
  {
    title: 'No Online Transactions or E-Commerce Checkout',
    body: [
      '2.1. **Absence of E-Commerce:** This Site is **not** an online store or consumer e-commerce platform. Pellexa does not sell off-the-shelf goods directly through the Site.',
      '2.2. **No Web-Based Payment Processing:** The Site does not execute payment transactions, capture credit card data, collect customer funds, or operate escrow mechanisms.',
      '2.3. **Bilateral Offline Execution:** All commercial engagements, pricing structures, technical quality controls, logistics operations, and payment schedules are governed exclusively by separate, formal, bilateral written agreements (e.g., Master Sourcing Agreements, Statements of Work, Purchase Orders, or Proforma Invoices) executed offline by authorized corporate representatives.',
    ],
  },
  {
    title: 'Business-to-Business (B2B) Scope',
    body: [
      'The services described on this Site are engineered exclusively for corporate, commercial, enterprise, and institutional entities ("B2B"). This Site is not directed to consumer retail purchases.',
    ],
  },
  {
    title: 'Intellectual Property Rights',
    body: [
      'All content, visual layouts, branding assets, logos, copy, vertical methodologies, and source code displayed on the Site are the exclusive intellectual property of Pellexa International LLC and are protected under applicable United States and international copyright, trademark, and trade dress regulations. No portion of this Site may be copied, reproduced, distributed, scraped, or modified without prior written authorization from Pellexa.',
    ],
  },
  {
    title: 'Third-Party Infrastructure & Assets',
    body: [
      'The Site may display typographic assets served by external networks (such as Google Fonts) or link to third-party digital services. Pellexa exercises no operational control over external platforms and assumes no responsibility for third-party practices, performance, or privacy policies.',
    ],
  },
  {
    title: 'Disclaimer of Warranties',
    body: [
      'The Site and all associated information are provided on an **"AS IS"** and **"AS AVAILABLE"** basis without representations or warranties of any kind, whether express, statutory, or implied. Pellexa disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a specific commercial application, accuracy, or uninterrupted digital operation.',
    ],
  },
  {
    title: 'Limitation of Liability',
    body: [
      'To the fullest extent permitted under governing law, Pellexa International LLC, its members, managers, officers, and agents shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or related to your use of, or inability to access or use, this Site or any content contained herein.',
    ],
  },
  {
    title: 'Governing Law & Exclusive Jurisdiction',
    body: [
      'These Terms and any dispute or claim arising out of or relating to the Site shall be governed by and construed in accordance with the substantive laws of the **State of Wyoming, United States**, without regard to principles of conflicts of law. You irrevocably agree that the state and federal courts situated within the State of Wyoming, USA, shall maintain exclusive jurisdiction over any legal action or proceeding connected with these Terms or the Site.',
    ],
  },
  {
    title: 'Amendments to Terms',
    body: [
      'Pellexa reserves the right to amend these Terms at its sole discretion at any time. Any changes become effective immediately upon posting to the Site. Continued use of the Site following updates constitutes acceptance of the revised Terms.',
    ],
  },
  {
    title: 'Corporate Legal Inquiries',
    body: [
      'For legal questions or formal communications regarding these Terms, please contact:',
    ],
    points: [
      '**Entity:** Pellexa International LLC',
      '**Registered Office:** 30 N Gould St Ste R, Sheridan, WY 82801, USA',
      '**Executive Contact:** pelle@pellexa.com',
    ],
  },
] as const

const sectionId = (index: number) => `section-${index + 1}`

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
          <Scale size={14} className="text-brand-secondary-400" />
          <span className="text-xs font-medium tracking-wide text-brand-secondary-400 uppercase">
            Legal
          </span>
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white mb-4">
          Terms and Conditions
        </h1>

        <p className="text-xs font-semibold tracking-widest uppercase text-brand-secondary-400 mb-8">
          Last Updated: {LAST_UPDATED}
        </p>

        {INTRO.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[15px] sm:text-base text-ink-body leading-[1.8]"
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
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-brand-secondary-400/60 shrink-0" />
                  <span className="text-sm sm:text-[15px] text-ink-dim leading-[1.75]">
                    {rich(point)}
                  </span>
                </li>
              ))}
            </ul>
          )}
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
            <ShieldCheck size={20} className="text-brand-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-display font-semibold text-base text-white">
                Privacy Policy
              </p>
              <p className="text-sm text-ink-dim">
                How data is handled across our web infrastructure.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:gap-3 transition-all duration-300"
            >
              Read Privacy Policy
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

export default function TermsPage() {
  useEffect(() => {
    document.title = PAGE_TITLE
    setMeta('description', PAGE_DESCRIPTION)
    setMeta('og:title', PAGE_TITLE)
    setMeta('og:description', PAGE_DESCRIPTION)
    setMeta('og:url', `${window.location.origin}/terms`)
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
