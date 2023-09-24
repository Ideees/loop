

//--------------------1-----------------------

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//--------------------2-----------------------

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
//--------------------3-----------------------

let num1 = 0;
let num2 = 1;
for (let i = 0; i < 10; i++) {
  let temp = num1 + num2;
  num1 = num2;
  num2 = temp;
  console.log(temp);
}
//--------------------4-----------------------
let table = +prompt('number')
for(let i = 1 ; i <=10 ; i++){
    console.log(`${table} * ${i} =  ${table* i} `)
}
//--------------------5-----------------------
var sum = 0;
function clcluavg(...score) {
  let count = 0;
  for (let i = 0; i < score.length; i++) {
    sum = sum + score[i];
    count++;
   ;
  }
  const average = sum / count;
  return average;
}
let Dolphins = [96, 108, 89];
let Koalas = [88, 91, 110];
const dolAvg = clcluavg(...Dolphins);  //passing val
const kolAvg = clcluavg(...Koalas);    // passing val
console.log(`the avergr score of Dolphins is  :  ${dolAvg}`);
console.log(`the avergr score of Dolphins is  :  ${kolAvg}`);
if (dolAvg > kolAvg) {
  console.log("Dolphins win!");
} else if (kolAvg > dolAvg) {
  console.log("Koalas win!");
} else {
  console.log("It's a tie!");
}
