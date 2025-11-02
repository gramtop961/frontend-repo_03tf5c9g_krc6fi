import { Code2, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'One‑click 3D Integration',
    desc: 'Drop in Spline scenes or complex Three.js models and get optimized, production‑ready code.',
    icon: Layers,
  },
  {
    title: 'Animation Made Simple',
    desc: 'Generate GSAP timelines or Framer Motion components with clean, maintainable structure.',
    icon: Zap,
  },
  {
    title: 'Developer‑first Output',
    desc: 'Type‑safe props, modular components, and best‑practice patterns out of the box.',
    icon: Code2,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Everything you need to ship beautiful interactions
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            From 3D scenes to micro‑interactions, generate performant code and ship faster.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-700 dark:text-indigo-300">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
