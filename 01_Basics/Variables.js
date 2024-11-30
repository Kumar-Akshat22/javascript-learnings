// const , let and var ki Kahani 

const accountId = 1223344

let accountEmail = "akshat@google.com"

var accountPassword = "12345"

accountCity = "Jaipur" // Not a good practice

let accountState // We, have not initialized it with any value

// accountId = 2 // Not allowed as it was previously declared constant => "const"

accountEmail = "kumar@ak.com"

accountPassword = "21212121"

accountCity = "Delhi"

// General Way to output things
console.log(accountId);

// Let's add some style to output things
console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);

/*

NOTES:

1. In JavaScript, initially 'let' was not introduced and 'var' was being used.
2. But, 'var' had scope level issues.
3. Just keep in mind that we are going to use only 'let' and 'const'.
4. If we just declare a variable without initializing it with a value, it will give 'undefined' as the output.

*/