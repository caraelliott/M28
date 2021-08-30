//OBJECTS
// objects are containers that can store data and functions 
// we use KEY VALUE PAIRS to STORE THE DATA

const alarm = {
    name: "WhiteSheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappucino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate",
    ]

};

///

const person = {
    "name",
    "age",
}
//

///
const person = {
    "cara",
    "27",
}
//

///
const person = {
    name: "Cara",
    age: 27,
}

// Values can be ANY DATA TYPE
// Values can be ARRAYS or FUNCTIONS

///
person.name
console.log(person.name)

//
//BRACKET NOTATION

console.log(person["name"])

//

///person.name VS person["name"]
// with BRACKETS we cab use:
// VARIABLES as KEYS of an OBJECT

// white sheep specials

let offer = "none";
let time = 1200;

const cafe = {
    name: "WhiteSheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappucino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],

    weekdayAlarm: "Free croissant with any coffee.",
    lunchOffer: "Free drink with any sandwich.",
    noOffer: "Sorry, no offers right now."
};

//
//
//putting each SPECIAL in an OBJECT and select one at a SPECIFIC TIME

let offer = "none";
let time = 1200;

const cafe = {
    name: "WhiteSheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],

    breakfastOffer: "Free croissant with any coffee",
    lunchOffer: "Free drink with any sandwich",
    noOffer: "Sorry, no offers at this time"

};

if(time < 1100) {
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
    

} else if (time < 1500) {
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
} else {
    offer = cafe.noOffer;
    console.log(cafe.noOffer);
};

///

//
let weekendAlarm = "no alarm needed";
let weekdayAlarm = "get up at 7AM";

day: [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"
];

alarm: [
    weekdayAlarm,
    weekendAlarm,
];


if(day = "Saturday" || "Sunday" {
    alarm = alarm.weekendAlarm;
    console.log(alarm.weekendAlarm);

} else {
    alarm = alarm.weekdayAlarm;
    console.log(alarm.weekdayAlarm);
}

///

//
cafe.biscuits = [
    "waffle",
    "shortbread"
];

cafe["biscuits"] = [
    "waffle",
    "shortbread"
];

///

//

const person = {
    age : 27,
    firstName : "cara",
    favSongs : [
        "Radiohead - Idioteque",
        "Black Flag - TV Party",
        "My Bloody Valentine - Slow"
 }

console.log(person.favSongs);

///
// OPEN / CLOSED

let offer = "none";
let time = 1200;

const cafe = {
    name: "WhiteSheep",
    seatingCapacity: 100;
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],

    lunchOffer: "Free drink with any sancwich.",

    noOffer: "Sorry, no offers at this time.",

    openCafe:()=>{
        return "Come on in";
    },

    closeCafe:()=>{
        return "We are closed, come back tomorrow!";
    }
};

console.log(cafe.openCafe());
console.log(cafe.closeCafe());

///

// es6 
// no longger NEED : OR =>

openCafe:()=>{
openCafe:(){
    return "Come on in!";
},
closeCafe:(){
    return "We are closed, come back tomorrow!";
}
//

openCafe(){
    return "Come on in!";

},

closeCafe(){
    return "We are closed, come back tomorrow!";
},


///

let offer = "none";
let time = 1200;

const cafe = {
    name = "WhiteSheep",
    seatingCapacity = 100,
    hasSpecialOffers = true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],

    breakfastOffer: "Free croissant with any coffee.",
    lunchOffer: "Free drink with any sandwich", 
    noOffer: "Sorry, no offers at this time.",

        openCafe(){

        if(hasSpecialOffers) {
            return "Time for a special offer!";
        }
       },

       closeCafe(){
           return "We are closed, come back tomorrow";

       }
};

console.log(cafe.openCafe());

//

let offer = "none.";
let time = 200;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks:[
        "Cappuccino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],
    breakfastOffer: "Free croissant with any coffee",
    lunchOffer: "Free drink with any sandwich",
    noOffer: "Aorry, no offers at this time",

    openCafe(){
        if(this.hasSpecialOffers){
            return "Time for a special offer!";

    }
},

closeCafe(){
    return "We are closed, come back tomorrow";
    }


};

console.log(cafe.openCafe());

///

const person = {
    age : 27,
    firstName : "cara",
    favSongs : [
        "Radiohead - Idioteque",
        "Black Flag - TV Party",
        "My Bloody Valentine - Slow"
    ]
 }

console.log(person.favSongs);
sayHi () { 
    return  "Hello, my name is ${this.firstName}";
};

///

const pet = {
    name: "Parviz",
    typeOfPet: "Cat",
    age: "1 and a half",
    colour: "white and black"

    eat(){
        return "${name} is eating!";
    }

    drink({
        return "${name} is drinking!";
    }

    ///

    //
    const coffeeshop = {
        branch = "Fallowfield",
        drinksPrice : [
            "Frappuccino £4.00",
            "Mocha £3.60",
            "Cortado £2.80",
            "Hot Chocolate £4.00",
            "Latte £4.oo"
        ]

        foodPrice : [
            "Pancakes and Nutella  £3.50",
            "Croissant  £2.25",
            "Muffin £2.50",
            "Flapjack £2.25"
        ]

        drinksOrdered(){
            return "You have ordered: ${foodPrice} and ${drinkPrice}"
        }
    }

};