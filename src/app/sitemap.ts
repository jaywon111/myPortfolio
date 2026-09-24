import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://my-portfolio-six-amber.vercel.app";
  const routes = ["", "/thank-you"].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
  }));
  const projectRoutes = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
  }));
  return [...routes, ...projectRoutes];
}
