import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-zinc-900/70 dark:via-zinc-900/30 dark:to-zinc-950/80" />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          Build stunning 3D, GSAP, and motion experiences — instantly
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base text-zinc-700 dark:text-zinc-300 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          VibeCraft is a SaaS that turns complex Three.js scenes, Spline assets, and animations
          into fast, production‑ready code with one click.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#pricing"
            className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Start free
          </a>
          <a
            href="#features"
            className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            See features
          </a>
        </motion.div>
        <motion.p
          className="pointer-events-none mt-6 text-xs text-zinc-500 dark:text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Interactive, tech, futuristic, digital, minimalist
        </motion.p>
      </div>
    </section>
  );
}
