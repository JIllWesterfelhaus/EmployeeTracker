const path = require("path")
const fs = require("fs")
//set up inquirer//
let mysql = require("mysql");
let inquirer = require("inquirer");

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
function start() {
    //set up prompts
    inquirer.prompt([
        //first question
        {
            name: "addViewUpdate",
            type: "list",
            message: "What would you like to do?",
            choices: ["Add", "View", "Update Employee Role"]
    }])
//if view, show employees, departments or roles table
//questions for add
    .then(function (response) {
        switch (response.addViewUpdate) {
            case "Add":
                add();
                break;
            case "View":
                view();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            default: console.log("Please enter appropriate choice.")   
        }
      })}
///choices for add, skipped past this, went to Employee
      function add() {
        //set up prompts
        inquirer.prompt([
            //first question
            {
                name: "employeeRoleDepartment",
                type: "list",
                message: "What would you like to add?",
                choices: ["Employee", "Role", "Department"]
        }])
    //questions for add
        .then(function (response) {
            switch (response.addViewUpdate) {
                case "Employee":
                    add();
                    break;
                case "Role":
                    add();
                    break;
                case "Department":
                    add();
                    break;
                default: console.log("Please enter appropriate choice.")   
            }
          })}
//changed to match table
function add() {
    inquirer.prompt([
        {
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?"
        },

        {
        name: "last_name",
            type: "input",
            message: "What is the employee's last name?"
         },
         //link to role table for id
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
        name: "id",
        type: "number",
         message: "What is the employee's id?"
        },

    (function (response) {
            console.table (response)
           let sql = "INSERT INTO employee (id, first_name, last_name, role)";
            //values entered above from prompts
          }),
     //end add employee
   
     //start add department
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
        //end add department


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
     ] )  .then(function (response) {
            console.table (response)
            //enter mysql code here

          })
        
 function view () {
    inquirer.prompt([
        {
        name: "choiceView",
        type: "list",
        message: "What would you like to view?",
        choices: ["All Employees", "All Departments", "All Roles"]
    }])  .then(function (response)  {
        switch (response) {
            case "All Employees":
                allEmployees();
                break;
            case "All Departments":
                allDepartments();
                break;
            case "All Roles":
                allRoles();
                break;
            default: console.log("Please enter appropriate choice.")   
        }
    })
 }

 function updateEmployeeRole () {
    inquirer.prompt([
        {
            name: "choiceUpdate",
            type: "list",
            message: "Which employee would you like to update?",
            //list employees, or input field? or table with employees?
            choices: ["All Employees"]
            },
            {
                name: "role",
                type: "list",
                message: "What is the employee's new role?",
                choices:  ["Salesperson", "Finance Manager", "Accountant"]
            }])  .then(function (response) {
                console.table(response)

            })
 }}
 


    

