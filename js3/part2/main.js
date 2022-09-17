function sumAndAvg() {
    var arrOfNums = [];
    while (true) {
        var num = prompt("Enter a number");
        if (num === null) break;
        arrOfNums.push(num);
    }
    var sum = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        sum += Number(arrOfNums[i]);
    }
    function arrayAvg(myArray) {

        var arrLength = myArray.length;
        return sum / arrLength;
    }
    alert(`sum is ${sum} and average is ${arrayAvg(arrOfNums)}`)

}
sumAndAvg();

var arrOfContacts = [];

function phoneBook() {
    var operation = prompt("Choose an operation (add,search)");

    if (operation == "add") {
        var name = prompt("Enter contact name");
        var phone = prompt("Enter phone number");
        var contact = {
            name: `${name}`,
            phone: `${phone}`
        };
        arrOfContacts.push(contact);
        alert("contact added successfully");
        console.log(arrOfContacts);
    } else if (operation == "search") {
        var searchInput = prompt("search by name or phone number");
        let searchResult = arrOfContacts.find(o => o.name === `${searchInput}`) || arrOfContacts.find(o => o.phone === `${searchInput}`);
        console.log(searchResult);
        alert(`Name is : ${searchResult.name} and phone number is : ${searchResult.phone}`)
    } else {
        alert("invalid operation");
    }
    if (operation !== null) {
        phoneBook();
    }
}
phoneBook();