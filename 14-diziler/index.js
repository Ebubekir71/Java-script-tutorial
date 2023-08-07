//ra (er ey) ler tek satirda bir kac tane icerik yazmamiza olanak saglar.Köseli parantez icerisinde virgüllü iceriklerdir. 0 1 2 3 diye devam eder.

// const urun1 = "samsung";
// const urun2 = "apple";
// const urun3 = "huawei";

const urunler =["samsung", "apple", "huawei"];
console.log(urunler)

const fiyatlar = [10, 20, 30];
console.log(fiyatlar[0]);

const urun5 = ["samsung", 10];
console.log(urun5);

const yeniUrun = ["samsung", 150, ["apple", 20]];
console.log(yeniUrun[2][1]);

const yepyeniurun = ["samsung","apple","huawei"];
const yepyenifiyatlar = [150, 250, 350];
// console.log(yepyeniurun[1]+" "+ yepyenifiyatlar[2])
console.log(`${yepyeniurun[1]} ${yepyenifiyatlar[0]}`)

let urunler9 = "huawei";
let fiyatlar9 = 150;
console.log(urunler9 +" "+ fiyatlar9);