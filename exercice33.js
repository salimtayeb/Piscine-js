// Créez une fonction factorial qui calcule la factorielle d'un nombre n.
function factorial(n) {
    if (n < 0) {
        return 'Invalid input';
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log("La factorielle de 5 est : " + factorial(5)); // 120
console.log("La factorielle de 0 est : " + factorial(0)); // 1
console.log("La factorielle de 7 est : " + factorial(7)); // 5040
console.log("La factorielle de 1 est : " + factorial(1)); // 1