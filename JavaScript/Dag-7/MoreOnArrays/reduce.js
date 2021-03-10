/* 
  REDUCE PLOCKAR IHOP ALLA ELEMENT I EN ARRAY OCH RETURNERAR ETT SAMMANSLAGET RESULT 
*/

const transactions = [100, -50, 800, 450, -675];

//funktionen tar in ackumulerat värde och nästa värde i listan.
const balance = transactions.reduce(function(acc, cur, index, arr){
  console.log(index, acc, cur);
  console.log(arr);
  return acc + cur;
});

console.log(balance);