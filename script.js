const addButton = document.querySelector("#add-task-btn");
const textInput = document.querySelector("#task-name");
const dateInput = document.querySelector("#date");
const taskDiv = document.querySelector("#task-list");

let tasks = [];

addButton.addEventListener("click", addTask);

function addTask() {
  task = textInput.value;
  tasks.push(task);
  createTask(task);
}

function createTask(taskString) {
  const task = document.createElement("div");
  const taskName = document.createElement("p");
  const date = document.createElement("date");
  const deleteBtn = document.createElement("button");

  task.className = "task";
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteTask);

  date.innerText = dateInput.value;
  taskName.textContent = taskString;
  task.appendChild(taskName);
  task.appendChild(date);
  task.appendChild(deleteBtn);

  taskDiv.appendChild(task);
}

function deleteTask() {
  const task = this.parentElement;
  task.remove();
}
