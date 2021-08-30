let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

console.log(coffeeOrder);

console.log(coffeeOrder[2]);

coffeeOrder[3] = "Ann - Vanilla Latte";

console.log(coffeeOrder);
console.log(coffeeOrder.length);

coffeeOrder.push("Donna - Espresso");
console.log(coffeeOrder);

console.log.push("Seena - Chai Nabat");
console.log(coffeeOrder);

console.pop();
console.log(coffeeOrder);

let favGames = [
    "Link's Awakening",
    "Streets of Rage 1,2,4",
    "Altered Beast",
    "Panzer Paladin",
    "EDF",
    "Shakedown Hawaii",
    "Ocarina of Time",
    "Final Fight",
    "Simpsons Arcade Game",
    "X-Men Arcade Game",
    "DnD Chronicles of Mystara",
    "Captain Commando",
    "Metal Slug 3",
    "Knights of the Round"
]

console.log(favGames);

let toBuy = [
    "Cyberpunk 2077 XBONE",
    "Aliens: Fireteam Elite",
    "River City Girls 2",
    "Klonoa 1,2",
    "Legend of Zelda: Oracle of Seasons/Ages",
    "Daemon x Machina",
    "Witcher 2",
    "TMNT: Shredder's Revenge",
]

console.log(toBuy);

let favSongs = [
    "Radiohead - Idioteque",
    "Failure - Another Space Song",
    "Slowdive - Souvlaki Space Station",

]
console.log(favSongs);

favSongs.push("Ride - Drive Blind");
favSongs.push("Deerhunter - Agoraphobia");

console.log(favSongs);

favSongs.push("Sonic Youth - Tunic (Song for Karen)");
favSongs.push("Misfits - Bullet");

console.log(favSongs);

favSongs.splice(6,1);
console.log(favSongs);


const vgColl = new Map();
vgColl.set('Links Awakening', {publisher: "Nintendo", console: "Gameboy"});
vgColl.has('Links Awakening'); // true
vgColl.get('Metal Slug 3'); // undefined
vgColl.set('Metal Slug 3', {publisher: "SNK", console: "Neo Geo"});
vgColl.set('Altered Beast', {publisher: "Sega", console: "Megadrive"});
vgColl.get('Links Awakening'); // {publisher: "Nintendo", console: "Gameboy"}
vgColl.delete('Metal Gear Solid'); // false
vgColl.delete('Links Awakening'); // true
console.log(vgColl.size); 

let favDrinks = [
    "Squash",
    "Ice Tea",
    "Smoothie",
    "Chocolate Milk",
    "Fanta",
];

for(let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks[i]);
}

let multiTwo = [];

for(let i=0; i < 20; i++){
    if (i % 2 == 0){
        multiTwo.push(i);
    }
}

console.log('Numbers divisible by two, between - and 20 are: ${multiTwo}.');


let age = 15;

while (age < 18) {
    console.log("You are a child");
    age++;
}

console.log("You are an adult");

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while(currentCard != "Spade") {

    console.log(currentCard);
    currentCard = cards.[Math.floor(Math.random()*4)];
}

console.log(currentCard);

// activity 1

let favFilms =["Heathers", "Mandy", "Eraserhead", "Tetsuo The Iron Man", "Hardware"];
console.log(favFilms);

favFilms[5] = "Blade Runner";
console.log(favFilms);

favFilms.push("It Follows");
console.log(favFilms);

while(favFilm < 6){
    console.log("Keep going");
    favFilms++;
}

console.log("Stop everything you are doing and watch this");


//const random = Math.random() * 50;

//console.log(random);

