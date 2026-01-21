// Calculez la somme de tous les nombres contenus dans un tableau
function sommeTableau(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

const nombres = [5, 10, 15, 20, 25];
const resultat = sommeTableau(nombres);
console.log("La somme des éléments du tableau est : " + resultat); // 75