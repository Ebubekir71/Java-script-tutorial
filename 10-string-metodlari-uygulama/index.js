let url ='https://www.bilgisayargenetigi.com';
let youtube = "Bilgisayar genetigi";
let dosya = "ebubekir's dosya";
let result;


//! 1-Karakter sayisini bul.
result = url.length;
result = youtube.length;
result = youtube.replace(" ", "").length;

//! 2- Youtube degiskeni kac karakterden olusuyor
result = youtube.split(" ").length;
result = url.split(".").length;

//! 3- Kanal adi baslangic kontrol
result = youtube.startsWith("rBilgisayar");
result = url.startsWith("https")
if(result){
    console.log("yapilacaklar"); 
    
    /if dersek dogru ise else dersek yanlis ise manasina geliyor*/

}else{
    console.log("false döndü");
}


//! 4- Kelime kontrolü
if(youtube.indexOf("genetigi") > -1){
    console.log("calisti");
}else{
    console.log("calismadi");
}

//! 5-Url ve Youtube degisken birlestir
youtube = youtube.toLowerCase().replace(" ", "-");
// url = url.replace("com","com/");
youtube = youtube.replace("genetigi","genetigi/");
dosya = dosya.replace("ebubekir's","ebubekirin");
dosya = dosya.replace(" ","-");
dosya = dosya.replace("dosya","dosyasi/");

let newUrl = url.replace(url, url+youtube+dosya);
newUrl = `Bu tirnak isaretini unutma eklemeleri kolay bir sekilde yapabilirsin bununla. Illaki  bu yatay olan tirnaklardan olmasi lazin  örnegin       
${url}/${youtube}/${dosya}`
newUrl = `buda direk denemesi ${dosya}`
newUrl = `buda direk denemesi ${dosya}`


console.log(newUrl);
