/* PENULISAN STRING DAN TEMPLATE LITERAL*/

let namaSaya = "akhmad";
let stringBiasa1 = "Nama saya " + "adalah " + namaSaya; // penulisan string biasa
let templateLiteral1 = `Nama Saya adalah ${namaSaya}`; //penerapan template literal menggunakan simbol backtick

//Penulisan string multiple line
let stringBiasa2 = "Nama \n\
saya \n\
adalah \n\
" + namaSaya;

let templateLiteral2 = `Nama 
Saya
adalah
${namaSaya}`;

let templateLiteral3 = `Berat badan saya adalah ${45 + 5} Kg`; //mengimplementasikan ekspresi

console.log(stringBiasa1);
console.log(templateLiteral1);
console.log(stringBiasa2);

console.log(templateLiteral2);
console.log(templateLiteral3);
