let owner = document.querySelector("input");

let n = new URLSearchParams(window.location.search).get('n');

if (n !== null) {
    owner.classList.add("exist");
    owner.value = n;
}

owner.addEventListener("focusin", () => {
    owner.classList.add("exist");
});

owner.addEventListener("focusout", () => {
    owner.classList.remove("exist");
});

for (const btn of document.querySelectorAll("#menu > button"))
    btn.addEventListener("click", () => {
        if (owner.value != "")
            open(`./${btn.id}.html?n=${owner.value}`, "_self");
    });