function berechnen() {
    let flaeche = document.getElementById("flaeche").value;
    let zustand = document.getElementById("zustand").value;

    if (!flaeche) {
        document.getElementById("ergebnis").innerHTML = "Bitte Wohnfläche eingeben.";
        return;
    }

    let marktwert = flaeche * zustand;
    let ankauf = marktwert * 0.7;

    document.getElementById("ergebnis").innerHTML =
        "Geschätzter Marktwert: " + marktwert.toLocaleString() + " €<br>" +
        "Möglicher Ankaufspreis: " + ankauf.toLocaleString() + " €";
}
