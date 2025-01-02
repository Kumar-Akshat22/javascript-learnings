// About Functions in JavaScript --- Keep It Simple

// Functions are a useful way to modularize our code and enhance the readability of our code

function sayMyName(){

    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("T");
}

// sayMyName; // This only gives the reference to the function sayMyName
// sayMyName(); // This executes the Function

// function addTwoNumbers(number1 , number2){

     // It's a good practice to include checks for the typeof number1 and number2 as we are not sure that only Numbers will be passed into the function.
//     console.log('I am above');
//     console.log(number1+number2);
// }

function addTwoNumbers(number1 , number2){

    console.log('I am below');
    return (number1+number2);
}

// const result = addTwoNumbers(3 , 4);
// console.log(result);

function loginUserMessage(userName){

    if(!userName){

        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in`


}

// console.log(loginUserMessage("Akshat"))

/* 

Consider a situation, you are building an e-commerce website and you don't know how many products are added into the cart by the user. But you have to present the Total Bill of the items. How can you model this situation?

*/

// Concept of Rest Operator (...) --> It is used at the funciton declaration level when we don't know about how many arguments will be passed to the function

function totalPrice(...val){

    // Rest (...) operator pushes all the arguments into a single array
    // Now, we can easily perform any kind of operation on it.
    return val;

}

// console.log(totalPrice(100, 200 , 300 , 400 , 500))


// Functions with Objects 
const user = {

    userName: "Kumar Akshat",
    // email: "kakshat@gmail.com",
}

function handleObject(anyObject){

    // Dealing with objects, always try to check whether the property exists or not. If it exists then, does it have some value or not
    // If we try to access the values that doesn't exist it will give the output as undefined.
    console.log(`User ${anyObject.userName} exists with Email ${anyObject.email}`);
}

handleObject(user);

// We can create and pass the object at the same time
handleObject({
    userName:"Priyanka",
    email:"pri@gmail.com"
});

// Functions with Arrays 
const myNewArray = [200 , 300 , 400]

function returnSecondValue(getArray){

    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10 , 20 , 30]));