//function getUniqueNumbersInRange(uniqueNumbersCount, fromInclusive, untilInclusive) {

    // 0/3. Check inputs.
    //if (0 > uniqueNumbersCount) throw new Error('The number of unique numbers cannot be negative.');
    //if (fromInclusive > untilInclusive) throw new Error('"From" bound "' + fromInclusive
    //    + '" cannot be greater than "until" bound "' + untilInclusive + '".');
    //const rangeLength = untilInclusive - fromInclusive + 1;
    //if (uniqueNumbersCount > rangeLength) throw new Error('The length of the range is ' + rangeLength + '=['
    //    + fromInclusive + '…' + untilInclusive + '] that is smaller than '
    //    + uniqueNumbersCount + ' (specified count of result numbers).');
    //if (uniqueNumbersCount === 0) return [];


    // 1/3. Create a new "Set" – object that stores unique values of any type, whether primitive values or object references.
    // MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // Support: Google Chrome 38+(2014.10), Firefox 13+, IE 11+
    //const uniqueDigits = new Set();


    // 2/3. Fill with random numbers.        
    //while (uniqueNumbersCount > uniqueDigits.size) {
    //    // Generate and add an random integer in specified range.
    //    const nextRngNmb = Math.floor(Math.random() * rangeLength) + fromInclusive;
    //    uniqueDigits.add(nextRngNmb);
    //}


    // 3/3. Convert "Set" with unique numbers into an array with "Array.from()".
    // MDN – https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    // Support: Google Chrome 45+ (2015.09+), Firefox 32+, not IE
    //const resArray = Array.from(uniqueDigits);
    //return resArray;

//}

Math.floor(Math.random() * 50) + 1;
Math.floor(Math.random() * 50) + 1;
Math.floor(Math.random() * 50) + 1;
Math.floor(Math.random() * 50) + 1;
Math.floor(Math.random() * 50) + 1;
Math.floor(Math.random() * 50) + 1;
Math.floor(Math.random() * 50) + 1;
console.log(random)

//function fillArray(value, len) {
//    var arr = [];
//    for (var i = 0; i < len; i++) {
//      arr.push(value);
//    }
//    return arr;
//  }


const ARRAY_LENGTH = 5;
const randomArray = [];
for(let i = 0; i<ARRAY_LENGTH; i++) {randomArray.push(Math.random() * 50) +1 };
console.log(randomArray);

while (i >= 10) {
    text += "The number is " + i;
    i--;
  }
  console.log(i);


const favFilms =["Heathers", "Mandy", "Eraserhead", "Tetsuo The Iron Man", "Hardware"];
console.log(favFilms);

favFilms.push("Ghostbusters");
console.log(favFilms);

//for (i=0;i<favFilms.length;i++)
//{
//document.write(favFilms[i]);
//}

 
element = "Ghostbusters";
 
if (element in item for item in favFilms)//  
print("%s is one of my favourite films" %(element))
else:
// 
print("%s is not on the list" %(element))

favFilms.map(elem => elem.toLowerCase()).indexOf('ghostbusters');   // 1
favFilms.map(elem => elem.toLowerCase()).includes('ghostbusters');
  // true

favFilms.includes("Ghostbusters")   // Returns true

//if( condition ) {
    // statement
//  } else { 
    // statement (when condition evaluates to false)
//  }
//

Math.floor(Math.random() * 30) + 1;
console.log(Math.repeat(6));
variable % 2 === 0;

//
//
//

let hFolls = [
    "Robyn";
    "Toby";
    "Matt";
    "Kim";

]

console.log(hFolls;

let bFolls = [
    "Dan";
    "Kim";
    "Robyn";
    "Mark";
]

let follBoth = [];

console.log(bFolls;

function findCommonElements3(hFolls, bFolls) {
    return hFolls.some(item => bFolls.includes(item))
}
  
document.write(findCommonElements3(hFolls, bFolls));

for (let i = 0; i < hFolls.length; i++) {
    for (let j = 0; j < bFolls.length; j++) {
      if (hFolls[i] === bFolls[j]) {
        follBoth.push(hFolls[i]);
      }
    }
  };

//the difference between 

//for loop

//while loop 

//do...while loop