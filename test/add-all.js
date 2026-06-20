 function sumAllNumbers() {
    // array
    // console.log(...arguments)
}


sumAllNumbers(3, 6, 7, 8, 990, 23, 45, 6)
const greeter = (name, message = "Hi") => console.log(`${message} ${name}`);
// greeter("Precious", "Ki lo wa na")


function sumRange(start, stop) {
    let sum = 0;

    if (stop < start) {
        throw Error(`Oopses! that's bad\n Expected start to be be less than stop but start=${start} and stop=${stop}`)
    }
    while (start <= stop) {
        sum += start;
        start++
    }

    return sum;
}

const res = sumRange(30, 10000)

const res2 = sumRange(300, 10000)

console.log(res, res2)