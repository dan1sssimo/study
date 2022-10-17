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

/*
function extractCurrencyValue(str) {
    return +str.slice(1)
}


alert(extractCurrencyValue('$120'));
*/


/*
let styles = ['Jazz', 'Blues'];
console.log(styles)
styles.push('Rock-n-Roll');
console.log(styles)
let midElement = Math.floor((styles.length - 1) / 2);
styles[midElement] = 'Classics';
console.log(styles)
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');
console.log(styles)

*/

/*
function sumInput() {

    let numbers = [];
    while (true) {
        let value = prompt("Введіть, будь ласка, номер", 0);
        if (value === "" || value === null || !isFinite(value))
            break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert(sumInput());
*/

/*
function getMaxSubSum(arr) {
    let maxSum = 0; // якщо елементи відсутні - повертаємо 0

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}


console.log(getMaxSubSum([-1, 2, 3, -9]))
getMaxSubSum([2, -1, 2, 3, -9])
getMaxSubSum([-1, 2, 3, -9, 11])
getMaxSubSum([-2, -1, 1, 2])
getMaxSubSum([100, -9, 2, -3, 5])
getMaxSubSum([1, 2, 3])
*/

/*
function camelize(str) {
    return str.split('-').map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ).join('');
}

console.log(camelize("background-color"))

*/


/*
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && b >= item
    )
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (відфільтровані значення)

console.log(arr); // 5,3,8,1 (не змінюється)

*/

/*function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr
}*/

/*

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b-a)

console.log(arr);

*/

/*
function copySorted(arr) {
    return arr.concat().sort()
}


let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без змін)
*/


/*function Calculator() {
    this.methods = {
        "-": (a, b) => a - b
        ,
        "+": (a, b) => a + b
    }
    this.calculate = (str) => {
        let arr = str.split(' ')
        let a = +arr[0]
        let b = +arr[2]
        let operation = arr[1]
        if (!this.methods[operation] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[operation](a, b)
    }
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}


let calc = new Calculator;
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
console.log(calc.calculate("10 / 2")); // 10*/


/*
let ivan = {name: "Іван", age: 25};
let petro = {name: "Петро", age: 30};
let mariya = {name: "Марія", age: 28};

let users = [ivan, petro, mariya];

let names = users.map(item => item.name)

console.log(names); // Іван, Петро, Марія
*/


/*
let ivan = {name: "Іван", surname: "Іванко", id: 1};
let petro = {name: "Петро", surname: "Петренко", id: 2};
let mariya = {name: "Марія", surname: "Мрійко", id: 3};

let users = [ivan, petro, mariya];

let usersMapped = users.map(user => ({
    fullName:  `${user.name} ${user.surname}`,
    id: user.id
}))

/!*
usersMapped = [
  { fullName: "Іван Іванко", id: 1 },
  { fullName: "Петро Петренко", id: 2 },
  { fullName: "Марія Мрійко", id: 3 }
]
*!/
console.log(usersMapped[0].id)
console.log(usersMapped[0].fullName) // Іван Іванко

*/


/*
function getAverageAge(arr) {
    return arr.reduce((prev, user) =>prev+user.age,0)/arr.length
}


let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 29};

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

*/


/*
function unique(arr) {
    return new Set(arr)
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare, Krishna, :-O
*/
/*
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

*/


/*
let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};
let result = 0;
/!*let doublePrices = Object.fromEntries(
    Object.entries(salaries).map(element =>[element[0],result+=element[1]])
);*!/

for(let salary of Object.values(salaries)){
    result+=salary
}
console.log(result); // 8
*/


/*
let tmp = 0;

function count(obj) {
    for (let object of Object.keys(obj)) {
        tmp++;
    }
    return tmp
}

let user = {
    name: 'Іван',
    age: 30
};

console.log(count(user)); // 2*/


/*
let user = {name: "Іван", years: 30};
let {name, years: age, isAdmin = false} = user
// ваш код зліва:
// ... = user

console.log(name); // Іван
console.log(age); // 30
console.log(isAdmin); // false
*/


/*let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};
console.log(topSalary(salaries))

function topSalary(obj) {
    let maxSalary = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(obj)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}*/


/*
let date  = new Date(2012,1,20,3,12)
console.log(date)*/


/*
let date = new Date(2012, 0, 3);  // 3 січня 2012
console.log(getWeekDay(date))

function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()]

}*/
/*
let user = {
    name: "Іван Іванов",
    age: 35
};
let str = toStr(user)

console.log(toJson(str))

function toStr(obj) {
    return JSON.stringify(obj);
}

function toJson(str) {
    return JSON.parse(str)
}*/


/*
let room = {
    number: 23
};

let meetup = {
    title: "Конференція",
    occupiedBy: [{name: "Іван"}, {name: "Аліса"}],
    place: room
};

// циклічне посилання
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));
*/

/* результат повинен бути:
{
  "title":"Конференція",
  "occupiedBy":[{"name":"Іван"},{"name":"Аліса"}],
  "place":{"number":23}
}
*/
async function loadJSON(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return await response.json();
    }
    throw new Error(response.status);
}


loadJSON('https://javascript.info/no-such-user.json')
    .catch(console.log); // Error: 404