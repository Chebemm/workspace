
function fizzBuzz(start, end) {
    for (let counter = start; counter <= end; counter++) {
        if (counter % 3 == 0 && counter % 5 == 0) {
            console.log("fizzBuzz")
        }

        else if (counter % 3 == 0) {
            console.log("fizz")
        }
        else if (counter % 5 == 0) {
            console.log("buzz")
        }

        else {
            console.log(counter)
        }
    }
}


fizzBuzz(20, 30)