const isAtHome = true// 
const wifeIsHome = false;

if (isAtHome) {
    // do something 
}
else if (wifeIsHome) {
    // do something else 
} else {
    // exec the base case 
}


/// login flow 
const isValidEmail = false//
const isValidPassword = false;



if (isValidEmail && isValidPassword) {
    console.log("login")
} else if (isValidEmail && !isValidPassword) {
    console.log("only email is valid ")
}
else if (!isValidEmail && isValidPassword) {
    console.log("only pswd is valid ")
} else {
    console.log(" incorrect credentials")

}

const input = 5;
const typeofInput = typeof (input);

switch (isValidEmail, isValidPassword) {
    case !isValidEmail && isValidPassword:
        console.log("only pswd is valid")
        break;
    case isValidEmail && !isValidPassword:
        console.log("only email is valid")
        break;
    case isValidEmail && isValidPassword:
        console.log("login")
        break;
    default:
        console.log("invalid creds")

}

// ternary  
/** 
 * condition? "if true" : if false 
 */

/**
 * const validAge = age >=18 
 * const age = 18 
 * 
 * const isval---- ternary 
 */
const age = 6

// const ageResult = age > 18 ? "adult" : "minor"
// console.log(ageResult)

// const gender = "male";
// const genderToken = gender == "male" ? "m" : "f"
// console.log(genderToken)

// const price = 2000

// const actualPrice = price > 5000 ? "expensive" : "cheap"
// console.log(actualPrice)

// const clearance = 12

// const totalClearance = clearance == 12 ? "done with NYSC" : "i be Kopa"
// console.log(totalClearance)



let ageResult;
// if (age > 18) {
//     ageResult = "adult"

// }

// else if (age < 18) {
//     ageResult = "minor"
// }


if (age > 18) {
    ageResult = "adult"
}
else {
    ageResult = "minor"
}

 
let genderToken;
if (gender == "male") {
    genderToken = "m"

}

else if (gender == "female") {
    genderToken = "f"
}
else {
    genderToken = "others"
}


let actualPrice;
if (price > 5000) {
    actualPrice = "expensive"

}
else {
    actualPrice = "cheap"
}


let totalClearance;
if (clearance == 12) {
    totalClearance = "done with NYSC"

}

else {
    totalClearance = "i be kopa"
}