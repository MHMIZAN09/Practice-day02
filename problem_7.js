let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
    uniqueNumbers.push(numbers[i]);
  }
}

console.log('Unique Numbers:', uniqueNumbers);
