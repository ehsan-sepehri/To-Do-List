let todosData = [];
const createToDo = document.querySelector(".create-to-do");
const modalCreate = document.querySelector(".create-to-dos");
const container = document.querySelector(".container");
const cancelBtn = document.querySelector(".cancel");
const listItemSection = document.querySelector(".list-item-todo");
const nameInputTodo = document.querySelector(".name-todo");
const dateInputTodo = document.querySelector(".date-to-do");
const doneBtn = document.querySelector(".done");
const bodyelem = document.querySelector("body");
const showModal = () => {
  modalCreate.classList.remove("hide");
  container.classList.add("hidden");
};
const hideModal = () => {
  modalCreate.classList.add("hide");
  container.classList.remove("hidden");
};
const createActivity = () => {
  let todo = {
    id: Math.floor(Math.random() * 9999),
    textTodo: nameInputTodo.value,
    date: dateInputTodo.value,
  };

  todosData.push(todo);
  hideModal();
  nameInputTodo.value = "";
  dateInputTodo.value = "";
  saveDataInLocal();
  loadDataLocal();
};
const saveDataInLocal = () => {
  localStorage.setItem("name", JSON.stringify(todosData));
};

const loadDataLocal = () => {
  listItemSection.innerHTML = "";
  const nametodo = JSON.parse(localStorage.getItem("name"));

  if (nametodo) {
    nametodo.forEach((element) => {
      listItemSection.insertAdjacentHTML(
        "beforeend",
        `
    <div class="new-to-do">
      <p class="text-to-do">${element.textTodo}</p>
         <div class="section-button">
                <button class="sucsses">Sucsses</button>
                <button class="edit-to-do">Edit</button>
                <button class="remove-to-do">Remove</button>
         </div>
    </div>


    `,
      );
    });
  }
  const removeBtn = document.querySelectorAll(".remove-to-do");
  removeBtn.forEach((event) => {
    event.addEventListener("click", () => {
      event.parentElement.parentElement.remove();
    });
  });
};
bodyelem.addEventListener("load", loadDataLocal);
doneBtn.addEventListener("click", createActivity);
cancelBtn.addEventListener("click", hideModal);
createToDo.addEventListener("click", showModal);
