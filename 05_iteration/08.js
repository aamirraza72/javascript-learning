// reduce() accumulates all array elements into a single value.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, curval) {

//     console.log(`acc:  ${acc} and current value: ${curval}` );
    
//     return acc + curval
// }, 2  )

// console.log(myTotal);


const myTotal = myNums.reduce( (acc,curval) => acc+curval ,0)
//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 499
    },
     {
        itemName: "Python course",
        price: 999
    },
     {
        itemName: "Data Science course",
        price: 1999
    },
]

const totalAmount = shoppingCart.reduce( (acc,item) => acc + item.price,0 )
console.log(totalAmount);
