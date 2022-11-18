const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  author: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

//RETORNA ARRAY DO OBJETO
// console.log(Object.keys(coolestTvShow));

for (const property in coolestTvShow) {
  console.log(property);
}
// name
// genre
// author
// favoriteCharacter
// quote
// seasons
console.log();
for (const property in coolestTvShow) {
  console.log(coolestTvShow[property]);
}
//RETORNA ARRAY DO OBJETO
//   console.log(Object.values(coolestTvShow));

// BoJack Horseman
// adult animation
// Raphael Bob-Waksberg
// Princess Carolyn
// Princess Carolyn always lands on her feet.
// 6
console.log();

const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  //Pegar array do objeto student
  const arraySkillslvl = Object.values(student)
  const arrayLanguages = Object.keys(student);
  for (let i in arrayLanguages) {
    console.log(`${arrayLanguages[i]}, level: ${arraySkillslvl[i]}`);
  }
};

console.log(`Estudante 1:`);
listSkills(student1);
console.log();
console.log(`Estudante 2:`);
listSkills(student2);

//   Verifique que usamos o método Object.keys e a estrutura de repetição for...in em conjunto. Além disso, perceba que a mesma função é utilizada para iterar sobre os dois objetos, mesmo o segundo tendo uma chave a mais que o outro.


//VERIFICAR DIFERENÇA COM E SEM SKILL.VALUE


// const student = {
//     html: 'Muito Bom',
//     css: 'Bom',
//     javascript: 'Ótimo',
//     softskill: 'Ótimo',
//   };
  
//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }
  
//     return skills;
//   };
  
//   const listSkillsValuesWithValues = (student) => {
//     return Object.values(student);
//   }
  
//   // Sem Object.values
//   console.log(listSkillsValuesWithFor(student));
  
//   // Com Object.values
//   console.log(listSkillsValuesWithValues(student));