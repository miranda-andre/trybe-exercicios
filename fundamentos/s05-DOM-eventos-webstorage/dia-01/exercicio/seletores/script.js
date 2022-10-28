//alterando background header
document.getElementById("header-container").style.background = "green";

//#region block-left

//alterando background lado esquerdo
document.getElementsByClassName("emergency-tasks")[0].style.background = "salmon";

//alterando background h3 do lado esquerdo
const emergencyTaskArray = document.querySelectorAll(".emergency-tasks h3");

for(i = 0;i<emergencyTaskArray.length;i +=1){
    emergencyTaskArray[i].style.background = "DarkOrchid";
};
//#endregion

//#region block-right

//alterando background lado direito
document.getElementsByClassName("no-emergency-tasks")[0].style.background = "#ffd55a";

//alterando background h3 do lado direito
const noEmergencyTaskArray = document.querySelectorAll(".no-emergency-tasks h3");


for(i = 0;i<emergencyTaskArray.length;i +=1){
    noEmergencyTaskArray[i].style.background = "black";
};
//#endregion

//alterando background footer
document.getElementById("footer-container").style.background = "#014421";