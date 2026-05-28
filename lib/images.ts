/** Public Supabase Storage URLs (no API keys). */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
export const STORAGE_BUCKET = "rental-documents"

export function storageUrl(path: string): string {
  const normalized = path.replace(/^\//, "")
  if (!SUPABASE_URL) {
    throw new Error("Set NEXT_PUBLIC_SUPABASE_URL for image URLs")
  }
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${normalized}`
}

export const images = {
  logo: storageUrl("img/logo.svg"),
  logoFooter: storageUrl("img/logo3.svg"),
  regency: storageUrl("img/regency2.svg"),
  og: storageUrl("og-image.jpg"),
  home: {
    banner: storageUrl("img/home/banner2.webp"),
    one: storageUrl("img/home/1.webp"),
    two: storageUrl("img/home/2.webp"),
    seven: storageUrl("img/home/7.webp"),
    eight: storageUrl("img/home/8.webp"),
  },
  interiors: {
    one: storageUrl("img/interiors/1.webp"),
    two: storageUrl("img/interiors/2.webp"),
    three: storageUrl("img/interiors/3.webp"),
    four: storageUrl("img/interiors/4.webp"),
    gallery: [
      storageUrl("img/interiors/1.webp"),
      storageUrl("img/interiors/2.webp"),
      storageUrl("img/interiors/3.webp"),
      storageUrl("img/interiors/4.webp"),
      storageUrl("img/home/7.webp"),
      storageUrl("img/home/8.webp"),
    ],
  },
  community: {
    one: storageUrl("img/community/1.webp"),
    two: storageUrl("img/community/2.webp"),
  },
} as const
