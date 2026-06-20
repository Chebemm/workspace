function studentsScore (score) {
if (score >= 70) {
    return "A"
}
else if (score >=60 && score <= 69) {
    return "B"
}

else if (score >=50 && score <= 59) {
    return "C"
}

else if (score >=49 && score <= 49){
    return "D"
}

else {return "fail"}

}
console.log (studentsScore (45))