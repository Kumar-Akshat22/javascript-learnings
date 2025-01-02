const myNums = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Problem: We want to add 10 to every number in the myNums array.

// const newNums = myNums.map((num)=>(num + 10))
// console.log(newNums);

// Chaining of methods
const newNums = myNums
                .map((num)=>(num*10))
                .map((num)=>(num+1))
                .filter((num)=>( num >= 20 ));

console.log(newNums);