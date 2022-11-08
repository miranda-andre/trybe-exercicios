

function textInputValidation() {
    const email = document.querySelector("#email").value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector("#fullName").value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector("#reason").value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    } else {
      return true;
    }
  }

function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }
  

function clearFields() {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
}
// MY WAY
// function clearFields() {
//   document.getElementById("form").reset();
// }

function enableSubmit() {
  const btnSubmit = document.querySelector("#btnSubmit");
  const agreement = document.querySelector("#agreement");
  btnSubmit.disabled = !agreement.checked;
}



window.onload = function () {
  const btnClear = document.querySelector("#btnClear");
  btnClear.addEventListener("click", clearFields);
  const btnSubmit = document.querySelector("#btnSubmit");
  btnSubmit.addEventListener("click", handleSubmit);
  const agreement = document.querySelector("#agreement");
  agreement.addEventListener("change", enableSubmit);
};
