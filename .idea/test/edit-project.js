const edit = document.querySelectorAll(".edit");
const modal_container = document.getElementById("modal_container");
const save = document.getElementById("save");

edit.forEach(button => {
    button.addEventListener("click", () => {
        modal_container.classList.add("show");
    });
});

save.addEventListener("click", () => {
    modal_container.classList.remove("show");
})