import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function readBody(req: import('http').IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (c: Buffer) => chunks.push(c))
    req.on('end', () => resolve(Buffer.concat(chunks).toString()))
    req.on('error', reject)
  })
}

function devContactApi(resendKey: string): Plugin {
  return {
    name: 'dev-contact-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/api/contact') return next()

        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        try {
          const raw = await readBody(req)
          const body = JSON.parse(raw)

          const name = String(body.name || '').trim()
          const email = String(body.email || '').trim()
          if (!name) throw new Error('Name is required')
          if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            throw new Error('A valid email is required')

          const company = String(body.company || '').trim() || undefined
          const location = String(body.location || '').trim() || undefined
          const projectType = String(body.projectType || '').trim() || undefined
          const screenSize = String(body.screenSize || '').trim() || undefined
          const details = String(body.details || '').trim() || undefined

          if (!resendKey) throw new Error('RESEND_API_KEY is not set — add it to .env')

          const { Resend } = await import('resend')
          const resend = new Resend(resendKey)

          const rows = [
            ['Name', name],
            ['Email', email],
            ['Company', company],
            ['Location', location],
            ['Project Type', projectType],
            ['Screen Size', screenSize],
          ]
            .filter(([, v]) => v)
            .map(
              ([label, value]) =>
                `<tr><td style="padding:8px 12px;font-weight:600;color:#c9a84c;border-bottom:1px solid #1a1a24;width:140px">${label}</td><td style="padding:8px 12px;color:#e4e4e7;border-bottom:1px solid #1a1a24">${value}</td></tr>`
            )
            .join('')

          const html = `
            <div style="font-family:'Inter',system-ui,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;border-radius:12px;overflow:hidden;border:1px solid #1a1a24">
              <div style="padding:24px 28px;background:linear-gradient(135deg,#111118,#0a0a0f);border-bottom:1px solid #1a1a24">
                <h1 style="margin:0;font-size:20px;color:#c9a84c;font-weight:700">New Lead — Pellexa</h1>
                <p style="margin:6px 0 0;font-size:13px;color:#5a5a6e">Submitted ${new Date().toLocaleString(body.locale || 'en', { timeZone: body.timezone || 'UTC' })}</p>
              </div>
              <table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
              ${details ? `<div style="padding:16px 28px;border-top:1px solid #1a1a24"><p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#c9a84c;text-transform:uppercase">Project Details</p><p style="margin:0;font-size:14px;color:#e4e4e7;line-height:1.6;white-space:pre-wrap">${details}</p></div>` : ''}
              <div style="padding:16px 28px;text-align:center;border-top:1px solid #1a1a24"><p style="margin:0;font-size:11px;color:#3a3a4a">Pellexa LED Solutions &middot; pellexa.com</p></div>
            </div>`

          await resend.emails.send({
            from: 'Pellexa Website <noreply@pellexa.com>',
            to: 'led.sales@pellexa.com',
            replyTo: email,
            subject: `New Inquiry: ${name}${company ? ` — ${company}` : ''}`,
            html,
          })

          console.log(`[contact-api] ✓ Email sent for ${name} <${email}>`)
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ success: true }))
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : 'Something went wrong'
          console.error('[contact-api] ✗', message)
          res.writeHead(400, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: message }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), devContactApi(env.RESEND_API_KEY)],
  }
})
