/*
let authPerson = prompt('Хто ти?');
if (authPerson === 'Admin' && authPerson != null) {
    let password = prompt('Введіть пароль')
    if (password === 'TheMaster' && password != null) {
        alert('Welcome')
    } else if (!(password === 'TheMaster' || password == null)) {
        alert('Wrong password')
    } else
        alert('Canceled')
} else if (!(authPerson == null || authPerson === 'Admin'))
    alert('IDKy')
else
    alert('Canceled')
*/


/*
let i = 0
while (i < 3) {
    console.log(`число ${i}!`);
    i++;
}
*/
/*
let tmp = true
let result
while (tmp) {
    result = prompt('Введіть число')
    if (result > 100 || result === '') {
        break
    }
}
*/

/*
let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // для кожного i...

        for (let j = 2; j < i; j++) { // шукаємо дільник..
            if (i % j == 0) continue nextPrime; // не просте, беремо наступне i
        }

        alert( i ); // просте число
    }*/
/*
let browser='Firefox';
if (browser === 'Edje')
    alert("You've got the Edge!");
    else if (browser === 'Chrome' || browser ==='Firefox' || browser ==='Safari' || browser ==='Opera')
    alert('Ми підтримуємо і ці браузери');
else
    alert('Маємо надію, що ця сторінка виглядає добре!');



*/

/*
let a = +prompt('a?', '');

switch (a) {
    case 0 : {
        alert(0);
        break
    }
    case 1: {
        alert(1)
        break
    }
    case 2:
    case 3:{
        alert('2,3')
    }
}



*/

/*
function checkAge(age) {
    age > 18 ? true : confirm('Батьки дозволили?');
}
checkAge(19)

*/

/*function checkAge(age) {
    return (age > 18) || confirm('Батьки дозволили?');
}

checkAge(1)*/

/*
function min(a, b) {
    if (a > b)
        return console.log(b);
    else
        return console.log(a);
}
min(2, 5)
min(3, -1)
min(1, 1)



*/

/*function pow(x, n) {
    if (!(n < 0))
        return console.log(x ** n)
    else console.log('error')
}

pow(3, 2)
pow(3, -1)
pow(1, 100
)*/


/*
let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    "Ви згодні?",
    () => {
        alert("Ви погодились.");
    },
    () => {
        alert("Ви скасували виконання.");
    }
);
*/

/*

let user = {};
user.name = 'Ivan';
user.surname = 'Smith';
console.log(user)
user.name = 'Petro';
console.log(user)
delete user.name;
console.log(user)
*/


/*
let isEmpty = (obj) => {
    for (let key in obj) {
        return false
    }
    return true
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "Вставай";

alert( isEmpty(schedule) ); // false
*/


/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function calcAllSal(obj) {
    let result = 0;
    for (let key in obj) {
        result += obj[key];
    }
    console.log(result)
}

calcAllSal(salaries)
*/
/*
let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
};

multiplyNumeric(menu);
console.log(menu)

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number")
            obj[key] *= 2;
    }
}

*/

/*let calculator = {
    read: function () {
        this.a = +prompt('a?', '');
        this.b = +prompt('b?', '');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());*/


/*
function Calculator() {
    this.read = function () {
        this.a = +prompt('a?', '0');
        this.b = +prompt('b?', '0');
    }
    this.sum = function () {
        return this.a + this.b;
    }
    this.mul = function () {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


*/


/*
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('value?', this.value);
    }

}


let accumulator = new Accumulator(1); // початкове значення 1

accumulator.read(); // додає введене користувачем значення
accumulator.read(); // додає введене користувачем значення

alert(accumulator.value); // показує суму цих значень
*/


/*
let sum = () => {
    let firstNum = +prompt('1 число?', '0');
    let secondNum = +prompt('2 число?', '0');
    return firstNum + secondNum;
};

alert(sum());
*/

/*
function random(min, max) {
    return min + (Math.random() * (max-min))
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
*/


/*
function randomInteger(min, max) {
    return Math.floor(Math.random() * max + min)
}

console.log(randomInteger(1, 5)); // 1
console.log(randomInteger(1, 5)); // 3
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5)); // 1
console.log(randomInteger(1, 5)); // 3
console.log(randomInteger(1, 5)); // 5
console.log(randomInteger(1, 5)); // 1
console.log(randomInteger(1, 5)); // 3
console.log(randomInteger(1, 5)); // 5// 5
*/


/*
function ucFirst(str) {
    return str.toUpperCase()[0]+str.slice(1);
}

console.log(ucFirst("василь"))

*/

/*
let checkSpam = str => {
    str = str.toLowerCase();
    return str.indexOf("viagra") !== -1 || str.indexOf("xxx") !== -1;
}


console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))

*/

/*
function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 1) + "…";
    } else
        return str
}

console.log(truncate("Що я хотів би розповісти на цю тему:", 20))

console.log(truncate("Всім привіт!", 20))
*/

function extractCurrencyValue(str) {
    return +str.slice(1)
}


alert(extractCurrencyValue('$120'));








































