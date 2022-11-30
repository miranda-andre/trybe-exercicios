const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = Object.values(grades).every((grade) => grade.toLowerCase() === 'aprovado'); // false
  
  console.log(verifyGrades);