-- 1. Full table
select * from subjects;

-- 2. Filter and sort
select group_name, max_participants
from groups
where max_participants >= 6
order by group_name;

-- 3. JOIN: each group with the subject name
select g.group_name, s.name as subject, s.code
from groups g
join subjects s on s.subject_id = g.subject_id
order by s.name;

-- 4. Aggregation: number of participants per group
select g.group_id, g.group_name, count(p.user_id) as participants
from groups g
left join participations p on p.group_id = g.group_id
group by g.group_id, g.group_name
order by participants desc, g.group_name;

-- 5. Remaining slots per group
select g.group_name,
       g.max_participants,
       count(p.user_id) as participants,
       g.max_participants - count(p.user_id) as vacancies
from groups g
left join participations p on p.group_id = g.group_id
group by g.group_id, g.group_name, g.max_participants
order by vacancies desc, g.group_name;

-- 6. A specific person's groups
select u.user_name, g.group_name, s.name as subject, p.entered_at
from users u
join participations p on p.user_id = u.user_id
join groups g        on g.group_id   = p.group_id
join subjects s      on s.subject_id = g.subject_id
where u.email = 'james.anderson@example.com'
order by p.entered_at;

-- 7. Group schedule
select g.group_name, m.week_day, m.start_time, m.local
from groups g
join meetings m on m.group_id = g.group_id
where g.group_name = 'Python OOP'
order by m.week_day, m.start_time;
