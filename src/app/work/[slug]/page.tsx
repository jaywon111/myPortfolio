import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-8 md:px-24 py-32">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-16"
        >
          <ArrowLeft size={16} /> Back to work
        </Link>

        <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
          {project.year} · {project.role}
        </p>
        <h1 className="font-syne text-5xl md:text-7xl font-bold mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-16">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors mb-24 text-sm"
        >
          Visit live site <ArrowUpRight size={16} />
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-16">
          <div>
            <h2 className="font-syne text-xl font-bold mb-4">The Problem</h2>
            <p className="text-gray-400 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="font-syne text-xl font-bold mb-4">The Solution</h2>
            <p className="text-gray-400 leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h2 className="font-syne text-xl font-bold mb-4">The Result</h2>
            <p className="text-gray-400 leading-relaxed">{project.result}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
