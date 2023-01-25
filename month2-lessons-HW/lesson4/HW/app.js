// * Написать приложение Counter (Счетчик). 
// Логика у приложения следующая: 
//если число больше нуля, то оно должно быть зеленого цвета, 
// если ноль то серого, если меньше нуля то красного. 
// Должны быть 3 кнопки как на скриншоте: 
// увеличить, сбросить, уменьшить

let score = document.querySelector('.score');

let Counter = 0

function plusClick() {
    updateScore(++Counter)
}

function minusClick() {
    updateScore(--Counter)
}

function resetClick() {
    updateScore(Counter = 0)

}

function updateScore(val) {
    score.innerHTML = val
    if (Counter > 0) {
        score.style.color = "green"
    } else if (Counter === 0) {
        score.style.color = "grey"
    } else if (Counter < 0) {
        score.style.color = "red"
    }
}

// * Написать приложение "Лото". 
// Программа должна по нажатию на кнопку 
// генерировать случайным образом шесть чисел в диапазоне от 1 до 99.

function generateNumbers() {
    let numbers = [];
    while (numbers.length < 7) {
        let number = Math.floor(Math.random() * 99) + 1;
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    return numbers;
}

let numbersContainer = document.getElementById("numbers-container");
if(numbersContainer){
    for (let i = 0; i < 7; i++) {
        let numberElement = document.createElement("div");
        numberElement.classList.add("number");
        numbersContainer.appendChild(numberElement);
    }
}

function updateNumbers() {
    let numbers = generateNumbers();
    let numberElements = document.querySelectorAll(".number");
    if(numberElements){
        for (let i = 0; i < numberElements.length; i++) {
            numberElements[i].textContent = numbers[i];
        }
    }
}

let button = document.getElementById("generate-button");
if(button){
    button.addEventListener("click", updateNumbers);
}
