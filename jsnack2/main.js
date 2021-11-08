/* Snack 2
A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25] */

// Start Array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// New Array (square numbers)
const squareNumbers = numbers.map(e => e * e);
console.log(squareNumbers);