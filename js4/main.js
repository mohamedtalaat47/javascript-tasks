//constractor method

function Person1(fullName, money) {
    this.fullName = fullName
    this.money = money
    this.sleepMood
    this.healthRate
    this.sleep = function (hours) {
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
    this.eat = function (meals) {
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
    this.buy = function (items) {
        return this.money = parseInt(this.money) - parseInt(items) * 10
    }
}

// var mohamed = new Person1('mohamed talaat', '40')
// mohamed.sleep(4)
// console.log(mohamed.sleepMood)

// mohamed.eat(3)
// console.log(mohamed.healthRate)

// console.log(mohamed.money)
// mohamed.buy(3)
// console.log(mohamed.money)










//class method

class Person2 {
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

// var mohamed = new Person2('mohamed talaat', '80')
// mohamed.sleep(4)
// console.log(mohamed.sleepMood)

// mohamed.eat(2)
// console.log(mohamed.healthRate)

// console.log(mohamed.money)
// mohamed.buy(3)
// console.log(mohamed.money)

//oloo method

const Person3 = {
    init(fullName, money) {
        this.fullName = fullName
        this.money = money
        this.sleep = function (hours) {
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
        this.eat = function (meals) {
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
        this.buy = function (items) {
            return this.money = parseInt(this.money) - parseInt(items) * 10
        }
    }
}

// const mohamed = Object.create(Person3)
// mohamed.init('mohamed talaat', '200')

// mohamed.sleep(3)
// console.log(mohamed.sleepMood)

// mohamed.eat(3)
// console.log(mohamed.healthRate)

// mohamed.buy(3)
// console.log(mohamed.money)





//factory method

function Person4(fullName, money) {
    return {
        fullName: fullName,
        money: money,
        sleep: function (hours) {
            if (hours < 7) {
                return this.sleepMood = "Tired"
            } else if (hours == 7) {
                return this.sleepMood = "Happy"
            } else if (hours > 7) {
                return this.sleepMood = "Lazy"
            } else {
                return this.sleepMood = "invalid number of hours"
            }
        },
        eat: function (meals) {
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
        },
        buy: function (items) {
            return this.money = parseInt(this.money) - parseInt(items) * 10
        }
    }
}

// const mohamed = Person4('mohamed talaat','120')
// mohamed.buy(2)
// console.log(mohamed.money)

// mohamed.eat(1)
// console.log(mohamed.healthRate)

// mohamed.sleep(10)
// console.log(mohamed.sleepMood)



