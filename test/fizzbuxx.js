const stopPoint = 50
let number = 1

let numberResult;


while (number <= 50) {
    if (number % 2 == 0 && number % 7 == 0) {

        numberResult = "fizzbuzz"
    }
    else if (number % 2 == 0) {
            numberResult = "fizz"
    }
        else if (number % 7 == 0) {
            numberResult = "buzz"
    }
        else {
            numberResult = number
        }

        console.log(numberResult)
        number++
    }