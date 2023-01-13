INSERT INTO department (name)
VALUES ('Admin'),
    ('Human Resources'),
    ('Marketing'),
    ('Tech');

INSERT INTO role (title, salary, department_id)
VALUES ('CEO', '200000', 1),
    ('Recruiter', '140000', 2),
    ('Senior Developer', '120000', 4),
    ('Office Manager', '90000', 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Scott', 4, 4),
    ('Jim', 'Halpert', 3, 1),
    ('Pam', 'Beesly', 2, 1),
    ('David', 'Wallace', 1, null)