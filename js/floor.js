let owner = new URLSearchParams(window.location.search).get('n');

function check(e) {
    open(`./${e.target.id}.html?n=${owner}`, "_self");
}

if (owner !== null) {


} else open("./index.html", "_self");

let aside = document.querySelector("aside");

for (const room of document.querySelectorAll("section > div")) {
    let div = document.createElement("div");
    let span = document.createElement("span");


    div.textContent = room.id;
    div.appendChild(span);

    if (room.classList.contains("on")) {
        span.className = "on";
        span.textContent = "Acceso";
    } else span.textContent = "Spento";

    div.appendChild(span);

    aside.appendChild(div);

    room.querySelector("label").onchange = () => {
        if (room.classList.contains("on")) {
            room.className = "";
            span.className = "";
            span.textContent = "Spento";
        } else {
            room.className = "on";
            span.className = "on";
            span.textContent = "Acceso";
        }
    }
}

for (const btn of document.querySelectorAll("#menu > button"))
    btn.addEventListener("click", () => {
        open(`./${btn.id}.html?n=${owner}`, "_self");
    });