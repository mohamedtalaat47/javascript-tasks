
arr1 = ["mohamed", "ahmed", "ali", "hassan"];
arr2 = ["peter", "hussien", 5];

obj1 = {
    name: "bruce",
    age: "24",
    gender: "male"
}

obj2 = {
    address: "10 john st",
    hasJob: true,
}



//EX1 => object predefined methods

Object.values(obj1)        //creates an array containing the values of an object.
Object.keys(obj1)          //creates an array containing the keys of an object.
Object.entries(obj1)       //creates a nested array of the key/value pairs of an object.
Object.assign(obj1, obj2)  //is used to copy values from one object to another.
Object.freeze(obj2)        //prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.
Object.seal(obj2)          //prevents new properties from being added to an object, but allows the modification of existing properties. This method is similar to Object.freeze().
Object.create(obj1)        //create a new object and link it to the prototype of an existing object.
parseInt(obj1.age)         //returns integar from a string.
parseFloat(obj1.age)       //returns float from a string.
obj1.gender.indexOf("l")   //returns the first index of the given character.


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------


//EX2 => array predefined methods

arr1.concat(arr2)
arr1.join(', ')        //Create a string from an array.
arr1.includes('ahmed') //check if the array contains "ahmed".
arr1.push('fathy')     //append a new string to the array.
arr1.pop()             //remove the last item from the array.
arr1.splice(-2)        //remove the last 2 items from the array.
arr1.shift()           //remove the first item from the array.
arr1.unshift('banana') //add, at index 0, a new item to the array — making it the new first item in the array.
arr1.reverse()         //transposes the elements of an array: the first array element becomes the last and the last becomes the first.    
arr1.sort()            //sorts the elements of an array.

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------


const fullName = "Mohamed Talaat";   // variable is outside function but still defined inside it

function profile() {
    function sayName() {
        return fullName;
    }
    console.log(sayName());
}
profile();