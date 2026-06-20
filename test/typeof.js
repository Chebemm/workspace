

// creating a class 
// remember that class gives object 
class Student {
    age;
    gender
    matriculationNumber

    constructor(age, gender, matriculationNumber) {

        if (age < 18) {
            throw Error("Wrong variable, the expected answer should be that age is > 18")

        }
        if (typeof gender != "string") {
            throw Error("Invalid data type for gender, expected string but got " + typeof gender,)
        }
        if (matriculationNumber.length != 8) {
            throw Error("Invalid length for matriculation number")
        }
    
        this.age = age
        this.gender = gender
        this.matriculationNumber
    }


    declareAge() {
        console.log(`I am ${this.age} years old`)
    }


    declareGender() {
        console.log(`I am a ${this.gender} `)
    }

}

// const precious = new Student(45, "female", "20184579")
const adefemi = new Student(18, "female", "12345678")


