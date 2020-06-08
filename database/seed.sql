INSERT INTO department (ID_PK, name)
VALUES (1, "Sales");

INSERT INTO department (ID_PK, name)
VALUES (2, "Finance");

INSERT INTO role (ID_PK, title, salary, department_id)
VALUES (1, "Salesperson", 80000, 1);

INSERT INTO role (ID_PK, title, salary, department_id)
VALUES (2, "Finance Manager", 100000, 2);

INSERT INTO role (ID_PK, title, salary, department_id)
VALUES (3, "Accountant", 60000, 2);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1, "Bill", "Lumbergh", 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Peter", "Gibbons", 1, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Milton", "Waddams", 3, 1);