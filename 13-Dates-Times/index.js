let tarih = new Date();

let result;

result = tarih.getDate(); //!Ayin kacinci günü
result = tarih.getDay(); //!haftanin kacinci günü 0=pazar 6=cumartesi
result = tarih.getFullYear(); //!yil
result = tarih.getHours(); //!saat
result = tarih.getTime(); //!Milisaniye saat


//!tarihi Güncelleme Metohotlari- Set Methods

// tarih.setFullYear(2025);
result = tarih.setFullYear(2025);
tarih.setMonth(2);
tarih.setDate(15);
result = tarih

//! Dogum tarihi
let dogumtarihi = new Date(1991, 8, 14);
result = tarih.getFullYear()-dogumtarihi.getFullYear();


console.log(result);