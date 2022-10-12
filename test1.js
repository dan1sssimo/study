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





















































