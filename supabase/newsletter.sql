-- Setup for Bryan's Daily News (bryan/news.html).
-- Run in Supabase: SQL Editor -> New query -> paste -> Run.
-- Safe to run again: it only adds what is missing.
create table if not exists public.newsletter (
  edition_date date primary key,
  headline     text not null default '' check (char_length(headline) <= 200),
  weather      text not null default '' check (char_length(weather) <= 16),
  story        text not null default '' check (char_length(story) <= 10000),
  updated_at   timestamptz not null default now()
);

-- Pages, their styles and all the stories of an edition.
alter table public.newsletter add column if not exists content jsonb not null default '{}'::jsonb;
alter table public.newsletter drop constraint if exists newsletter_content_size;
alter table public.newsletter add constraint newsletter_content_size check (octet_length(content::text) <= 200000);

alter table public.newsletter enable row level security;

drop policy if exists "newsletter read"   on public.newsletter;
drop policy if exists "newsletter insert" on public.newsletter;
drop policy if exists "newsletter update" on public.newsletter;
create policy "newsletter read"   on public.newsletter for select to anon, authenticated using (true);
create policy "newsletter insert" on public.newsletter for insert to anon, authenticated with check (true);
create policy "newsletter update" on public.newsletter for update to anon, authenticated using (true) with check (true);

grant select, insert, update on public.newsletter to anon, authenticated;

-- Make the new column visible to the website straight away.
notify pgrst, 'reload schema';
