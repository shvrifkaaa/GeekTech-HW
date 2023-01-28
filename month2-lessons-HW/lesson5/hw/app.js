// * Написать функцию которая принимает массив из чисел 
// и  возвращает массив из двух значений: первое - сумма четных чисел, 
// второе - сумма нечетных чисел. evenOddSum([50,60,60,45,71]) -> [170, 116]

function evenOddSum(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    return console.log([evenSum, oddSum]);
}
evenOddSum([50, 25, 20, 37, 50])


// *  Написать функцию которая возвращает 
// сколько раз в строке встречается определенный символ 
// (причем учесть буквы как верхнего так и нижнего регистра). 
// Например: charCount(“Abrakadabra”, “a”) -> 5, charCount(“hello”, “z”) -> 0. 

function charCount(str, char) {
    let count = 0;
    char = char.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char) {
            count++
        }
    }
    return count
}

console.log(charCount('AbracadAbra', 'a')); // 5
console.log(charCount('heLlo', 'a')); // 0

// * Написать функцию, которая принимает массив и параметры. 
// Нужно удалить из массива все параметры переданные в функцию 
// после массива и вернуть массив из оставшихся параметров. 
// Например: seekAndDestroy([2,3,4,6,6,7], 2, 6) -> [3,4,7]; seekAndDestroy([1,1,1,1,1,2,2,2,2], 1, 2) -> [];  


function removeParams(arr, ...params){
    return arr.filter(val => !params.includes(val));

}
console.log(removeParams([2,3,5,7,8], 2, 5) )
console.log(removeParams([1,1,1,2,2,2,3,3], 1,2) )
