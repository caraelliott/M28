const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds.");

}

pressGrindBeans();

//

let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping grinding");
        coffeeIsGrinding = false;
    } else {
        console.log("About to start grinding");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans();

//

let accNumber = 504499221;

const takeCash = (ammount, accNumber) => {
    console.log("Withdrawing ${amount} from account ${accNumber")");

}

takeCash(300, accNumber);
takeCash(30,504499221);
takeCash(200, 504479221);

//

const addUp = num1, num2) => {
    return num1 + num2;
}

addUp(7,3);
addUp(7,3);
console.log(addUp(2,5));

//

const multiplyByNineFifths = (celcius) => {
    return celcius * (9/5);
};

const getFahrenheit = (celcius) => {
    return multiplyByNineFifths(celcius) + 32;

};

console.log("The temperature is " + getFahrenheit(15) + "F");

//console.log("The temperature is")

//

function square(number) {
    return number * number;
};

square(5);

//
//FUNCTION with no name = ANONYMOUS FUNCTION
//

const square = function(number) {
    return number * number;
};

square(5);

//

// ARROW FUNCTION
const square = (number) => {
    return number * number;
};

square(5);

//
// DECLARATION
function square(number) {
    return number * number;
};

square(5);

//
//expression function / anonymous function
const square = function(number) {
    return number * number;
};

square(5);

//

function factorial (n) {
    if ((n === 0) || (n===1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
        
    }
}

console.log(factorial(33));
//

//9999999999999999999999999999999999999999999999999999999998o[p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p][p]-
const factorial = (n) => {
    if ((n === 0)) || (n===1) {
        return 1;

    } else { 
        return (n * factorial(n-1));
    }
}    
console.log(factorial(33));

///

//
let orderCount = 0;

const takeOrder = (topping) => {
    console.log('Pizza with ${topping}');

    orderCount++;
}

takeOrder ("pineapple");

//

//
//two parameters

let orderCount = 0;

const takeOrder = (topping + sauce) => {
    console.log('Pizza with ${topping} and ${sauce}');

    orderCount++;

}

takeOrder("pineapple, bbq");

//

// cash machine
// balance equal to or more than withdraw amt
const balance;
const takeCash = (amount, acc) => {

    console.log('Withdrawing ${amount} from ${acc}');

}

if (amount < balance) {
    takeCash = "Insufficient Funds";
  } else {
    takeCash = "Please Take Your Cash";
  }

  //