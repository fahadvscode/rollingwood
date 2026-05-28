/** Canonical site URL — must match your Vercel primary domain (Search Console property). */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rollingwoodtownshomes.com"
).replace(/\/$/, "")
