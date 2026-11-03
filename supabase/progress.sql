-- One-time setup for saving learning progress online (部件听写 bujian.html and 必考字练习 bryan/zi.html).
-- Run in Supabase: SQL Editor -> New query -> paste -> Run.
-- One row per child and page: kid = 'bryan' / 'jordan', app = 'bujian' / 'zi', data = that page's progress.
create table if not exists public.progress (
  kid        text not null,
  app        text not null,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (kid, app)
);

alter table public.progress enable row level security;

drop policy if exists "progress read"   on public.progress;
drop policy if exists "progress insert" on public.progress;
drop policy if exists "progress update" on public.progress;
create policy "progress read"   on public.progress for select to anon, authenticated using (true);
create policy "progress insert" on public.progress for insert to anon, authenticated with check (true);
create policy "progress update" on public.progress for update to anon, authenticated using (true) with check (true);

grant select, insert, update on public.progress to anon, authenticated;
