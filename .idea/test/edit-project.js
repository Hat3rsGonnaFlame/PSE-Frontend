const edit = document.getElementById("edit");
const modal_container = document.getElementById("modal_container");
const save = document.getElementById("save");

edit.addEventListener("click", () => {
    modal_container.classList.add("show");
})

save.addEventListener("click", () => {
    modal_container.classList.remove("show");
})