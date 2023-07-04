var fToC = function() {
    var fTemp = document.getElementById("frh").value;
    var result1 = (fTemp - 32) * 5 / 9;
    document.getElementById("frh-result").innerHTML = result1.toFixed(1) + " <small>degrees Celsius</small>";
};
var cToF = function() {
    var cTemp = document.getElementById("cel").value;
    var result2 = cTemp * 9 / 5 + 32;
    document.getElementById("cel-result").innerHTML = result2.toFixed(1) + " <small>degrees Fahrenheit</small>";
};