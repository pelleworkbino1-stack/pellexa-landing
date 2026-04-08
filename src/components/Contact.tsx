import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle, ChevronDown, Loader2, AlertCircle } from 'lucide-react'

const projectTypes = [
  'Indoor Display',
  'Outdoor Display',
  'Rental / Event',
  'Creative / Custom',
  'Other',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      location: formData.get('location'),
      projectType: formData.get('projectType'),
      screenSize: formData.get('screenSize'),
      details: formData.get('details'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to send inquiry')
      }

      setFormState('success')
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setFormState('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-white/5 bg-dark-900/80 px-4 py-3 text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-gold-500/30 focus:ring-1 focus:ring-gold-500/20 transition-all'

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-dark-900/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3 block">
              Start Your Project
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="text-dark-400 text-base sm:text-lg leading-relaxed mb-8">
              Tell us about your project and we'll craft a custom proposal.
              Whether it's a single screen or a multi-site rollout, we're ready
              to deliver.
            </p>

            <div className="space-y-4">
              {[
                'Complimentary consultation and site assessment',
                'Custom engineering for your exact architectural requirements',
                'Optimized supply chain with factory-direct pricing',
                'Professional installation and last-mile delivery nationwide',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-dark-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {formState === 'success' ? (
              <div className="rounded-2xl border border-gold-500/20 bg-dark-800/60 p-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-5">
                  <CheckCircle size={32} className="text-gold-400" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-dark-400 text-sm">
                  We've received your inquiry and will get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/5 bg-dark-800/40 backdrop-blur-sm p-8 space-y-5"
              >
                {formState === 'error' && (
                  <div className="flex items-start gap-3 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3">
                    <AlertCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-red-300">{errorMessage}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Juan Dela Cruz"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="City, Philippines"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        name="projectType"
                        className={`${inputClass} pr-10 appearance-none`}
                      >
                        <option value="">Select type...</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Approx. Screen Size
                    </label>
                    <input
                      type="text"
                      name="screenSize"
                      placeholder='e.g. 3m x 2m or "Not sure"'
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-dark-300 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3.5 text-sm font-semibold text-dark-950 hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
