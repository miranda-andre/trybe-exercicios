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

  const createDays = () => {

    for (let i = 0; i < decemberDaysList.length; i++){
        const monthDays = document.getElementById("days");
        let days = document.createElement("li");
        days.innerHTML = decemberDaysList[i];
        days.classList.add("day")
        

        if(decemberDaysList[i] == "24" || decemberDaysList[i] == "25" || decemberDaysList[i] == "31"){
          days.classList.add("holiday")
        }
        monthDays.appendChild(days);
    }
  }
  createDays();

  const fridayDay = () => {
    const friday = document.querySelectorAll(".day:nth-child(7n+6)");
    
    for(let i = 0; i < friday.length; i++){
      friday[i].classList.add("friday")
    }
  }
  fridayDay();  