import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-2 text-zinc-900 dark:text-white"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Rocket className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold tracking-tight">VibeCraft</span>
          </motion.a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#" className="hover:text-indigo-600">Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-indigo-600">Sign in</button>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
