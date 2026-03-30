function calc() {
    let size = document.getElementById("size").value;
    let condition = document.getElementById("condition").value;

    let base = 2500; // €/m² (Demo Ludwigshafen)
    let value = size * base * condition;
    let offer = value * 0.7; // -30%

    document.getElementById("result").innerText =
        "Marktwert: " + value.toFixed(0) + " € | Unser Angebot: " + offer.toFixed(0) + " €";

    document.getElementById("lead").style.display = "block";
}
