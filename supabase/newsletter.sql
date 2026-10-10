-- One-time setup for Bryan's Daily News (bryan/news.html).
-- Run in Supabase: SQL Editor -> New query -> paste -> Run.
create table if not exists public.newsletter (
  edition_date date primary key,
  headline     text not null default '' check (char_length(headline) <= 200),
  weather      text not null default '' check (char_length(weather) <= 16),
  story        text not null default '' check (char_length(story) <= 10000),
  updated_at   timestamptz not null default now()
);

alter table public.newsletter enable row level security;

drop policy if exists "newsletter read"   on public.newsletter;
drop policy if exists "newsletter insert" on public.newsletter;
drop policy if exists "newsletter update" on public.newsletter;
create policy "newsletter read"   on public.newsletter for select to anon, authenticated using (true);
create policy "newsletter insert" on public.newsletter for insert to anon, authenticated with check (true);
create policy "newsletter update" on public.newsletter for update to anon, authenticated using (true) with check (true);

grant select, insert, update on public.newsletter to anon, authenticated;
