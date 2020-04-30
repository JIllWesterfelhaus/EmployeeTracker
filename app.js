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
  database: "tracker"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});


function init() {
    //set up prompts
    inquirer.prompt([
//first question
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["Add", "View", "Update Employee Role"],
            name: "choices"
        },
//if view, show employees, departments or roles table
//questions for add
.then(function (response) {
    console.log(response)
    if (response.choices === "Add") {
        inquirer.prompt([
            {
                type: "list",
                message: "What would you like to add?",
                choices: ["Employee", "Department", "Role"],
                name: "choiceAdd"
            },
//questions for add employee
.then(function (response) {
    console.log(response)
    if (response.choices === "Employee") {
        inquirer.prompt([
            {
            type: "input",
            message:  "What is the employee's first name?",
            name: "firstName"
            },

            {
            type: "input",
            message:  "What is the employee's last name?",
            name: "lastName"
            },

            {
            type:  "input",
            message: "What is the employee's role?",
            name: "role"
            },

            {
            type: "input",
            message:  "Who is the employee's manager?",
            name: "manager"
            },
            {
            type: "number",
            message:  "What is the employee's id?",
            name:  "employeeId"
            },
             //add department
            {
            type: "number",
            message: "What is the department ID?",
            name: "deptId"
            },
            {
             type: "input",
            message: "What is the department name?",
            name: "deptName" 
            },
            //add role
            {
            type: "number",
            message: "What is the role ID?",
            name: "roleId"
            },
            {
             type: "input",
             message: "What is the role title?",
            name: "role"  
            },
            {
            type: "number",
            message:  "What is the role salary?",
            name: "salary"
            },
            {
            type: "number",
            Message: "What is the department ID?",
            name: "deptId"   
            },

            
        ])
        
            .then(function (managerRes) {
                let newManager = new Manager(response.name, response.id, response.email, managerRes.officeNum)
                team.push(newManager)
                if (managerRes.restart==="Yes") {
                    init()
                } else {
                    writeHTML(render(team))
                }



        {
            type: "input",
            message: "Please begin here to register your new employee.  What is the new employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
        },
        
    ])
    
//update: retrieve existing employee and update role
            
                        
                        console.log(team)

                    })
            }

            if (response.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is the engineer's GitHub username?",
                        name: "userName"
                    },
                    {
                        type: "list",
                        message: "Would you like to register another employee?",
                        choices: ["Yes", "No"],
                        name: "restart"
                    },

                ])
                .then(function (engineerRes) {
                    let newEngineer = new Engineer(response.name, response.id, response.email, engineerRes.userName)
                    team.push(newEngineer)
                    if (engineerRes.restart==="Yes") {
                        init()
                    } else {
                        writeHTML(render(team))
                    }
                     
                    console.log(team)

                })

            }

            if (response.role === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What school does the intern attend?",
                        name: "school"
                    },
                    {
                        type: "list",
                        message: "Would you like to register another employee?",
                        choices: ["Yes", "No"],
                        name: "restart"
                    },

                ])
                .then(function (internRes) {
                    let newIntern = new Intern(response.name, response.id, response.email, internRes.school)
                    team.push(newIntern)
                    if (internRes.restart==="Yes") {
                        init()
                    } else {
                        writeHTML(render(team))
                    }
                    
                    console.log(team)

                })  

            }

        })
}
const writeHTML = HTML => {
    fs.writeFileSync (output_path, HTML, err => {
        if (err) {
            return console.log(err)
        }
    })

}


init();
