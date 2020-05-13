INSERT INTO department (id, name)
VALUES (1, "Sales");

INSERT INTO department (id, name)
VALUES (2, "Finance");

INSERT INTO role (id, title, salary, department_id)
VALUES (10, "Salesperson", 80000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (11, "Finance Manager", 100000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (12, "Accountant", 60000, 2);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (20, "Bill", "Lumbergh", 11);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (21, "Peter", "Gibbons", 10);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (22, "Milton", "Waddams", 12);