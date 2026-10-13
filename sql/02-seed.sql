insert into subjects (name, code) values
  ('Mathematics', 'MAT101'),
  ('Physics',     'PHY101'),
  ('Programming', 'PRO101'),
  ('History',     'HIS101'),
  ('Literature',  'LIT101'),
  ('Chemistry',   'CHE101');

insert into users (user_name, email) values
  ('James Anderson',  'james.anderson@example.com'),
  ('Emily Thompson',  'emily.thompson@example.com'),
  ('Michael Davis',   'michael.davis@example.com'),
  ('Sarah Wilson',    'sarah.wilson@example.com'),
  ('David Martinez',  'david.martinez@example.com'),
  ('Jessica Brown',   'jessica.brown@example.com'),
  ('Christopher Lee', 'christopher.lee@example.com'),
  ('Olivia Taylor',   'olivia.taylor@example.com');

insert into groups (group_name, subject_id, max_participants) values
  ('Calculus Derivatives',   1, 6),
  ('Newton Laws',            2, 5),
  ('Python OOP',             3, 8),
  ('French Revolution',      4, 5),
  ('Macbeth Themes',         5, 6),
  ('Chemical Bonding',       6, 4);

insert into participations (user_id, group_id, entered_at) values
  (1, 1, '2026-09-01'), (1, 2, '2026-09-03'), (1, 3, '2026-09-05'),
  (2, 1, '2026-09-02'), (2, 3, '2026-09-06'),
  (3, 2, '2026-09-05'), (3, 3, '2026-09-07'), (3, 4, '2026-09-08'),
  (4, 3, '2026-09-08'), (4, 5, '2026-09-09'),
  (5, 1, '2026-09-10'), (5, 6, '2026-09-10'),
  (6, 3, '2026-09-11'),
  (7, 4, '2026-09-12'), (7, 5, '2026-09-12'),
  (8, 3, '2026-09-13');

insert into meetings (group_id, week_day, start_time, local) values
  (1, 2, '18:00', 'Lecture Hall'),
  (2, 4, '19:00', 'Science Laboratory'),
  (3, 6, '10:00', 'Computer Studio'),
  (3, 3, '19:30', 'Computer Studio'),
  (4, 1, '17:00', 'Seminar Room'),
  (5, 3, '18:30', 'Reading Room'),
  (6, 5, '16:00', 'Research Laboratory');

