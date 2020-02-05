// Dependencies
/// To ask questions
const inquirer = require("inquirer");
/// To print to HTML file
const fs = require("fs");
/// To test
const jest = require("jest");

// push all newly constructed team members HERE
const teamMembers = [];



/// *NOTE TO SELF WOULDN'T YOU WANT A FILTER SO YOU CAN MAKE IT TO THE NEXT SET OF SPECIFIC QUESTIONS?
// Question prompts using inquirer
const askQuestions = () => [
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?"
            // NOT NEEDED HERE but for others maybe//choices: ["yes","no"]
        },

        // ARE THERE MORE?

        //ANSWERS IS SAVING ALL THE ANSWERS FROM THE QUESTIONS
    ]).then(answers => {
        const managerName = answers.managerName;
        const manager = new Manager(managerName);
    });

// Variable declarations
///should the original values be in these variables right here instesad of the constructor?
const employee =
{
    engineer: {},
    intern: {},
    manager: {},
};

// Functions
// function getRole ();

const outputPath = path.resolve(__dirname, "output", "team.html")

// Classes
/// Parent class
class Employee {
    name;
    id;
    title;
    getName() { return name };
    getId();
    getEmail();
    getRole(Engineer, Intern, Manager) {

        // Subclass
        class Engineer {
            getGithub();
            getRole();
        };
        // Subclass
        class Intern {
            school: "UPenn",
            getSchool();
            getRole();
        };
        // Subclass 
        class Manager {
            officeNumber: 200,
            getRole();
        }
    };
};

const employee_variable = new Employee(name: "Rana", id: 0, title: "Engineer");
