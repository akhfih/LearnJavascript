/*====================================
 PENULISAN STRING DAN TEMPLATE LITERAL
 ===================================*/

//converion type
let nilai; // varibael yang belum memiliki nilai akan bernilai Undefined
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(nilai)); // false
console.log(Boolean("akhmad" - 1)); //menghasilkan nila Nan dan output false
console.log(Boolean(null)); //false

console.log(Boolean("akhmad")); //true
console.log(Boolean({})); // true

//coersion type
let namaSaya;
if (namaSaya) {
  // akan dikonversi secara emplisit ke boolean false
  console.log("NAMA SAYA AKHMAD");
} else {
  console.log("BELUM ADA NAMA");
}

let tinggiBadan = 66;
if (tinggiBadan) {
  // akan dikonversi secara emplisit ke boolean true
  console.log("ADA TINGGI BADAN");
} else {
  console.log("TIDAK ADA TINGGI BADAN");
}
