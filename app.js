//from Employee Summary
const path = require("path")
const fs = require("fs")
//set up inquirer//
//from GreatBay class exercise
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "mySQL1234!",
    database: "tracker_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});
function init() {
    //set up prompts
    inquirer.prompt([
        //first question
        {
            name: "addViewUpdate",
            type: "list",
            message: "What would you like to do?",
            choices: ["Add", "View", "Update Employee Role"]
        },
//if view, show employees, departments or roles table
//questions for add
.then(function (response) {
            if (response.addViewUpdate === "Add") {
                inquirer.prompt([
                    {
                        name: "choiceAdd",
                        type: "list",
                        message: "What would you like to add?",
                        choices: ["Employee", "Department", "Role"]
                    },
//question for view
.then(function (response) {
    if (response.addViewUpdate === "View") {
        inquirer.prompt([
            {
                name: "choiceAdd",
                type: "list",
                message: "What would you like to view?",
                choices: ["All Employees", "All Departments", "All Roles"]
            },
//generate table per user's response//

//question for update//
.then(function (response) {
    if (response.addViewUpdate === "Update") {
        inquirer.prompt([
            {
                name: "choiceUpdate",
                type: "input",
                message: "Which emaployee would you like to update?",
                //list employees
                choices: ["Employee", "Department", "Role"]
            },

//questions for add employee
.then(function (response) {
                        console.log(response)
                        if (response.choices === "Employee") {
                            inquirer.prompt([
                                {
                                    name: "firstName",
                                    type: "input",
                                    message: "What is the employee's first name?"
                                },

                                {
                                    name: "lastName",
                                    type: "input",
                                    message: "What is the employee's last name?"
                                },

                                {
                                    name: "role",
                                    type: "input",
                                    message: "What is the employee's role?"
                                },

                                {
                                    name: "manager",
                                    type: "input",
                                    message: "Who is the employee's manager?"
                                },

                                {
                                    name: "employeeId",
                                    type: "number",
                                    message: "What is the employee's id?"
                                },
                                //add department
                                {
                                    name: "deptId",
                                    type: "number",
                                    message: "What is the department ID?"
                                },
                                {
                                    name: "deptName",
                                    type: "input",
                                    message: "What is the department name?"
                                },
                                //add role
                                {
                                    name: "roleId",
                                    type: "number",
                                    message: "What is the role ID?"
                                },
                                {
                                    name: "role",
                                    type: "input",
                                    message: "What is the role title?"
                                },
                                {
                                    name: "salary",
                                    type: "number",
                                    message: "What is the role salary?"
                                },
                                {
                                    name: "deptId",
                                    type: "number",
                                    Message: "What is the department ID?"
                                },
                            ])
     //questions for update employee
     //colums to update: id, first name, last name, role_id, manager_id                       
                                


init()
