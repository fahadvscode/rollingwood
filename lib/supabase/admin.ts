import { createClient } from "@supabase/supabase-js"
import { supabaseAnonKey, supabaseServiceRoleKey, supabaseUrl } from "./env"

/** Server-only Supabase client for API routes. Never import in client components. */
export function createAdminClient() {
  if (!supabaseUrl) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL")
  }

  const key = supabaseServiceRoleKey || supabaseAnonKey
  if (!key) {
    throw new Error(
      "Missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY (server env only)"
    )
  }

  return createClient(supabaseUrl, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
