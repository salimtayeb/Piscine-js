function calculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            return num1 / num2;
        default:
            return 'Opérateur invalide';
    }
}

let a = 10;
let b = 5;

console.log(a + " + " + b + " = " + calculator(a, b, 'add'));
console.log(a + " - " + b + " = " + calculator(a, b, 'subtract'));
console.log(a + " * " + b + " = " + calculator(a, b, 'multiply'));
console.log(a + " / " + b + " = " + calculator(a, b, 'divide'));
console.log(a + " % " + b + " = " + calculator(a, b, 'modulo'));