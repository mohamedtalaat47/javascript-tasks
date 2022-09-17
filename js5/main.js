class Person {
    constructor(fullName, money) {
        this.fullName = fullName
        this.money = money
        this.sleepMood
        this.healthRate
    }
    sleep(hours) {
        if (hours < 7) {
            return this.sleepMood = "Tired"
        } else if (hours == 7) {
            return this.sleepMood = "Happy"
        } else if (hours > 7) {
            return this.sleepMood = "Lazy"
        } else {
            return this.sleepMood = "invalid number of hours"
        }
    }
    eat(meals) {
        switch (meals) {
            case 3:
                return this.healthRate = "100%"
                break;
            case 2:
                return this.healthRate = "75%"
                break;
            case 1:
                return this.healthRate = "50%"
                break;
            default:
                return this.healthRate = "invalid number of meals"
                break;
        }
    }
    buy(items) {
        return this.money = parseInt(this.money) - parseInt(items) * 10
    }
}



class Employee extends Person {
    #salary
    constructor(fullName, money, email, isManager) {
        super()
        this.fullName = fullName
        this.money = money
        this.email = email
        this.workMood
        this.#salary
        this.isManager = isManager
    }
    get salary() {
        if (this.isManager == false) {
            return this.#salary
        } else {
            return "confdential"
        }
    }
    set salary(amount) {
        if (parseInt(amount) >= 1000) {
            return this.#salary = amount
        } else {
            return this.#salary = 1000
        }
    }
    work(hours) {
        if (hours < 8) {
            return this.workMood = "Lazy"
        } else if (hours == 8) {
            return this.workMood = "Happy"
        } else if (hours > 8) {
            return this.workMood = "Tired"
        } else {
            return this.workMood = "invalid number of hours"
        }
    }
}

const mohamed = new Employee("mohamed", "200", "test@test.com", false)

// mohamed.salary = 20
// console.log(mohamed.salary)
// mohamed.work(8)
// console.log(mohamed.workMood)



var EmployeesNames = ["mohamed ahmed", "hassan mahmoud", "ali hossam"]
var EmployeesEmails = ["1@gmail.com", "2@gmail.com", "2@gmail.com"]
var EmployeesAge = [24, 22, 35]
var isManager = [true, false, false]


class Office {

    getAllEmployees() {
        alert(EmployeesNames)
    }
    getEmployee(email) {
        let id = EmployeesEmails.indexOf(email);
        let info = `name : ${EmployeesNames[id]} \nemail : ${EmployeesEmails[id]}  \nage : ${EmployeesAge[id]} \nis manager : ${isManager[id]}`
        alert(info)
    }
    hire() {
        let managerStatus = prompt('is the new member a manager? "yes or no"')
        switch (managerStatus) {
            case "yes":
                true
                break;
            case "no":
                false
                break;
            default:
                false
                break;
        }
        let name = prompt('Enter Employee name')
        let age = prompt('Enter Employee age')
        let email = prompt('Enter Employee email')
        EmployeesNames.push(name)
        EmployeesEmails.push(email)
        EmployeesAge.push(age)
        isManager.push(managerStatus)
        alert("Employee added succesfully")

    }
    fire(email) {
        let id = EmployeesEmails.indexOf(email);
        EmployeesNames.splice(id)
        EmployeesEmails.splice(id)
        EmployeesAge.splice(id)
        isManager.splice(id)

        alert("Employee is fired succesfully")

    }
}

function menu() {
    let program = new Office

    let start = prompt('Hello, select an action to start \nall: get all employees names \ninfo: get employee informations \nhire: hire a new employee \nfire: fire an employee \nq: quit')

    switch (start) {
        case 'all':
            program.getAllEmployees()
            menu()
            break;
        case 'info':
            let emailInput = prompt('Enter an email to search with')
            program.getEmployee(emailInput)
            menu()
            break;
        case 'hire':
            program.hire()
            menu()
            break;
        case 'fire':
            let fireEmail = prompt('Enter an email to search with')
            program.fire(fireEmail)
            menu()
            break;
        case 'q':
            break;

        default:
            alert('invalid input,restarting program!')
            menu()
            break;
    }
}
menu()



/* 
comparsion between abstract & interface

An interface can have only abstract methods, an abstract class can have both abstract and non-abstract methods
An interface can only have public members, while an abstract class can have protected and public members.
Abstract class can provide the implementation of the interface. Interface can not provide the implementation of an abstract class


Inheritance in function constructor  

Using the constructor function, we can create a new object after passing the required parameters.
Inheriting a previously defined constructor function means using the parameters of the previously defined function along with adding some new parameters to the newly defined constructor function.
*/