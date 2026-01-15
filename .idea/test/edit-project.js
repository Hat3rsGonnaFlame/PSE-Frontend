const modal_container_edit = document.getElementById("edit-project");
const edit = document.querySelectorAll(".edit");
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");
const destroy = document.getElementById("destroy");
const exports = document.getElementById("exports");

edit.forEach(button => {
    button.addEventListener("click", () => {
        modal_container_edit.classList.add("show");
    });
});

save.addEventListener("click", () => {
    modal_container_edit.classList.remove("show");
})

cancel.addEventListener("click", () => {
    modal_container_edit.classList.remove("show");
})

exports.addEventListener("click", () => {
    modal_container_edit.classList.remove("show");
})

destroy.addEventListener("click", () => {
    modal_container_edit.classList.remove("show");
})