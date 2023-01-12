const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
require(dotenv).config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Jsh2422!!!',
        database: 'company_db',
    },
    console.log('Connected to database.')
)

//main menu options
const mainMenu = () => {
    inquirer.prompt([
        {
            name: 'mainMenu',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role']
        }
    ]).then(selected => {
        switch(selected.mainMenu){
            case 'View all departments':
                viewDeparments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
        }
    })
}

//view options
const viewDepartments = () => {

}

const viewRoles = () => {
    
}
const viewEmployees = () => {

}

//add info
const addDepartment = () => {
    return inquirer.prompt([
        {
            name: 'deptName',
            type: 'input',
            message: 'What is the name of the department?',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter the department name.');
                    return false;
                }
            }
        }
    ])//.then add to db.query
    //.then return to mainMenu
}

const addRole = () => {
    return inquirer.prompt([
        {
            name: 'roleName',
            type: 'input',
            message: 'What is the name of the role?',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter the role name.');
                    return false;
                }
            }
        },
        {
            name: 'salary',
            type: 'number',
            message: 'Enter employee salary:',
            validate: numberInput => {
                if(numberInput){
                    return true;
                } else {
                    console.log('Please enter the employee salary.');
                    return false;
                }
            }
        },
        {
            //department [choices]
        }

    ])//.then add to db.query
    //.then return to mainMenu
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            name: 'employeeFirstName',
            type: 'input',
            message: "What is the employee's first name?",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            name: 'employeeLastName',
            type: 'input',
            message: "What is the employee's last name?",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            //role [choices]
        },
        {
            //manager [choices]
        }

    ])//.then add to db.query
    //.then return to mainMenu
}

const updateEmployee = () => {
    return inquirer.prompt([
        {
            name: 'updateMenu',
            type: 'list',
            message: 'Which employee information would you like to update?',
            //choices: []
        }
    ])
    //.then return to mainMenu
}