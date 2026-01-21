//Créez une fonction findMax qui trouve le nombre maximum dans un tableau de nombres.
function findMax(arr) {
    if (arr.length === 0) {
        return null; // Retourne null si le tableau est vide
    }
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

console.log("Le nombre maximum dans [3, 45, 12, 78, 23, 9] est : " + findMax([3, 45, 12, 78, 23, 9])); // 8
console.log("Le nombre maximum dans [1, 2, 3, 4, 5 ] est : " + findMax([-5, -2, -10, -1])); // -1
console.log("Le nombre maximum dans [-5, -2, -10, -1] est : " + findMax([0, 0, 0, 0])); // 0
console.log("Le nombre maximum dans [42] est : " + findMax([42])); // 42