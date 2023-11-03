/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01. DONE
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

// let vardas = "Darja"
// let pavarde = "Jekateriniceva"
// let gimMetai = 1997
// let metai = 2023
// console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${metai-gimMetai} metai`);


/* 02. DONE
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

// let a = Math.random()*(4-0+1);
// let b = Math.random()*(4-0+1);
// console.log(a, b)

// if(a>b && a>0) {
//     console.log(Math.round(a/b).toFixed(2))
// } else if(b>a && b>0 ){
//     console.log(Math.round(b/a).toFixed(2))
// } else {
//     console.log("Negalima dalinti is 0")
// }


/* 03. DONE
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

// let x = Math.random()*(25-0+1);
// let z = Math.random()*(25-0+1);
// let y = Math.random()*(25-0+1);

// console.log(x, y, z)

// if ((x > y && x < z) || (x < y && x > z)) {
//     console.log(x)
// } else if( (y > x && y < z) || (y < x && y > z)) {
//     console.log(y)
// } else if((z > x && z < y) || (z > y && z < x)) {
//     console.log(z)
// }



/* 04. DONE
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

// let kr1 = Math.random()*(10-0+1);
// let kr2 = Math.random()*(10-0+1);
// let kr3 = Math.random()*(10-0+1);

// if (((kr1+kr2) > kr3) && ((kr1+kr3) > kr2) && ((kr2+kr3) > kr1)) {
//     console.log("Sudaryti trikampi galima")
// } else {
//     console.log("Klaida")
// }

/* 05. DONE
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

// let a = Math.floor(Math.random()*(2-0+1))
// let b = Math.floor(Math.random()*(2-0+1))
// let c = Math.floor(Math.random()*(2-0+1))
// let d = Math.floor(Math.random()*(2-0+1))

// let nulis = 0;
// let vienetas = 0;
// let dvejetas = 0;


// console.log(a,b,c,d)

// if(a == 0) {
//     nulis++
// } else if (a == 1) {
//     vienetas++
// } else if (a == 2) {
//     dvejetas++
// }

// if(b == 0) {
//     nulis++
// } else if (b == 1) {
//     vienetas++
// } else if (b == 2) {
//     dvejetas++
// }

// if(c == 0) {
//     nulis++
// } else if (c == 1) {
//     vienetas++
// } else if (c == 2) {
//     dvejetas++
// }

// if(d == 0) {
//     nulis++
// } else if (d == 1) {
//     vienetas++
// } else if (d == 2) {
//     dvejetas++
// }

// console.log(`Yra ${nulis} nuliu, ${vienetas} vienetu ir ${dvejetas} dvejetu`)


/* 06. DONE
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

// let a = Math.random()*(10+10+1)-10;
// let b = Math.random()*(10+10+1)-10;
// let c = Math.random()*(10+10+1)-10;

// if(a<0){console.log(`[${a}]`)}
// else if(a==0){console.log(`(${a})`)}
// else(console.log(`{${a}}`))

// if(b<0){console.log(`[${b}]`)}
// else if(b==0){console.log(`(${b})`)}
// else(console.log(`{${b}}`))

// if(c<0){console.log(`[${c}]`)}
// else if(c==0){console.log(`(${c})`)}
// else(console.log(`{${c}}`))

/* 07. DONE
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

// let sum = Math.floor(Math.random() * (3000-5+1)+5);
// let nuolaida1 = sum - ((3 / 100) * sum) ;
// let nuolaida2 = sum - ((4 / 100) * sum);

// if (sum > 1000) {
//     console.log(`Is viso: ${sum} zvakiu\nKaina: ${nuolaida1} eur \n`)
// } else if (sum>2000) {
//     console.log(`Is viso: ${sum} zvakiu\nKaina: ${nuolaida2} eur \n`)
// } else {
//     console.log(`Is viso: ${sum} zvakiu\nKaina: ${sum} eur \n`)
// }



/* 08. DONE
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

// let a = Math.random() * (101);
// let b = Math.random() * (101);
// let c = Math.random() * (101);
// console.log(a,b,c)
// console.log(Math.round((a+b+c)/3))

// if (a < 10 || a > 90) {
//     a = 0;
// } else if (b < 10 || b > 90) {
//     b = 0;
// } else if (c < 10 || c > 90) {
//     c = 0;
// }
// console.log(a,b,c)
// console.log(Math.round((a+b+c)/3))

/* 09. DONE
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

// let val = Math.floor(Math.random()*12)+1
// let min = Math.floor(Math.random()*60)+1
// let sec = Math.floor(Math.random()*60)+1

// let addSec = Math.floor(Math.random()*301)
// let newSec = sec+addSec

// if(min>59) {
//     val = val +1;
//     min= min-60;
// } 
// if (newSec > 59) {
//     min = min + Math.floor(newSec/60)
//     sec = newSec-(Math.floor(newSec/60)*60)
// }

// console.log(val)
// console.log(min)
// console.log(sec)

/* 10. 
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

// let a = Math.round(Math.random(9999-1000)+1000);
// let b = Math.round(Math.random(9999-1000)+1000);
// let c = Math.round(Math.random(9999-1000)+1000);
// let d = Math.round(Math.random(9999-1000)+1000);
// let e = Math.round(Math.random(9999-1000)+1000);
// let f = Math.round(Math.random(9999-1000)+1000);



