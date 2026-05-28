# Rollingwood Townhomes

Marketing site for Rollingwood Townhomes (Next.js).

## Environment variables

Set these in [Vercel](https://vercel.com) → Project → Settings → Environment Variables:

| Variable | Where | Secret? |
|----------|--------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Build + runtime | No (public project URL) |
| `SUPABASE_ANON_KEY` | Server only (API routes) | Yes — use server env, not `NEXT_PUBLIC_` |
| `SUPABASE_SERVICE_ROLE_KEY` | Server only (optional) | Yes — never expose to browser |

Copy `.env.example` to `.env.local` for local development. Do not commit `.env.local`.

## Security

- Lead form posts to `/api/leads` (server-side only).
- Supabase keys are **not** in source code or Git.
- `rollingwood_leads` RLS allows insert only for anonymous users.
- Run `supabase/rollingwood_leads.sql` once in your Supabase SQL Editor.

## Deploy

```bash
pnpm install
pnpm build
```

Connected repo: [github.com/fahadvscode/rollingwood](https://github.com/fahadvscode/rollingwood)
