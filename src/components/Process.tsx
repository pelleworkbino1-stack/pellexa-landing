import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Cpu, Truck, Wrench } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consultation',
    description:
      'We start by understanding your space, audience, and goals. Our team conducts a thorough site assessment — virtually or on-location in the Philippines.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Engineering',
    description:
      'Custom specifications are drafted: optimal pixel pitch, cabinet dimensions, brightness, and mounting design — all tailored to your project.',
  },
  {
    icon: Truck,
    number: '03',
    title: 'Logistics & Last-Mile Delivery',
    description:
      'Factory-direct manufacturing with full quality control. We specialize in last-mile delivery across the Philippines — Luzon, Visayas, and Mindanao, including remote provinces.',
  },
  {
    icon: Wrench,
    number: '04',
    title: 'Local Support',
    description:
      'Professional installation by our PH-based technicians. Ongoing maintenance, calibration, and 24/7 support keep your display performing flawlessly.',
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3 block">
            The Pellexa Process
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            From Vision to Reality
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            A proven, transparent process that turns your concept into a
            world-class LED installation.
          </p>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-dark-500 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="relative text-center group"
            >
              {/* Step icon circle */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-800 border border-white/5 mb-6 group-hover:border-gold-500/20 transition-colors duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <step.icon size={24} className="text-gold-400 relative z-10" />
              </div>

              <div className="text-xs font-mono text-gold-500/50 mb-2">
                {step.number}
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-dark-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
