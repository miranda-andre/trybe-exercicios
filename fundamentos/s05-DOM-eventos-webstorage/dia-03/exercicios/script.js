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
    days.classList.add("day")

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
    event.target.style.fontSize= "25px";
  });
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize= "20px";
  })
};
sizeHover();