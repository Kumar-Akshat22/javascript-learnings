const myNums = [1 , 2 , 3];

// const myTotal = myNums.reduce(function(acc , currVal){

//     console.log(`Acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;

// } , 0)


const myTotal = myNums.reduce((acc , curr)=>(acc+curr) , 0);
// console.log(myTotal);



const shoppingCart = [

    {
        itemName: "IPhone",
        price: 49999
    },
    {
        itemName: "Play Station",
        price: 39999
    },
    {
        itemName: "Nike Joggers",
        price: 2999
    }


]

const totalPrice = shoppingCart.reduce((acc , item)=>(acc+item.price) , 0);
console.log(totalPrice);