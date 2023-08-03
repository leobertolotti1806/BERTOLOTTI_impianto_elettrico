let owner = document.querySelector("input");

function check(e) {
    if (owner.value != "")
        open(`./floor${e.target.id.slice(-1)}.html?n=${owner.value}`);
    else alert("Inserisci un proprietario");
}

document.getElementById("floor1").onclick = check;
document.getElementById("floor2").onclick = check;