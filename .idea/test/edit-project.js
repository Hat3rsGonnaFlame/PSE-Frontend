const edit = document.querySelectorAll(".edit");
const modal_container = document.getElementById("modal_container");
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");
const destroy = document.getElementById("destroy");
const exports = document.getElementById("exports");

edit.forEach(button => {
    button.addEventListener("click", () => {
        modal_container.classList.add("show");
    });
});

save.addEventListener("click", () => {
    modal_container.classList.remove("show");
})

cancel.addEventListener("click", () => {
    modal_container.classList.remove("show");
})

exports.addEventListener("click", () => {
    modal_container.classList.remove("show");
})

destroy.addEventListener("click", () => {
    modal_container.classList.remove("show");
})