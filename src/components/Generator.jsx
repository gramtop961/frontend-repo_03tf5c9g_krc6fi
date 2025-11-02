import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Copy, Check } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Generator() {
  const [inputUrl, setInputUrl] = useState('https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode');
  const [animation, setAnimation] = useState('framer');
  const [sourceType, setSourceType] = useState('spline');
  const [name, setName] = useState('GeneratedExperience');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const canSubmit = !!BACKEND_URL && name.trim().length >= 3;

  async function onGenerate(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);
    setCopied(false);

    try {
      const res = await fetch(`${BACKEND_URL}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source_type: sourceType,
          input_url: inputUrl || null,
          animation,
          name,
          options: {},
        }),
      });
      if (!res.ok) throw new Error((await res.json()).detail || 'Failed to generate');
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  async function onCopy() {
    if (!result?.code) return;
    await navigator.clipboard.writeText(result.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section className="relative py-16 sm:py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">Generate production‑ready components</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">Provide a Spline scene URL, choose your animation library, and get a ready‑to‑use React component.</p>
          </div>

          {!BACKEND_URL && (
            <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200">
              Backend URL is not configured. Set VITE_BACKEND_URL in your environment to enable generation.
            </div>
          )}

          <form onSubmit={onGenerate} className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">Component name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required minLength={3}
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none ring-0 focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white" placeholder="GeneratedExperience" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">Animation</label>
                <select value={animation} onChange={(e) => setAnimation(e.target.value)}
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
                  <option value="framer">Framer Motion</option>
                  <option value="gsap">GSAP</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">Source</label>
                <select value={sourceType} onChange={(e) => setSourceType(e.target.value)}
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
                  <option value="spline">Spline</option>
                  <option value="three">Three.js</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">Source URL</label>
                <input value={inputUrl} onChange={(e) => setInputUrl(e.target.value)}
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none ring-0 focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  placeholder="https://..." />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">A record of each generation is stored for your workspace.</p>
              <button disabled={!canSubmit || loading}
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60">
                <Rocket className="h-4 w-4" />
                {loading ? 'Generating…' : 'Generate component'}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 rounded-lg border border-red-300 bg-red-50 p-4 text-red-900 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200">
              {error}
            </div>
          )}

          {result?.code && (
            <motion.div initial={{opacity:0, y:8}} animate={{opacity:1,y:0}} transition={{duration:0.4}}
              className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-3 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                <span>{result.name}.jsx</span>
                <button onClick={onCopy} className="inline-flex items-center gap-1 rounded-md border border-zinc-300 px-2 py-1 text-xs hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
                  {copied ? <Check className="h-3.5 w-3.5"/> : <Copy className="h-3.5 w-3.5"/>}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="max-h-[480px] overflow-auto bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100"><code>{result.code}</code></pre>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
