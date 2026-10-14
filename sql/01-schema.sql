create table users (
  user_id    bigint generated always as identity primary key,
  user_name  text not null,
  email         text not null unique,
  created_at     timestamptz not null default now()
);

create table subjects (
  subject_id  bigint generated always as identity primary key,
  name        text not null unique,
  code      text not null unique
);

create table groups (
  group_id           bigint generated always as identity primary key,
  group_name         text not null,
  subject_id         bigint not null references subjects (subject_id),
  max_participants  integer not null default 10 check (max_participants > 0),
  created_at          timestamptz not null default now()
);

-- associative table: resolves the N:N relationship between users and groups
create table participations (
  user_id  bigint not null references users (user_id) on delete cascade,
  group_id    bigint not null references groups (group_id) on delete cascade,
  entered_at   date not null default current_date,
  primary key (user_id, group_id)
);

create table meetings (
  meeting_id  bigint generated always as identity primary key,
  group_id     bigint not null references groups (group_id) on delete cascade,
  week_day   smallint not null check (week_day between 1 and 7),  -- 1 = monday, 7 = sunday
  start_time  time not null,
  local        text not null
);

alter table users       enable row level security;
alter table subjects       enable row level security;
alter table groups         enable row level security;
alter table participations enable row level security;
alter table meetings      enable row level security;
