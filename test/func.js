// a function that sums 2 number

function sum(numOne, numTwo) {
    return numOne + numTwo;

}


const result = sum(3, 5);
const result2 = sum(9, -1);


console.log(result)
console.log(result2)

console.log(sum(5, 25));


// arrow functions 
const sub = (numOne, numTwo) => numOne - numTwo;
console.log(sub(45, 5));

(function () {
    console.log("age")
})()