 const executive = "mama           "

const normalizedInput = executive.toLowerCase().trim()



let executivePosition;

if (normalizedInput == "papa") {
    executivePosition = "Eze Emmanuel Chukwuebuka"
}
else if (normalizedInput == "mama") {
    executivePosition = "Ogodo Success Oluebube"
}

else if (normalizedInput == "uncle") {
    executivePosition = "Umeh Goodness Chibuike"
}
else if (normalizedInput == "amama") {
    executivePosition = "Ajie Precious Chukwuchebe"
}

else if (normalizedInput == "rabbi") {
    executivePosition = "Olaniyan Oluwafemi Emmanuel"
}

else if (normalizedInput == "tbucncle") {
    executivePosition = "Adefemi Adeoye Opeoluwa"
}

else if (normalizedInput == "publo") {
    executivePosition = "Wilfred Chiamaka Jane"
}

else { executivePosition = "Invalid" }

console.log(executivePosition) 