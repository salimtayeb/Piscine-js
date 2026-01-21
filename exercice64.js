// Créez une fonction calculateAverage qui calcule la moyenne des nombres d'un tableau.
function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const numbersArray = [10, 20, 30, 40, 50];
const average = calculateAverage(numbersArray);
console.log("Tableau des nombres : " + numbersArray); // Tableau des nombres : 10,20,30,40,50
console.log("Moyenne : " + average); // Moyenne : 30