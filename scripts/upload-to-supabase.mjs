import { createClient } from "@supabase/supabase-js"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")
const TMP = path.join(ROOT, ".tmp-images")

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY
if (!SUPABASE_KEY) {
  console.error(
    "Set SUPABASE_SERVICE_ROLE_KEY (recommended) or SUPABASE_ANON_KEY before uploading."
  )
  process.exit(1)
}

const BUCKET = "rental-documents"

const REMOTE_PATHS = [
  "img/logo.svg",
  "img/logo3.svg",
  "img/regency2.svg",
  "img/home/banner2.webp",
  "img/home/1.webp",
  "img/home/2.webp",
  "img/home/7.webp",
  "img/home/8.webp",
  "img/interiors/1.webp",
  "img/interiors/2.webp",
  "img/interiors/3.webp",
  "img/interiors/4.webp",
  "img/community/1.webp",
  "img/community/2.webp",
]

const CONTENT_TYPES = {
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
}

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Download failed ${url}: ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.writeFileSync(dest, buf)
  return buf
}

async function main() {
  if (!SUPABASE_URL) {
    throw new Error("Set NEXT_PUBLIC_SUPABASE_URL")
  }
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

  console.log("Downloading images from rollingwoodstowns.ca...")
  for (const remotePath of REMOTE_PATHS) {
    const url = `https://rollingwoodstowns.ca/${remotePath}`
    const dest = path.join(TMP, remotePath)
    try {
      await download(url, dest)
      console.log("  ok", remotePath)
    } catch (e) {
      console.error("  fail", remotePath, e.message)
    }
  }

  const ogDest = path.join(TMP, "og-image.jpg")
  try {
    await download("https://rollingwoodstowns.ca/og-image.jpg", ogDest)
    console.log("  ok og-image.jpg")
  } catch {
    const banner = path.join(TMP, "img/home/banner2.webp")
    if (fs.existsSync(banner)) {
      fs.copyFileSync(banner, ogDest)
      console.log("  ok og-image.jpg (from banner)")
    }
  }

  const { data: buckets } = await supabase.storage.listBuckets()
  if (!buckets?.some((b) => b.name === BUCKET)) {
    console.warn(
      `Bucket "${BUCKET}" not visible to this key. Uploads will still be attempted.`
    )
  } else {
    console.log(`Using existing bucket "${BUCKET}"`)
  }

  const filesToUpload = []
  function walk(dir, prefix = "") {
    if (!fs.existsSync(dir)) return
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name)
      const rel = prefix ? `${prefix}/${name}` : name
      if (fs.statSync(full).isDirectory()) walk(full, rel)
      else filesToUpload.push({ local: full, storagePath: rel })
    }
  }
  walk(TMP)

  console.log(`\nUploading ${filesToUpload.length} files to Supabase...`)
  for (const { local, storagePath } of filesToUpload) {
    const ext = path.extname(local).toLowerCase()
    const contentType = CONTENT_TYPES[ext] ?? "application/octet-stream"
    const body = fs.readFileSync(local)
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(storagePath, body, { contentType, upsert: true })
    if (error) {
      console.error("  fail", storagePath, error.message)
    } else {
      const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${storagePath}`
      console.log("  ok", storagePath)
      console.log("     ", publicUrl)
    }
  }

  console.log("\nDone.")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
