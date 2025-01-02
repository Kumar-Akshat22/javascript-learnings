// if 

// if(true){

//     console.log('Hi, this is Akshat');
// }


// if(false){

     // Code written inside the scope will never be executed
//     console.log('Hi everyone');
// }

const temperature = 21;
// if(temperature < 25){

//     console.log(`It's really cold here`);
// }
// else{

//     console.log('Not so cold');
// }

/* 
    Conditional Operators
        < , > , <= , >= , == (Loose Equality) , != , === ( Strict Equality ), !==
*/

const score = 200;
// if(score > 100){

//     const power = "fly";
//     console.log(`You have the power to ${power}`);
// }

// if - else if - else ladder
const balance = 1000;

// if(balance < 500){

//     console.log('Balance less than 500');
// } else if(balance < 700){
    
//     console.log('Balance less than 700');

// } else if(balance < 900){

//     console.log('Balance less than 900');
// } else{

//     console.log('Balance less than 1200');
// }

// And condition checking
const isLoggedIn = true;
const hasDebitCard = true;

if(isLoggedIn && hasDebitCard){

    console.log('Allowed to buy courses');
}

// OR conditional checking 
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if(loggedInFromGoogle || loggedInFromEmail){

    console.log('Welcome to your Dashboard');
}