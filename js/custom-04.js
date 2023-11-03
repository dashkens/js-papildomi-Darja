/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let augalai = ['ruta', 'gervuoge', 'sermuksnis', 'neuzmirstuole', 'narcizas', 'kaktusas', 'sukulentas', 'orchideja', 'seivamedis', 'gyslotis']

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/

for(let augalas of augalai) {
    console.log(augalas)
}
console.log('------------')

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

for (let i = augalai.length-1; i >= 0; i-- ){
    console.log(augalai[i])
}
console.log('------------')

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

let lessThan5 = 0
let moreThan7 = 0

for(let augalas of augalai){
    if (augalas.length < 5) {
        lessThan5++
    } else if (augalas.length > 7) {
        moreThan7++
    }
}

console.log(`Zodziai, kurie yra trumpensi nei 5 simboliai: ${lessThan5}
Zodziai, kurie yra ilgesni nei 7 simboliai: ${moreThan7}`)
