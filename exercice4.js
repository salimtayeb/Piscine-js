function calculateur_TTC(prixHT, tauxTVA) {
    const prixTTC = prixHT * (1 + tauxTVA);
    return prixTTC;
}

let resultat = calculateur_TTC(100, 0.2);
console.log("Le prix TTC est de : " + resultat + " euros");