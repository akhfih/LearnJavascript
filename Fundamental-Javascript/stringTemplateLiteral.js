/*====================================
 PENULISAN STRING DAN TEMPLATE LITERAL
 ===================================*/

let namaSaya = "Akhmad";
let stringBiasa1 =
  "Nama saya adalah " + namaSaya + " dengan berat badan " + (45 + 5) + "Kg"; // penulisan string biasa
let templateLiteral1 = `Nama Saya adalah ${namaSaya} dengan berat badan ${
  45 + 5
}Kg`; //penerapan template literal menggunakan simbol backtick

/*=============
 Multiple Line
=============*/
let stringBiasa2 = "Nama \n\
saya \n\
adalah \n\
" + namaSaya;

let templateLiteral2 = `Nama 
Saya
adalah
${namaSaya}`;

console.log(stringBiasa1);
console.log(templateLiteral1);
console.log(stringBiasa2);
console.log(templateLiteral2);
