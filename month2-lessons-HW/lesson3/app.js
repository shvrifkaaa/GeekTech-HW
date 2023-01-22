// * Написать функцию переворота строки. 
// СТАНДАРТНУЮ ФУНКЦИЮ REVERSE НЕ ИСПОЛЬЗОВАТЬ. 
// Например: myReverse("123456789") -> "987654321"


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString)
}
reverseString('шытрёвереп акортС');


// * Написать функцию которая генерирует массив из чисел 
// в определенном диапазоне с определенным шагом (по умолчанию 1). 
// Например: getRange(1, 10) -> [1,2,3,4,5,6,7,8,9,10]; 
// getRange(10, 30, 5) -> [10,15,20,25,30].

let numbers = []

function getRange(from, to) {
    for (i = from; i< to; i+=1){
        numbers.push((i))
    }

}
getRange(0,10)
console.log(numbers)


// * Написать функцию для проверки пароля. 
// Нужно возвращать true если в пароле есть хотя бы одна буква 
// верхнего регистра (большие буквы). 
// passwordHasUpperCase("Welcome") -> true, 
// passwordHasUpperCase("123qwerty") -> false

function passHasUpperCase(password) {
    return password.charAt(0) === password.charAt(0).toUpperCase() ? 'true' : 'false'
}
console.log(passHasUpperCase('Hello')) //true
console.log(passHasUpperCase('hello')) //false


// * Написать функцию которая маскирует номер банковской карты. 
// Например: maskCard("4815154823541789") -> "481515XXXXXX1789". 
// Должны быть видны первые 6 и последние 4 символа, остальные скрыть символом(по умолчанию Х). 
// Причем сделать так чтобы скрывающий символ можно было передавать как параметр. 
// Например: maskCard("4815154823541789", "*") -> "481515******1789".


String.prototype.maskCard = function (from, replacement) {
    return this.substr(0, from) + replacement + this.substr(from + replacement.length);
}
let cardNumber = '4169555500001111'; // номер карты
let from = 6; // от 6 индекса идут символы
let symbol = "XESOYAM" // символы те самые
console.log(cardNumber.maskCard(from, symbol));



// * Написать функцию капитализации строк. 
// Например: capitalizeString("ЕВГЕНИЙ") -> "Евгений"; 
// capitalizeString("иВАНОВ") -> "Иванов"; 
// Капитализация - это процесс преобразования строки, 
// когда первая буква становится заглавной, а остальные строчными.

function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length).toLowerCase()
}
console.log(capitalizeString("nOTEBOOK")); // отобразит  Notebook
