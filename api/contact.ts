import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = 'led.sales@pellexa.com'

interface ContactForm {
  name: string
  company?: string
  email: string
  location?: string
  projectType?: string
  screenSize?: string
  details?: string
  market?: string
  timezone?: string
  locale?: string
}

function validate(body: Record<string, unknown>): ContactForm {
  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()

  if (!name) throw new Error('Name is required')
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    throw new Error('A valid email is required')

  return {
    name,
    email,
    company: String(body.company || '').trim() || undefined,
    location: String(body.location || '').trim() || undefined,
    projectType: String(body.projectType || '').trim() || undefined,
    screenSize: String(body.screenSize || '').trim() || undefined,
    details: String(body.details || '').trim() || undefined,
    market: String(body.market || '').trim() || undefined,
    timezone: String(body.timezone || 'UTC').trim(),
    locale: String(body.locale || 'en').trim(),
  }
}

function buildEmailHtml(data: ContactForm): string {
  const tz = data.timezone || 'UTC'
  const locale = data.locale || 'en'
  const timestamp = new Date().toLocaleString(locale, { timeZone: tz })
  const marketLabel = data.market ? ` (${data.market.toUpperCase()})` : ''

  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company],
    ['Location', data.location],
    ['Project Type', data.projectType],
    ['Screen Size', data.screenSize],
  ]
    .filter(([, v]) => v)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#c9a84c;border-bottom:1px solid #1a1a24;width:140px">${label}</td><td style="padding:8px 12px;color:#e4e4e7;border-bottom:1px solid #1a1a24">${value}</td></tr>`
    )
    .join('')

  return `
    <div style="font-family:'Inter',system-ui,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;border-radius:12px;overflow:hidden;border:1px solid #1a1a24">
      <div style="padding:24px 28px;background:linear-gradient(135deg,#111118,#0a0a0f);border-bottom:1px solid #1a1a24">
        <h1 style="margin:0;font-size:20px;color:#c9a84c;font-weight:700">New Lead — Pellexa${marketLabel}</h1>
        <p style="margin:6px 0 0;font-size:13px;color:#5a5a6e">Submitted ${timestamp}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
      ${data.details ? `<div style="padding:16px 28px;border-top:1px solid #1a1a24"><p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#c9a84c;text-transform:uppercase">Project Details</p><p style="margin:0;font-size:14px;color:#e4e4e7;line-height:1.6;white-space:pre-wrap">${data.details}</p></div>` : ''}
      <div style="padding:16px 28px;text-align:center;border-top:1px solid #1a1a24"><p style="margin:0;font-size:11px;color:#3a3a4a">Pellexa LED Solutions &middot; pellexa.com</p></div>
    </div>`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const data = validate(req.body)

    await resend.emails.send({
      from: 'Pellexa Website <noreply@pellexa.com>',
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `New Inquiry: ${data.name}${data.company ? ` — ${data.company}` : ''}`,
      html: buildEmailHtml(data),
    })

    return res.status(200).json({ success: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Something went wrong'
    return res.status(400).json({ error: message })
  }
}
