/*====================================
 Type Conversion dan Type Coersion
 ===================================*/

//type Conversion
let angka = 17;
console.log(Number("17")); //mengkonversi string ke number
console.log(String(angka)); //mengkonversi number ke string, nilai asli variabel angka tetap number
console.log(Number("akhmad")); // NaN ivalid number

//type Coersion
console.log("1" + 1); //operato + akan mengkonversi menjadi type string
console.log("1" - "1"); //operator - akan mengkonversi menjadi type number
console.log("1" * 1, "1" / "1"); //operator * dan / akan mengkonversi menjadi tipe angka
console.log("1" < 2); // operator logika akan mengkonversi menjadi angka, output true
console.log("a" + "ku", "a" - "ku"); // outpu aku Nan
console.log(1 - 1 + "2"); // output 02
