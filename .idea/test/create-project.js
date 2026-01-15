const modal_container_create = document.getElementById("create-project");
const new_project = document.getElementById("new-project");
const create_cancel = document.getElementById("create-cancel");
const create = document.getElementById("create");

new_project.addEventListener("click", () => {
    modal_container_create.classList.add("show");
});

create_cancel.addEventListener("click", () => {
    modal_container_create.classList.remove("show");
});

create.addEventListener("click", () => {
    modal_container_create.classList.remove("show");
});