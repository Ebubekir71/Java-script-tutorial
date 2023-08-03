let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;
//! 1 - Aritmetik Operatörleri
//? +, -, *, /, ++, --
result = number1 + number3;
result = number2 - number1;
result = number1 - number3;
result = number2 * number1;
result = number2 / number1;
result = number1 / 9;
result = number1 % 9;
// result = number1++;
// result = ++number1;

console.log(number1);
//! 2 - Atama Operatörleri
//? =, +=, -=, /=, *=, %=
result = number1;
result +=number2;                  /*result + number2;*/ /*Bunuda yazabiliriz satir basindaki codu da yazabiliriz*/
result -=number2; /*   result - number2   */
result /=number2; /*   result / number2   */
result *=number2; /*   result * number2   */
result %=number2; /*   result % number2   */


console.log(result);

//! 3 - Karsilastirma Operatörleri
//? ==, !=, ===, >, <, >=, <=
result = number1 == number2;    /*esit ise true verir*/
result = number1 != number2;    /*esit degilse true verir*/
result = 10 == '10';    /*sayi kontol */
result = 10 ==='10';    /*tip kontrol */
result = number1 > number2;   
result = number1 < number2;   
result = number1 >= number2;
result = number1 <= number2; 

// console.log(result);

//! 4 - Mantiksal Operatörleri
// && : ve , || : veya , ! : tersi   Anlamlarina gelirler

//&& ve iki sarti da saglamasi lazim
console.log( number1 !== number2 && number1 > number2);


// || veya : true icin bir sarti saglamasi yeterli
console.log( number1 > number3 || number1 === number1);


/* ! tersi */
console.log(!(number1 > number3) && number2 >=number1);