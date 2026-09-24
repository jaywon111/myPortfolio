import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-8">
      <p className="font-syne text-8xl md:text-[12rem] font-bold leading-none mb-4">
        404
      </p>
      <p className="text-gray-400 mb-8 text-center">
        This page doesn't exist. It may have been moved, removed, or never existed.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 border border-white/20 rounded-full text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
      >
        Go back home
      </Link>
    </main>
  );
}
