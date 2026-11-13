import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

const PATHS = ["", "/edtech", "/saas", "/fintech", "/real-estate", "/agencies", "/about", "/demo", "/privacy", "/terms"]

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }))
}
