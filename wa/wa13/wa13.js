let employees = [
    {"firstName":"Sam", "department":"Tech", "designation":"Manager", "salary":40000, "raiseEligible":true},
    {"firstName":"Mary", "department":"Finance", "designation":"Trainee", "salary":18500, "raiseEligible":true},
    {"firstName":"Bill", "department":"Hr", "designation":"Executive", "salary":21200, "raiseEligible":false}
];

console.log("========= Problem 1 =========");
console.log(employees);

let company =  {"companyName":"Tech Stars","website":"www.techstars.site","employees": employees };

console.log("========= Problem 2 =========");
console.log(company);

function addEmployee(newHire){
    employees.push(newHire);
}

let newEmployee = {"firstName":"Anna", "department":"Tech", "designation":"Executive", "salary":25600, "raiseEligible":false};

console.log("========= Problem 3 =========");
addEmployee(newEmployee);
console.log(employees);

function companySalaryTotal(company){
    const employeeList = company.employees;
    let total = 0;
    for(let i = 0; i < employeeList.length; i++){
        total += employeeList[i].salary;
    }
    console.log("========= Problem 4 =========");
    console.log(total);
}

companySalaryTotal(company);

function giveRaise(company) {
    const list = company.employees;
    for(let i = 0; i < list.length; i++){
        if(list[i].raiseEligible){
            list[i].salary = list[i].salary * 1.1;
            list[i].raiseEligible = false;
        }
    }
    console.log("========= Problem 5 =========");
    console.log(company.employees);
}

giveRaise(company);

const wfh = ["Anna", "Sam"];

for(let i = 0; i < employees.length; i++){
    if(wfh.includes(employees[i].firstName)) {
        employees[i].wfh = true;
    } else {
        employees[i].wfh = false;
    }
}

console.log("========= Problem 6 =========");
console.log(employees);
