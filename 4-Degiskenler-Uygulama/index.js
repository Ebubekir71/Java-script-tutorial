/*
ögrenci bilgileri

1-Mert demir
    dogum tarihi : 2001
    Bilgisayar notlari: 100, 90, 10
2- Eylul Demir
    dogum tarihi : 2002
    Bilgisayar notlari: 60, 30, 50
    
Gecer not : 45

Program Sartlari
1-Ögrenci yaslarini hesaplayin
2-Ögrencilerin ders ortalamasini hesaplayin
3-Ögrencilerin dersten kalip kalmadigini hesaplayiniz
*/
let ogrenci1Adi= 'Mert Demir';
let ogrenci1dogumtarihi= 2001;
let tarih1= new Date().getFullYear();
let yas1=tarih1-ogrenci1dogumtarihi;
let sinav1 = 100;
let sinav2 = 90;
let sinav3 = 10;
let sonuc1 = (sinav1+sinav2+sinav3)/3;
console.log(parseInt(sonuc1));
console.log(yas1);
console.log(sonuc1>45);
console.log(sonuc1<45);

let ogrenci2Adi= 'Eylül Demir';
let ogrenci2dogumtarihi= 2002;
let tarih2= new Date().getFullYear();
let yas2=tarih2-ogrenci2dogumtarihi;
let esinav1 = 60;
let esinav2 = 30;
let esinav3 = 50;
let esonuc = (esinav1+esinav2+esinav3)/3;
console.log(parseInt(esonuc));
console.log(yas2);
console.log(esonuc>45);
console.log(esonuc<45);