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
//questions for add employee
.then(function (response) {
    console.log(response)
    if (response.choices === "Employee") {
        inquirer.prompt([
            {
                name: "firstName",
                type: "input",
            message:  "What is the employee's first name?"
            },

            {
                name: "lastName",
                type: "input",
                message:  "What is the employee's last name?"
            },

            {
                name: "role",
                type:  "input",
            message: "What is the employee's role?"
            },

            {
                name: "manager",
                type: "input",
            message:  "Who is the employee's manager?"
            },
            {
                name:  "employeeId",
                type: "number",
            message:  "What is the employee's id?"
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
            message:  "What is the role salary?"
            },
            {
                name: "deptId",
                type: "number",
            Message: "What is the department ID?"    
            },

            
        ])
        ///from employee tracker
            .then(function (managerRes) {
                let newManager = new Manager(response.name, response.id, response.email, managerRes.officeNum)
                team.push(newManager)
                if (managerRes.restart==="Yes") {
                    init()
                } else {
                    writeHTML(render(team))
                }

       
    ])   
//update: retrieve existing employee and update role
            
                        
                        console.log(team)

                    })
            }

            if (response.role === "Engineer") {
                inquirer.prompt([
                    

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
