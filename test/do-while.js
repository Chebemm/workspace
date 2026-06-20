// our variables

const endpoint = 150;
let counter = 1;
let counterResult;

// we do something while going from 1 to 150
do {

    if (counter % 3 == 0 && counter % 5 == 0) {
        counterResult = "fizzbuzz"
    }
    else if (counter % 3 == 0) {
        counterResult = "fizz"
    }
    else if (counter % 5 == 0) {
        counterResult = "buzz"
    }
    else {
        counterResult = counter
    }

    console.log(counterResult)
    counter++

}
while (counter <= endpoint) 