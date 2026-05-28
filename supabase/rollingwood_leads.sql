-- =============================================================================
-- Rollingwood Townhomes — isolated lead table setup
-- =============================================================================
--
-- SAFE TO RUN: This script only creates/updates objects named rollingwood_*.
-- It does NOT:
--   • alter, drop, or truncate novella_leads or any other existing table
--   • change storage buckets (e.g. rental-documents)
--   • modify global roles, schemas, or RLS on other tables
--   • create triggers (optional notify block stays commented out)
--
-- Re-running is safe: uses IF NOT EXISTS / idempotent policy creation.
-- =============================================================================

begin;

-- -----------------------------------------------------------------------------
-- 1. New table only (skipped if already exists — existing rows are untouched)
-- -----------------------------------------------------------------------------
create table if not exists public.rollingwood_leads (
  id uuid not null default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text null,
  buyer_type text not null,
  home_interest text not null,
  purchase_timeframe text null,
  agent_name text null,
  brokerage text null,
  comments text null,
  consent boolean not null default true,
  created_at timestamp with time zone not null default now(),
  status text null default 'new'::text,
  lead_temperature text null default 'warm'::text,
  call_history jsonb null default '[]'::jsonb,
  call_count integer null default 0,
  last_note text null,
  lead_type text null default 'registration'::text,
  constraint rollingwood_leads_pkey primary key (id),
  constraint rollingwood_leads_buyer_type_check check (
    buyer_type = any (
      array[
        'first-time'::text,
        'investor'::text,
        'upgrader'::text,
        'downsizer'::text,
        'multigenerational'::text
      ]
    )
  ),
  constraint rollingwood_leads_home_interest_check check (
    home_interest = any (
      array[
        'classic'::text,
        'signature'::text,
        'both'::text,
        'not-sure'::text
      ]
    )
  )
);

-- Indexes scoped to this table only
create index if not exists rollingwood_leads_created_at_idx
  on public.rollingwood_leads (created_at desc);

create index if not exists rollingwood_leads_email_idx
  on public.rollingwood_leads (email);

-- -----------------------------------------------------------------------------
-- 2. RLS only on public.rollingwood_leads (other tables unchanged)
-- -----------------------------------------------------------------------------
alter table public.rollingwood_leads enable row level security;

-- Insert-only for site registration; no SELECT/UPDATE/DELETE policies for anon
do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'rollingwood_leads'
      and policyname = 'rollingwood_leads_anon_insert'
  ) then
    create policy rollingwood_leads_anon_insert
      on public.rollingwood_leads
      for insert
      to anon, authenticated
      with check (true);
  end if;
end
$$;

-- Grants limited to this table (does not grant on other tables)
grant insert on table public.rollingwood_leads to anon;
grant insert on table public.rollingwood_leads to authenticated;

commit;

-- -----------------------------------------------------------------------------
-- Optional (commented): add only if you create a dedicated notify function.
-- Will NOT run unless you uncomment — does not affect novella_leads trigger.
-- -----------------------------------------------------------------------------
-- create trigger notify_new_rollingwood_lead
--   after insert on public.rollingwood_leads
--   for each row
--   execute function notify_new_rollingwood_lead();
