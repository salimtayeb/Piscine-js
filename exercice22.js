function max3(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}


console.log("Le maximum entre 1, 2 et 3 est : " + max3(1, 2, 3));
console.log("Le maximum entre 10, 5 et 8 est : " + max3(10, 5, 8));
console.log("Le maximum entre -1, -5 et -3 est : " + max3(-1, -5, -3));
console.log("Le maximum entre 7, 7 et 7 est : " + max3(7, 7, 7));