const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const PromptUI = require('inquirer/lib/ui/prompt');
// require(dotenv).config();

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
            choices: ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role','Exit']
        }
    ]).then(selected => {
        switch(selected.mainMenu){
            case 'View all departments':
                viewDepartments();
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
            case 'Exit':
                console.log('All done!');
                // PromptUI.close()
                break;
            default: 
                console.log('default');
        }
    })
}

//view options
const viewDepartments = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.table(result);
            mainMenu();
        } 
    })
}

const viewRoles = () => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.table(result);
            mainMenu();
        }
    })
}
const viewEmployees = () => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.table(result);
            mainMenu();
        }
    })
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
    ]).then(input => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const params = [input.deptName]

        db.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Successfully added department: ${input.deptName}.`)
            } mainMenu();
        })
    })
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
            name: 'deptId',
            type: 'number',
            message: 'Which department does this role belong?',
            validate: numberInput => {
                if(numberInput){
                    return true;
                } else {
                    console.log('Please enter the department id.');
                    return false;
                }
            }
        }

    ]).then(input => {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?)`;
        const params = [input.roleName, input.salary, input.deptId]

        db.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Successfully added new role: ${input.roleName}.`);
            } mainMenu();
        })
    })
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
            //role
            name: 'roleId',
            type: 'number',
            message: "What is the role id?",
            validate: numberInput => {
                if(numberInput){
                    return true;
                } else {
                    console.log('Please enter the role id.');
                    return false;
                }
            }
        },
        {
            //manager
            name: 'managerId',
            type: 'number',
            message: "What is the manager id?",
            validate: numberInput => {
                if(numberInput){
                    return true;
                } else {
                    console.log('Please enter the mangager id.');
                    return false;
                }
            }
        }

    ]).then(input => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES (?)`;
        const params = [input.employeeFirstName, input.employeeLastName, input.roleId, input.managerId]

        db.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Successfully added new employee: ${input.employeeFirstName} ${input.employeeLastName}.`);
            } mainMenu();
        })
    })
}

const updateEmployee = () => {
    return inquirer.prompt([
        {
            name: 'updateMenu',
            type: 'list',
            message: 'Which employee information would you like to update?',
            //choices: []
        },
        {
            name: 'updatedRole',
            type: 'number',
            message: 'What is the new role id?',
            validate: numberInput => {
                if(numberInput){
                    return true;
                } else {
                    console.log('Please enter the new role id.');
                    return false;
                }
            }
        }
    ]).then(input => {
        const sql = `UPDATE employee SET first_name`;
        const params = [input.employeeFirstName, input.employeeLastName, input.roleId, input.managerId]

        db.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Successfully added new employee: ${input.employeeFirstName} ${input.employeeLastName}.`);
            } mainMenu();
        })
    })
    //.then return to mainMenu
}

mainMenu();
