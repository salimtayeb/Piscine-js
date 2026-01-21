function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let temperatureCelsius = 0;
let temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);

console.log(temperatureCelsius + "°C est égal à " + temperatureFahrenheit + "°F");

temperatureCelsius = 100;
temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);

console.log(temperatureCelsius + "°C est égal à " + temperatureFahrenheit + "°F");

temperatureCelsius = -40;
temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);

console.log(temperatureCelsius + "°C est égal à " + temperatureFahrenheit + "°F");