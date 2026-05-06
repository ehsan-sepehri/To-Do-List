let todoData = [];
const createToDo = document.querySelector(".create-to-do");
const modalCreate = document.querySelector(".create-to-dos");
const container = document.querySelector(".container");
const cancelBtn = document.querySelector(".cancel");
const listItemSection = document.querySelector(".list-item");
const nameInputTodo = document.querySelector(".name-todo");
const dateInputTodo = document.querySelector(".date-to-do");
const doneBtn = document.querySelector(".done");

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
  todoData.push(todo);

  listItemSection.insertAdjacentHTML(
    "beforeend",
    `
     <div class="new-to-do">
      <p class="text-to-do">${todo.textTodo}</p>
         <div class="section-button">
                <button class="sucsses">Sucsses</button>
                <button class="edit-to-do">Edit</button>
                <button class="remove-to-do">Remove</button>
         </div>
     </div>
    `,
  );
  hideModal();
};

doneBtn.addEventListener("click", createActivity);
cancelBtn.addEventListener("click", hideModal);
createToDo.addEventListener("click", showModal);
