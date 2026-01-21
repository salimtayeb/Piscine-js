// créer une fonction getGrade qui convertit une note numérique (1-100) en lettre selon le barème américain
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 89) {
        return 'B';
    } else if (score >= 70 && score < 79) {
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D';
    } else if (score >= 0 && score < 60) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

console.log("La note pour 95 est : " + getGrade(95)); // A
console.log("La note pour 85 est : " + getGrade(85)); // B
console.log("La note pour 75 est : " + getGrade(75)); // C
console.log("La note pour 65 est : " + getGrade(65)); // D
console.log("La note pour 50 est : " + getGrade(50)); // F
console.log("La note pour -10 est : " + getGrade(-10)); // Invalid score
console.log("La note pour 110 est : " + getGrade(110)); // Invalid score