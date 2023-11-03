/* LENGVESNI */

/* 01. DONE
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

// for (let i = 0; i < 10; i++) {
//     console.log("labas")
// }


/* 02. DONE
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

// for (let i = 0; i <= 9; i++) {
//     console.log(i)
// }


/* 03. DONE
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

// for (let i = 10; i <= 50; i+=2) {
//     console.log(i)
// }

/* 04. DONE
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/

// for (let i = 10; i <= 50; i+=2) {
//     if(i%10 !== 0) {
//         console.log(i)
//     }
// }

/* 05. DONE
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

// let i = 0;
// let porine = 0
// while (i < 20) {
//     i++
//     if(i%2==0){
//         porine++
//     }
// }console.log(`Kintamasis turejo porine reiksme ${porine} kartu`)

/* SUNKESNI */

/* 01. DONE
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

// let skaicius = Math.round(Math.random()*300)
// let didesni = 0;
// let numToString = ""

// for (let i = 0; i <= 300; i++) {
//     if(skaicius > 150) {
//         didesni++
//     }
//     if (i >= 275) {
//         numToString += `[${i}] `
//         continue;
//     } 
//     numToString += `${i} `
// } 

// console.log(numToString)
// console.log(`Didesniu uz 150 yra ${didesni} skaiciu`);

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

// for (let i = 1; i <= 3000; i++) {
//     if (i%77 === 0) {
//         console.log(`${i}, `)
//     } 

// if(i === 3000) {
//     console.log(i)
//     }
// }


/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

// let eile = 10;
// let stulpelis = 10;

// for (let i = 0; i < eile; i++) {
//     let eile = '';
//     for (let j = 0; j < stulpelis; j++) {
//         eile += '* ';
//     }
//     console.log(eile);
// }

//---------antras variantas

// eile = '';
// let stulpelis = 15;

// for (let j = 0; j < stulpelis; j++) {
//     eile += '* ';
// }

// for (let i = 0; i < stulpelis; i++) {
//     console.log(eile);
// }

//---------trecias

// let eile = '* ';
// let stulpelis = 10
// for(i = 0; i < stulpelis; i++){
//     console.log(eile.repeat(stulpelis))
// }