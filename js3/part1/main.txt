function login() {

    let username = prompt("Enter your username");
    let password = prompt("Enter your password");

    if (username == "admin" && password == "421$$") {
        alert("Welcome,you`ve logged in successfully");
    } else if (username !== "admin" && password !== "421$$") {
        alert("wrong username and password!");
        login();
    }
    else if (username !== "admin" && password == "421$$") {
        alert("wrong username!");
        login();
    } else if (username == "admin" && password !== "421$$") {
        alert("wrong password!");
        login();
    }
}

login();

function calc() {
    let firstNum = prompt("Enter first number");
    let operator = prompt("Enter an operator (+,-,*,/,%)");
    let secondNum = prompt("Enter second number");

    let result = eval(`${firstNum} ${operator} ${secondNum}`) ;
    alert(result);

}
calc();