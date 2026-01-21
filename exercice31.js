// Créez une fonction multiplication qui affiche la table de multiplication d'un nombre de 1 à 10.
// format attent : n * i = resultat
function multiplication(n) {
    for (let i = 1; i <= 10; i++) {
        const resultat = n * i;
        console.log(n + " * " + i + " = " + resultat);
    }
}

console.log(multiplication(7));
console.log(multiplication(5));
console.log(multiplication(9));