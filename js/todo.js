'use strict'
const field = document.querySelector('.field');
const button = document.querySelector('.add');
const list = document.querySelector('.list');
const alert = document.querySelector('span');

function createTask(value) {
  const task = document.createElement('div');
  task.textContent = value;
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  task.classList.add('task');
  task.appendChild(checkBox);
  checkBox.addEventListener('click', changeTaskStatus);
  task.addEventListener("dblclick", () => {
    task.remove();
  });
  return task;
}

function addTask() {
  if (field.value.trim()) {
    const add = createTask(field.value);
    list.appendChild(add);
    field.value = '';  
  } else {
    alert.classList.add('showAlert')
    setTimeout (() => {
      alert.classList.remove('showAlert')
    }, 2000)
  }  
}

function changeTaskStatus(event) {
  const {target} = event;
  target.parentElement.classList.toggle('success');
}

function enterPressed() {
   if (event.keyCode === 13) {
     addTask();
   }
}

field.addEventListener('keydown', enterPressed);
button.addEventListener('click', addTask);
