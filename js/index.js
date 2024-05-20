var bill_total = document.getElementById("total");
var percent = document.getElementById("percent");
var final = document.getElementById("final");

window.addEventListener('load', function() {
    bill_total.value = ""; // Clear bill total input
    percent.value = ""; // Clear percent input
    final.innerText = ""; // Clear final result
});

bill_total.addEventListener("input", calculate_tip);
percent.addEventListener("input", calculate_tip);

function calculate_tip(){
    var bill = parseFloat(bill_total.value);
    var tip = parseFloat(percent.value);
    var x = (bill * (tip / 100));
    var bill_plus_tip = bill + x;
    final.innerText = "Tip: " + x.toFixed(2) + "\n"+"Bill after tip: " + bill_plus_tip.toFixed(2);
}