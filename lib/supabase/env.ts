/** Public project URL (not a secret). */
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""

/** Server-only keys — never use NEXT_PUBLIC_ prefix for these. */
export const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""
export const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? ""
