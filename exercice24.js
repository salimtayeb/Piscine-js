// créez une fonction isLeapYear qui détermine si une année est bissextile
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log("L'année 2024 est bissextile : " + isLeapYear(2020)); // true
console.log("L'année 2023 est bissextile : " + isLeapYear(1900)); // false
console.log("L'année 2000 est bissextile : " + isLeapYear(2000)); // true
console.log("L'année 1900 est bissextile : " + isLeapYear(2021)); // false