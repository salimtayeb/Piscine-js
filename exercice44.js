// Créez une fonction reverseString qui inverse l'ordre des caractères d'une chaîne de caractères.
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log("La chaîne inversée de 'Bonjour' est : " + reverseString('Bonjour')); // ruojnoB
console.log("La chaîne inversée de 'JavaScript' est : " + reverseString('JavaScript')); // tpircSavaJ
console.log("La chaîne inversée de 'Piscine' est : " + reverseString('Piscine')); // enicsiP
console.log("La chaîne inversée de 'Programmation' est : " + reverseString('Programmation')); // noitammmargorP