/* Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova. */


let students = [
  {
   name: "Luis",
    n1: 10,
    n2: 8,
},
  
  {
    name: "Ana",
    n1: 7,
    n2: 5,
},
  {
    name: "Roberta",
    n1: 4,
    n2: 3,
  },
]


// function printAverage(students) {
//   alert(`O aluno ${students.name} teve uma média de ${(students.testOne + students.testTwo) / 2}`)
// }

// for (student of students) {
//   printAverage(student)
// }




let average = function(n1, n2) {
  return ((n1 + n2) / 2);
}


function printResult(student) {
  if (average(student.n1, student.n2) >= 7) {
      return `A médio do(a) aluno(a) ${student.name} foi de: ${average(student.n1, student.n2)}. \n Parabéns, você foi aprovado(a) no concurso!`
  } else {
      return `A médio do(a) aluno(a) ${student.name} foi de: ${average(student.n1, student.n2)}. \n Infelizmente, não foi dessa vez ${student.name}! Você foi reprovado.`
  };
}

for (let student of students) {
  let averageMssg = printResult(student)
  alert(averageMssg)
}