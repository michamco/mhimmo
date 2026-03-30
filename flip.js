function calcFlip() {

    let vmin = parseFloat(document.getElementById("vmin").value) || 0;
    let vmax = parseFloat(document.getElementById("vmax").value) || 0;
    let vavg = parseFloat(document.getElementById("vavg").value) || 0;

    let qm = parseFloat(document.getElementById("qm").value) || 0;

    // 🔥 MARGE / ANKAUFSPREIS BASIS
    let marge = vmax * 0.3;

    // 🧹 Entsorgung fix
    let entsorgung = 2000;

    // ⚡ Elektrik
    let elektrik = qm * 110;

    // 🪵 Boden
    let boden = qm * 70;

    // 🧱 Wände
    let waende = qm * 3.6 * 32;

    // 🚿 Bad
    let bad = 8000;

    // 🏗️ Renovierungskosten
    let renovierung = elektrik + boden + waende + bad + entsorgung;

    // 🏦 Nebenkosten
    let nebenkosten = vmax * 1.1;

    // 💰 Gewinnmarge
    let gewinn = vavg * 0.3;

    // 🎯 Ziel Ankaufspreis
    let ziel = renovierung + gewinn + nebenkosten;

    // OUTPUT
    document.getElementById("marge").innerText = "Marge / max Ankaufbasis: " + marge.toFixed(2) + " €";
    document.getElementById("entsorgung").innerText = "Entsorgung: " + entsorgung.toFixed(2) + " €";
    document.getElementById("elektrik").innerText = "Elektrik: " + elektrik.toFixed(2) + " €";
    document.getElementById("boden").innerText = "Boden: " + boden.toFixed(2) + " €";
    document.getElementById("waende").innerText = "Wände: " + waende.toFixed(2) + " €";
    document.getElementById("bad").innerText = "Bad: " + bad.toFixed(2) + " €";

    document.getElementById("renovierung").innerText = "Renovierung gesamt: " + renovierung.toFixed(2) + " €";
    document.getElementById("nebenkosten").innerText = "Nebenkosten: " + nebenkosten.toFixed(2) + " €";
    document.getElementById("gewinn").innerText = "Gewinnmarge: " + gewinn.toFixed(2) + " €";
    document.getElementById("ziel").innerText = "🎯 Ziel Ankaufspreis: " + ziel.toFixed(2) + " €";
}
