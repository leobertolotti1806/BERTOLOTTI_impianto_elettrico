let owner = document.querySelector("input");

let n = new URLSearchParams(window.location.search).get('n');

if (n !== null) {
    owner.classList.add("exist");
    owner.value = n;
}

owner.addEventListener("input", () => {
    if (owner.value != "")
        owner.classList.add("exist");
    else owner.classList.remove("exist");
});


for (const btn of document.querySelectorAll("#menu > button"))
    btn.addEventListener("click", () => {
        open(`./${btn.id}.html?n=${owner.value}`, "_self");
    });