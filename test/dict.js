const entry = "mamarrrr";

const executives = {
    publo: "Jane",
    aMama: "Precious",
    mama: "success",

} // hashmap, dictionary 



const validOffices = Object.keys(executives)
const isValidOffice = validOffices.includes(entry)
if (!isValidOffice) {
    console.log("bad data")
}
else {
    console.log(executives[entry.trim()])
}