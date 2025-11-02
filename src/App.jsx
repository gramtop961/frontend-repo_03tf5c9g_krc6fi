import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <main>
        <Hero3D />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-black/10 bg-white/70 py-10 text-center text-sm text-zinc-500 backdrop-blur dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} VibeCraft — Build interactive, tech‑forward websites faster.
        </p>
      </footer>
    </div>
  );
}
