// Simulez un jeu où un programme cherche un nombre secret en incrémentant une tentative jusqu'à le trouver.
// consignes : définissez un nombre secret (par exemple 42) et utilisez une boucle while pour compter les tentatives, Le programme devine en incrémentant de 1 à chaque essai, Affichez le nombre d'essais nécessaires pour trouver le nombre
function trouverNombreSecret(nombreSecret) {
    let tentative = 0;
    while (true) {
        tentative++;
        if (tentative === nombreSecret) {
            break;
        }
    }
    return tentative;
}

const nombreSecret = 42;
const essais = trouverNombreSecret(nombreSecret);
console.log("Le nombre secret " + nombreSecret + " a été trouvé en " + essais + " essais.");