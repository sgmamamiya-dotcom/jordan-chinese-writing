-- One-time setup for online ticks on todo.html.
-- Run in Supabase: SQL Editor -> New query -> paste -> Run.
create table if not exists public.todo_checks (
  task_id    text primary key,
  done       boolean not null default true,
  updated_at timestamptz not null default now()
);

alter table public.todo_checks enable row level security;

drop policy if exists "todo_checks read"   on public.todo_checks;
drop policy if exists "todo_checks insert" on public.todo_checks;
drop policy if exists "todo_checks update" on public.todo_checks;
create policy "todo_checks read"   on public.todo_checks for select to anon, authenticated using (true);
create policy "todo_checks insert" on public.todo_checks for insert to anon, authenticated with check (true);
create policy "todo_checks update" on public.todo_checks for update to anon, authenticated using (true) with check (true);

grant select, insert, update on public.todo_checks to anon, authenticated;
