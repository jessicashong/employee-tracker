INSERT INTO department (name)
VALUES ('Human Resources'),
    ('Marketing'),
    ('Admin'),
    ('Tech');

INSERT INTO role (title, salary, department_id)
VALUES ('Customer Service Manager', '100000', 1),
    ('Junior Developer', '80000', 4),
    ('Senior Developer', '120000', 4),
    ('Office Manager', '90000', 3);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ('Jess', 'Hong', 2)