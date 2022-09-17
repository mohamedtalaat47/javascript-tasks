var firstName = prompt("Hello, please enter your first name");

var lastName = prompt("now enter your last name");

var nameConfirmation = confirm(`Your full name is ${firstName} ${lastName} ?`);

switch (nameConfirmation) {
    case true:
        var fullName = `${firstName} ${lastName}`;
        var birthYear = prompt("Please enter your birth year");

        var age = new Date().getFullYear() - birthYear;
        alert(`Welcome ${fullName} you are ${age} years old.`)

        break;
    case false:
        location.reload();
        break;
}

function calc() {
    alert("This is the first release of a calculator that only has a summation feature.");

    var num1 = prompt("Enter first number");

    var num2 = prompt("Enter second number");

    var result = parseInt(num1) + parseInt(num2);

    switch (isNaN(result)) {
        case true:
            alert("please enter valid numbers next time");
            break;
    
        default:
            alert(result);
            break;
    }
}

calc();



