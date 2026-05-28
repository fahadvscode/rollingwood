/** Site-hosted image paths (served from /public). */

function asset(path: string): string {
  return `/${path.replace(/^\//, "")}`
}

export const images = {
  logo: asset("img/logo.svg"),
  logoFooter: asset("img/logo3.svg"),
  regency: asset("img/regency2.svg"),
  og: asset("og-image.jpg"),
  home: {
    banner: asset("img/home/banner2.webp"),
    one: asset("img/home/1.webp"),
    two: asset("img/home/2.webp"),
    seven: asset("img/home/7.webp"),
    eight: asset("img/home/8.webp"),
  },
  interiors: {
    one: asset("img/interiors/1.webp"),
    two: asset("img/interiors/2.webp"),
    three: asset("img/interiors/3.webp"),
    four: asset("img/interiors/4.webp"),
    gallery: [
      asset("img/interiors/1.webp"),
      asset("img/interiors/2.webp"),
      asset("img/interiors/3.webp"),
      asset("img/interiors/4.webp"),
      asset("img/home/7.webp"),
      asset("img/home/8.webp"),
    ],
  },
  community: {
    one: asset("img/community/1.webp"),
    two: asset("img/community/2.webp"),
  },
} as const
