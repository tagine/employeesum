// Dependencies
/// To ask questions
const inquirer = require("inquirer");
/// To print to HTML file
const fs = require("fs");
// // What's this for?
// const fs = require("employee");
/// To test
const jest = require("jest");



// push all newly constructed team members HERE
const teamMembers = {};
teamMembers.push ("Name");



/// *NOTE TO SELF WOULDN'T YOU WANT A FILTER SO YOU CAN MAKE IT TO THE NEXT SET OF SPECIFIC QUESTIONS?
// Question prompts using inquirer
const askQuestions = (res, answers) => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
            // NOT NEEDED HERE but for others maybe//choices: ["yes","no"]
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee ID?"
            // NOT NEEDED HERE but for others maybe//choices: ["yes","no"]
        },
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?"
            // NOT NEEDED HERE but for others maybe//choices: ["yes","no"]
        },
        {
            type: "input",
            name: "email",
            message: "What is your e-mail address?"
            // NOT NEEDED HERE but for others maybe//choices: ["yes","no"]
        },
        {
            type: "input",
            name: "role",
            message: "What is your role?",
            choices: ["Manager", "Intern", "Engineer"]
            // NOT NEEDED HERE but for others maybe//choices: ["yes","no"]
        },

        // ARE THERE MORE?

        //ANSWERS IS SAVING ALL THE ANSWERS FROM THE QUESTIONS
    ]).then(answers => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const role = answers.role;
        const managerName = answers.managerName;
        const manager = new Manager(managerName);
    })
};

// Variable declarations
///should the original values be in these variables right here instesad of the constructor?
// const employee =
// {
//     engineer: {},
//     intern: {},
//     manager: {},
// };

// Functions
// function getRole ();

// const outputPath = path.resolve(__dirname, "output", "team.html")




// Extended classes
class Engineer extends Employee {
    constructor() {

    }
    getGithub() {};
    getRole() {};
};

// Extended classes
class Intern extends Employee {
    constructor() {
        school: "UPenn",
        getSchool();
        getRole();
    }
};

// Extended classes
class Manager extends Employee {
    constructor() {
    officeNumber: 200,
        getRole();
    }
};

// const employee_variable = new Employee(name: "Rana", id: 0, title: "Engineer");
