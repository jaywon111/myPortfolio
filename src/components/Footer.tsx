import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-8 md:px-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 tracking-widest uppercase">
        <p>© {new Date().getFullYear()} Jay</p>
        <div className="flex gap-6">
          <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          <a href="https://github.com/jaywon111" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://x.com/catrotangold" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
        </div>
        <p>Built with Next.js & Three.js</p>
      </div>
    </footer>
  );
}
