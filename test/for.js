
// for(init; condition; iter;){

// }

let counterResult;

for (let index = 1; index <= 150; index++) {

    if (index % 3 == 0 && index % 5 == 0) {
        counterResult = "fizzbuzz"
    }
    else if (index % 3 == 0) {
        counterResult = "fizz"
    }
    else if (index % 5 == 0) {
        counterResult = "buzz"
    }
    else {
        counterResult = index
    }

    console.log(counterResult)
    index++
}