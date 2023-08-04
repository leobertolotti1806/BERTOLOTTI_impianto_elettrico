let owner = document.querySelector("input");

function check(e) {
    if (owner.value != "")
        open(`./${e.target.id}.html?n=${owner.value}`, "_self");
    else alert("Inserisci un proprietario");
}

document.getElementById("floor1").onclick = check;
document.getElementById("floor2").onclick = check;