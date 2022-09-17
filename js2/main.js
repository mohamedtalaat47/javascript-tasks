function askAge() {
    let ask = prompt("Please enter your age")

    if (ask !== null) {
        const num = Number(ask);
        if (!Number.isInteger(num) || num <= 0) {
            alert("invalid age");
        }else{
            if (0 < num && num < 11) {
                alert(`You're a child`);
            } else if (num < 19) {
                alert(`You're a teenager`);
            } else if (num < 51) {
                alert(`You're grown up`);
            } else if (num >= 51) {
                alert(`You're old`);
            } else {
                alert(`invalid input`);
            }
        }
        askAge();
    }
}
askAge();

function countVowels() {
    let ask = prompt("enter a word");

    let count = ask.match(/[aeiou]/gi);

    if (count !== null) {
        let result = ask.match(/[aeiou]/gi).length;
        alert(result);
    }else{
        alert("0")
    }
}
countVowels();


var current = new Date();
var time = current.getHours();
var mins = current.getMinutes()

if (time > 12) {
    document.write(`<h1>${time - 12}:${mins} PM</h1>`)
}else if (time == 0){
    document.write(`<h1>12:${mins} AM</h1>`)
}else if(time == 12){
    document.write(`<h1>12:${mins} PM</h1>`)
}else{
    document.write(`<h1>${time}:${mins} AM</h1>`)
}
