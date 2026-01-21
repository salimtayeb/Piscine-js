// Créez une fonction filterEven qui retourne un nouveau tableau contenant uniquement les nombres pairs.
function filterEven(arr) {
    let evenNumbers = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

console.log("Nombres pairs dans [1, 2, 3, 4, 5, 6] : " + filterEven([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log("Nombres pairs dans [10, 15, 20, 25] : " + filterEven([10, 15, 20, 25])); // [10, 20]
console.log("Nombres pairs dans [7, 9, 11] : " + filterEven([7, 9, 11])); // []
console.log("Nombres pairs dans [0, -2, -3, -4] : " + filterEven([0, -2, -3, -4])); // [0, -2, -4]