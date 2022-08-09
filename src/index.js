document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

function task () {
const form = document.getElementById("create-task-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const task=document.getElementById("new-task-description").value;
  const newTask=document.getElementById("tasks");
  const newList=document.getElementById("li");
  newTask.innerText= task;
  newList,this.appendChild(newTask);
});
} 