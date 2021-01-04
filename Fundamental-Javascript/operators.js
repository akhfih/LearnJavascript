/*============
|| OPERATOR ||
============*/

//Operator Matematika
let tambah = 1 + 1; // 1 ditambah 1
let kurang = 1 - 1; // 1 dikurangi 1
let kali = 1 * 1; // 1 dikali 1
let bagi = 1 / 1; // 1 dibagi 1
let pangkat = 2 ** 2; // 2 pangkat 2

//Operator Penugasan
let x = 1 + 2; // varibel diberi nilai 1 + 2 dengan operator assignment =
x += 1; // x = 1 + 1
x -= 1; // x = 1 - 1
x *= 1; // x = x * x
x /= 1; // x = x / 1
x++; // x + 1
x--; // x- 1

//Operator perbandingan/ comparison
console.log(1 > 0); //1 lebih besar dari 0
console.log(1 >= 0); //1 lebih besar sama dengan 0

//Operator perbandingan Equality == vs ===

console.log(18 == "18"); // true, == menerapkan type coercion string "18" menjadi number
console.log(18 === "18"); // false, === tidak menerapkan type coercion
console.log(18 !== "18"); // true

//Operator Logika

// && Operator AND. bernilai true jika keduanya true
console.log(true && true); // output true
console.log(true && false); // output false

// || Operator OR. bernilai false jika keduanya false, salah satu true akan bernilai true
console.log(true || true); // output true
console.log(false || false); //output false

// Operator NOT !. yaitu invert
console.log(!true); // output false
