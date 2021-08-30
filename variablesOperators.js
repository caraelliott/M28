let name = "Cara";
console.log(name);
name ="Seena";
console.log(name);

let favouriteDrink = "coffee";
console.log(favouriteDrink);

console.log("My favourite drink is " + favouriteDrink);

let firstName = 'Cara';
let secondName = 'Elliott';
let age = '27';
let favDrink = 'Ice Tea';

console.log('Hi my name is ${firstName} ${secondName}. I am ${age} and my favourite drink is ${favDrink}.');

let breakfast = 'cereal';
let lunch = 'noodles';
let dinner = 'pizza';

console.log('${breakfast} is for breakfast, ${lunch} is for lunch and ${dinner} is for dinner');

breakfast = 'soup';
lunch = 'pasta';
dinner = 'kebab';

console.log('${breakfast} is for breakfast, ${lunch} is for lunch and ${dinner} is for dinner');

let date1 = new Date("05/13/1994");
let date2 = new Date("08/24/2021");
let Difference_In_Time = date2.getTime() - date1.getTime();
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
console.log("Total number of days between dates  "
               + date1 + " and " 
               + date2 + " is:  " 
               + Difference_In_Days);

date1 = new Date("03/12/1996");
date2 = new Date("08/24/2021");
Difference_In_Time = date2.getTime() - date1.getTime();
Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
console.log("Total number of days between dates  "
                              + date1 + " and " 
                              + date2 + " is: " 
                              + Difference_In_Days);

date1 = new Date("02/02/2020");
date2 = new Date("08/24/2021");
Difference_In_Time = date2.getTime() - date1.getTime();
Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
console.log("Total number of days between dates  "
                              + date1 + " and " 
                              + date2 + " is: " 
                              + Difference_In_Days);                              

//let place = "Manc";
//let weather = "Sunny";

//if (place == "Manc" && weather == Sunny) {
//    console.log("Check again!");
//7,3} else if (place == "Manc" && weather == "Rainy")