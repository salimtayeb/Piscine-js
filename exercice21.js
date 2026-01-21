function evenOrodd(number) {
    if (number % 2 === 0) {
        return "pair";
    } else {
        return "impair";
    }
}

let num = 4;
console.log(num + " est " + evenOrodd(num));

num = 7;
console.log(num + " est " + evenOrodd(num));

num = 0;
console.log(num + " est " + evenOrodd(num));

num = -2;
console.log(num + " est " + evenOrodd(num));