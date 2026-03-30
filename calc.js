function calc() {

    let kp = parseFloat(document.getElementById("kp").value) || 0;
    let qm = parseFloat(document.getElementById("qm").value) || 0;
    let eurqm = parseFloat(document.getElementById("eurqm").value) || 0;

    let zins = parseFloat(document.getElementById("zins").value) || 0;
    let tilgung = parseFloat(document.getElementById("tilgung").value) || 0;

    let haus = parseFloat(document.getElementById("haus").value) || 0;
    let vers = parseFloat(document.getElementById("versicherung").value) || 0;
    let sonst = parseFloat(document.getElementById("sonst").value) || 0;

    // Miete
    let miete = qm * eurqm;

    // nicht umlagefähig
    let nk = haus + vers + sonst;

    // Kreditrate
    let kredit = (zins + tilgung) / 100 * kp;

    // Cashflow
    let cashflow = miete - kredit - nk;

    document.getElementById("miete").innerText = "Miete: " + miete.toFixed(2) + " €";
    document.getElementById("nk").innerText = "Nicht umlagefähig: " + nk.toFixed(2) + " €";
    document.getElementById("kredit").innerText = "Kreditrate: " + kredit.toFixed(2) + " €";
    document.getElementById("cashflow").innerText = "Cashflow: " + cashflow.toFixed(2) + " €";

    // Wertzuwachs 2%
    let growth = kp * 0.02;
    document.getElementById("growth").innerText =
        "Wertzuwachs (2% p.a.): " + growth.toFixed(2) + " €";
}

function tax() {

    let kp = parseFloat(document.getElementById("kp").value) || 0;
    let lohn = parseFloat(document.getElementById("lohnsteuer").value) || 0;
    let zins = parseFloat(document.getElementById("zins").value) || 0;

    let afaRate = parseFloat(document.getElementById("afa").value) || 2;

    let basis = kp * 0.8;
    let afa = basis * (afaRate / 100);

    let steuer = lohn * 0.3 + zins * 10 + afa;

    document.getElementById("steuer").innerText =
        "Steuer-Effekt (vereinfacht): " + steuer.toFixed(2) + " € Rückerstattung";
}
