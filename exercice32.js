// Créez une fonction sumUpTo qui calcule la somme des nombres de 1 à n.
function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log("La somme des nombres de 1 à 5 est : " + sumUpTo(5)); // 15
console.log("La somme des nombres de 1 à 10 est : " + sumUpTo(10)); // 55
console.log("La somme des nombres de 1 à 100 est : " + sumUpTo(100)); // 5050
console.log("La somme des nombres de 1 à 50 est : " + sumUpTo(50)); // 1275