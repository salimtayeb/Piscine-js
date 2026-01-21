// Ajouter et supprimer des éléments
// Manipulez un tableau de langages en utilisant les méthodes push, pop, unshift et shift.
const langages = ['JavaScript', 'Python', 'Java'];

// Ajouter un élément à la fin
langages.push('C#');
console.log("Après push : " + langages); // ['JavaScript', 'Python', 'Java', 'C#']

// Supprimer le dernier élément
langages.pop();
console.log("Après pop : " + langages); // ['JavaScript', 'Python', 'Java']

// Ajouter un élément au début
langages.unshift('Ruby');
console.log("Après unshift : " + langages); // ['Ruby', 'JavaScript', 'Python', 'Java']