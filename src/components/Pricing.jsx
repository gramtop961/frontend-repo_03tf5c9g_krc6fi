import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    features: [
      '1 project',
      'Spline import',
      'Basic motion presets',
    ],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$24',
    period: 'per month',
    features: [
      'Unlimited projects',
      'Three.js + GSAP export',
      'Framer Motion library',
      'Performance optimizer',
      'Email support',
    ],
    cta: 'Go Pro',
    highlighted: true,
  },
  {
    name: 'Studio',
    price: '$79',
    period: 'per month',
    features: [
      'Team workspace',
      'Design tokens & theming',
      'Priority support',
      'Early access features',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-white to-zinc-50 py-24 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-6 shadow-sm ${
                tier.highlighted
                  ? 'border-indigo-500/40 bg-indigo-50/60 dark:border-indigo-400/30 dark:bg-indigo-900/20'
                  : 'border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-900/60'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1 text-zinc-900 dark:text-white">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-sm text-zinc-600 dark:text-zinc-300">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="text-sm text-zinc-700 dark:text-zinc-300">• {f}</li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  tier.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'border border-zinc-300 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
