const employeeGenerator = fullname => { 
    const email = fullname.toLowerCase().replace(' ', '_');
    return {fullname, email: `${email}@pbnj.com`}
}


//!EmployeeName === CALLBACK ()!!!!!!!
const newEmployees = (employeeName) => {
    const employees = {
        id1: employeeName('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: employeeName('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: employeeName('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};
console.log(newEmployees(employeeGenerator));