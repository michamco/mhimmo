function calc() {
    let size = document.getElementById("size").value;
    let rooms = document.getElementById("rooms").value;
    let condition = document.getElementById("condition").value;

    let base = 2200;

    let value = size * base * condition + (rooms * 10000);
    let offer = value * 0.7;

    document.getElementById("result").innerText =
        "Marktwert: " + value.toFixed(0) + " € | Unser Angebot: " + offer.toFixed(0) + " €";

    document.getElementById("lead").style.display = "block";
}

/* WhatsApp */
function waSell(){
    window.open("https://wa.me/49123456789?text=Ich%20möchte%20meine%20Immobilie%20verkaufen");
}
function waRent(){
    window.open("https://wa.me/49123456789?text=Ich%20möchte%20meine%20Immobilie%20vermieten");
}

/* Email (einfach via mailto) */
function sendEmail(){
    let name = document.getElementById("name")?.value || "";
    let email = document.getElementById("email")?.value || "";
    let msg = document.getElementById("cmsg")?.value || "";

    window.location.href = `mailto:info@mh-immobilien.de?subject=Anfrage&body=Name:${name}%0AEmail:${email}%0ANachricht:${msg}`;
}
