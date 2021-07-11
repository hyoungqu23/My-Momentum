const toDoForm = document.querySelector('form#todo-form');
const toDoInput = toDoForm.querySelector('input')
const toDoListUl = document.querySelector('ul#todo-list');

let toDoListArr = [];

const TODOS_KEY = 'toDoList';

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDoListArr)); // localStorage only save STRING(by. JSON.stringify())
}

function deleteToDo(event) {
  const toDoListTarget = event.target.parentElement;
  toDoListTarget.remove();
  toDoListArr = toDoListArr.filter((todo) => {return todo.id !== parseInt(toDoListTarget.id)});
  saveToDos();
}

function paintToDo(newToDoListItems) {
  const toDoListLi = document.createElement('li');
  const toDoListSpan = document.createElement('span');
  toDoListLi.id = newToDoListItems.id;
  toDoListSpan.innerText = `${newToDoListItems.text}`;
  const toDoListBTN = document.createElement('button');
  const toDoListCheckBox = document.createElement('input');
  toDoListCheckBox.type = 'checkbox';
  toDoListBTN.innerText = '❌'
  toDoListBTN.addEventListener('click', deleteToDo);
  toDoListCheckBox.addEventListener('click', cancelToDo);
  toDoListLi.appendChild(toDoListCheckBox);
  toDoListLi.appendChild(toDoListSpan);
  toDoListLi.appendChild(toDoListBTN);
  toDoListUl.appendChild(toDoListLi);
  function cancelToDo() {
    if (toDoListCheckBox.checked === true){
      toDoListLi.classList.add('canceled');
    } else {
      toDoListLi.classList.remove('canceled');
    }
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDoListItems = toDoInput.value;
  toDoInput.value = '';
  const newTODoListItemsOBJ = {
    id: Date.now(),
    text: newToDoListItems,
  }
  toDoListArr.push(newTODoListItemsOBJ);
  paintToDo(newTODoListItemsOBJ);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDoListArr = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
