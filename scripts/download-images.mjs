import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")
const PUBLIC = path.join(ROOT, "public")

const SOURCES = [
  "https://rollingwoodstowns.ca/img/logo.svg",
  "https://rollingwoodstowns.ca/img/logo3.svg",
  "https://rollingwoodstowns.ca/img/regency2.svg",
  "https://rollingwoodstowns.ca/img/home/banner2.webp",
  "https://rollingwoodstowns.ca/img/home/1.webp",
  "https://rollingwoodstowns.ca/img/home/2.webp",
  "https://rollingwoodstowns.ca/img/home/7.webp",
  "https://rollingwoodstowns.ca/img/home/8.webp",
  "https://rollingwoodstowns.ca/img/interiors/1.webp",
  "https://rollingwoodstowns.ca/img/interiors/2.webp",
  "https://rollingwoodstowns.ca/img/interiors/3.webp",
  "https://rollingwoodstowns.ca/img/interiors/4.webp",
  "https://rollingwoodstowns.ca/img/community/1.webp",
  "https://rollingwoodstowns.ca/img/community/2.webp",
]

const SUPABASE_BASE =
  "https://cfzuypbljirmibmxpabi.supabase.co/storage/v1/object/public/rental-documents"

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.writeFileSync(dest, buf)
}

async function main() {
  for (const url of SOURCES) {
    const rel = url.replace("https://rollingwoodstowns.ca/", "")
    const dest = path.join(PUBLIC, rel)
    try {
      await download(url, dest)
      console.log("ok", rel)
    } catch {
      await download(`${SUPABASE_BASE}/${rel}`, dest)
      console.log("ok (supabase)", rel)
    }
  }

  const ogDest = path.join(PUBLIC, "og-image.jpg")
  try {
    await download("https://rollingwoodstowns.ca/og-image.jpg", ogDest)
  } catch {
    await download(`${SUPABASE_BASE}/og-image.jpg`, ogDest).catch(() =>
      fs.copyFileSync(path.join(PUBLIC, "img/home/banner2.webp"), ogDest)
    )
  }
  console.log("ok og-image.jpg")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
