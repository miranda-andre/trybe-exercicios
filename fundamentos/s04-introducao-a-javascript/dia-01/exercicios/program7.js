const grade = 80;
let result;

if (grade < 0 || grade > 100){
    result = "Invalid"
}else if (grade >= 90){
    result = "A"
}else if (grade >= 80){
    result = "B"
}else if (grade >= 70){
    result = "C"
}else if (grade >= 60){
    result = "D"
}else if (grade >= 50){
    result = "E"
}else if (grade < 50){
    result = "F"
}

console.log(result);