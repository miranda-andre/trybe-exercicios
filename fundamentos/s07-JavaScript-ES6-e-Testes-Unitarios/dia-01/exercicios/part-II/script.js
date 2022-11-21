const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1
const addShift = (object, key, value) => (object[key] = value);

//2
const listKeys = (object) => Object.keys(object);

//3
const objectSize = (object) => Object.keys(object).length;

//4
const listValue = (object) => Object.values(object);

//5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//6
const totalStudents = (object) => {
    const keys = Object.keys(object);
    let total = 0

    for (let i in keys){
        total += object[keys[i]].numeroEstudantes
    }

    return total;
}

//7
const keyValue = (object, input) => Object.values(object)[input];

//8
const verifyPair = (object, key, value) => {
    const objEntries = Object.entries(object);
    let verifyExistance = false;

    for (let i in objEntries){
        if(objEntries[i][0] === key && objEntries[i][1] === value){
            verifyExistance = true;
        }
    }
    return verifyExistance;
}

//https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/131a8311-a3d9-4404-ae50-2ea6c971f5d8/day/8bcccf78-a098-4621-a3ec-f06ba5ba8622/lesson/6fe8b103-8105-4f82-b0ee-53265ef8fa4c

//1
addShift(lesson2, 'turno', 'noite');

console.log(lesson2);
console.log();

//2
console.log(listKeys(lesson1));
console.log();

//3
console.log(objectSize(lesson1));
console.log();

//4
console.log(listValue(lesson1));
console.log();

//5
console.log(allLessons);
console.log();

//6
console.log(totalStudents(allLessons));
console.log();

//7
console.log(keyValue(lesson1,2));
console.log();

//8
console.log(verifyPair(lesson1,'materia','Matemática'));