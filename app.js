//from Employee Summary
//set up inquirer//
const render = require("./lib/htmlrenderer")
const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const path = require("path")
const fs = require("fs")
const output_dir = path.resolve(__dirname,"output")
const output_path = path.join(output_dir,"team.html")
let team = []
function init() {
    //set up prompts
    inquirer.prompt([

        {
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Department", "Add Role", "Update Employee Role"],
            name: "choices"
        },

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
    //questions for each specific role
        .then(function (response) {
            console.log(response)
            if (response.role === "Manager") {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is the manager's office number?",
                        name: "officeNum"
                    },
                    {
                        type: "list",
                        message: "Would you like to register another employee?",
                        choices: ["Yes", "No"],
                        name: "restart"
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
