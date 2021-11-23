let star = ''; 
for(let i = 5; i >= 1; i -- ){ 
 for(let j = 0; j <i; j ++ ){ 
  star += '*'; 
 } 
 star += '\n'; 
} 
console.log(star);
//i sama dengan 10, 10 kurang dengan sama dengan 1
//maka jalankan for berikutnya
//j sama dengan 0, 0 kurang dari i yaitu 10
//maka jalankan star *
//kembali lagi ke j karena j masih bisa di eksekusi sampai tidak terpenuhi
//*****
// ****+6
// ***
// **
// *
console.log("==============================================")

let star2=""
let n =5;

for(let i = 0; i < n; i ++ ){ 
 for(let j = 0; j < n; j ++ ){ 
  star2 += '*'; 
 } 
 star2 += '\n'; 
} 

console.log(star2);