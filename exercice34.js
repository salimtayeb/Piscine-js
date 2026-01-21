// créez une fonction qui affiche les nombres de 1 à 30 avec les règles suivantes :
// si le nombre est multiple de 3, afficher "Fizz" à la place du nombre
// si le nombre est multiple de 5, afficher "Buzz" à la place du nombre
// si le nombre est multiple de 3 et 5, afficher "FizzBuzz" à la place du nombre
function fizzBuzz() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

console.log("FizzBuzz");