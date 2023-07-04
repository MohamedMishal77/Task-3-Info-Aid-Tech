document.getElementById("celsiusToFahrenheitBtn").addEventListener("click", function() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("celsiusResult").innerHTML = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
});
document.getElementById("fahrenheitToCelsiusBtn").addEventListener("click", function() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("fahrenheitResult").innerHTML = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
});
