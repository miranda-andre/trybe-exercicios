const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2];

//DAYS!
const createDays = () => {

  for (let i = 0; i < decemberDaysList.length; i++) {
    const monthDays = document.getElementById("days");
    let days = document.createElement("li");
    days.innerHTML = decemberDaysList[i];
    days.classList.add("day");

    //CLASS HOLIDAY
    if (decemberDaysList[i] == "24" || decemberDaysList[i] == "25" || decemberDaysList[i] == "31") {
      days.classList.add("holiday")
    }
    monthDays.appendChild(days);
  }
}
createDays();

//FRIDAY!
const fridayDay = () => {
  const friday = document.querySelectorAll(".day:nth-child(7n+6)");

  for (let i = 0; i < friday.length; i++) {
    friday[i].classList.add("friday")
  }
}
fridayDay();

const createHolidayButton = (buttonName) => {
  let btnContainer = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  let buttonID = 'btn-holiday';

  button.innerText = buttonName;
  button.id = buttonID;

  btnContainer.appendChild(button);
}

createHolidayButton('Feriados');

const changeColorHolidays = () => {
  let getHolidayButton = document.querySelector("#btn-holiday");
  let getHolidays = document.querySelectorAll(".holiday")
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = "white";

  getHolidayButton.addEventListener("click", () => {
    for (let i = 0; i < getHolidays.length; i++) {
      if (getHolidays[i].style.backgroundColor === setNewColor) {
        // Se a cor do elemento for a nova cor
        getHolidays[i].style.backgroundColor = backgroundColor;
      } else {
        // Se a cor do elemento for qualquer outra cor diferente da armazenada na variável setNewColor
        getHolidays[i].style.backgroundColor = setNewColor;
      };
    };
  });
};

changeColorHolidays();

const createFridayButton = (buttonName) => {
  let btnContainer = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  let buttonID = 'btn-friday';

  button.innerText = buttonName;
  button.id = buttonID;

  btnContainer.appendChild(button);
};

createFridayButton("Friday");

const changeFridayText = () => {
  let getFridayButton = document.querySelector("#btn-friday");
  let getFridays = document.querySelectorAll(".friday");
  let newText = "Sextou!";

  getFridayButton.addEventListener("click", () => {
    for (let i = 0; i < getFridays.length; i++) {
      if (getFridays[i].innerText !== newText) {
        getFridays[i].innerText = newText;
      } else {
        getFridays[i].innerText = decemberDaysList[(i * 7) + 5];
      };
    };
  });
};

changeFridayText();

const sizeHover = () => {
  let days = document.getElementById("days");
  days.addEventListener('mouseover', (event) => { 
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; 
  });
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};
sizeHover();

const handleNewTask = (task) => {
let tasksContainer = document.querySelector('.my-tasks'); 
let newTask = document.createElement("span");

newTask.innerHTML = task + " ";
tasksContainer.appendChild(newTask);
};
handleNewTask("Cozinhar");

const colorTask = (color) => {
  let tasksContainer = document.querySelector('.my-tasks'); 
  let newColor = document.createElement("div");

  newColor.classList.add("task");
  newColor.style.backgroundColor = color;
  tasksContainer.appendChild(newColor);
}
colorTask("tomato");

const selectTask = () => {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener("click",(event)=>{
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
};
selectTask();

const setDayColor = () => {
  let selectedTask = document.getElementsByClassName('task selected'); // Retorna um array com todos os elementos com a classe "task selected"
  let days = document.querySelector('#days'); // Seleciona a primeira ul com id "days"
  let taskDiv = document.querySelector('.task'); // Seleciona o primeiro elemento com a classe "task"
  let taskColor = taskDiv.style.backgroundColor; // Salva o Background Color da classe task na variável "taskColor"
  days.addEventListener("click",(event) =>{
    let eventTargetColor = event.target.style.color;
    if(selectedTask.length > 0 && eventTargetColor !== taskColor){
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    }else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  })
}
setDayColor();

const addNewTask = () => {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', () => {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();
