// Функция для генерации случайного числа в заданном диапазоне
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для возведения числа в степень
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        let result = base;
        for (let i = 1; i < exponent; i++) {
            result *= base;
        }
        return result;
    }
    
}
let random = randomNum(1, 100);
console.log(random);
let result = power(2, 4);
console.log(result);