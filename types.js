const age = "45";

console.log(typeof (age * 2))


/**
 * We have 5 major types 
 * 
 * Object
 * Array
 * Map, WeakMap
 * Set, WeakSet 
 * 
 * 
 * Object are also called Dictionary 
 * example of object 
 */

// object for grouping data/value
const student = {
    name: "Precious",
    age: 45,
    gender: "Female",
    isMarried: false,
    corpMember: true
}


// Array for collection,
// for example, the list of items in yor purse
const purseItems = ["eye liner", "lip stick", "mirror", []]

// collection of objects 

const contacts = [
    { name: "Alex", phone: "+2345267936" },
    { name: "Philip", phone: "+23775267936" },
    { name: "Redwood", phone: "+2348867936" },
    {
        name: "Bright", phone: "+2348867936", addresses: [
            { state: "Oyo", lga: "Ibarap central " },
            {state:"Akwa Ibom", emergencyContact:[
                []
            ]}
        ]
    },

]

const rr = {banks:[], safeHouses:[]}

console.log(JSON.stringify(contacts, null, 2))