let products = ["iphone5", "samsung", "huawei"];
let result;
result = products;

//! array to string
// result = products.toString(); // stringe cevir
result = products.join(" + ") // ayirma


//! diziden eleman silme
// result = products.shift(); //ilk elemani siler geri döndurur
result = products.pop();  //son elemani silme

//!diziye eleman ekleme
// result = products.push("xiaomi"); // dizi sonuna eleman ekliyor
result = products.unshift("xiaomi"); // dizi basina eleman ekleme

//!dizi birlestirme
let urunler1 = ["asus", "apple"];
let urunler2 = ["dell", "casper"];
let urunler3 = ["acer", "exper"];

// result = urunler1.concat(urunler2, urunler3);
// result = urunler1.splice(0, 0, urunler2); //sifirdan baslayip sifir tane siler urunler2 yi ekler
// result = urunler1.splice(0, 0, "elma");
// result = urunler1.splice(0, 1); //sifirdan baslayip bir tane siler
result = urunler1.splice(0, 2); //sifirdan baslayip iki tane siler

console.log(result);
console.log(urunler1);