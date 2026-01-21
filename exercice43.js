// Créez une fonction countVowels qui compte le nombre de voyelles dans une chaîne de caractères.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log("Le nombre de voyelles dans 'Bonjour le monde' est : " + countVowels('Bonjour le monde')); // 6
console.log("Le nombre de voyelles dans 'JavaScript est génial' est : " + countVowels('JavaScript est génial')); // 7
console.log("Le nombre de voyelles dans 'Piscine' est : " + countVowels('Piscine')); // 3
console.log("Le nombre de voyelles dans 'Programmation' est : " + countVowels('Programmation')); // 6