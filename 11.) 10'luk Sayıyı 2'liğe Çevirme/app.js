//? 10'luk Sayıyı 2'liğe Çevirme Uygulaması

/**
 *  10 Sayısını 2'liğe çevirirsek
 *  10/2 den kalan 0
 *  5/2 den kalan 1
 *  2/2 den kalan 0
 *  bide 2/2= 1 kaldı
 *
 *  Sondan Okuyarak yani 1010 bizim 2 lik sayı sonucumuz ediyor.
 *
 */

alert(
  "Bu uygulama Kullanıcının girdiği Sayıyı 10 luk Sistemden 2 lik sisteme çevirir."
);

let number = Number(prompt("Lütfen Bir Sayı Giriniz:"));

convertDecimalToBinary(number);

function convertDecimalToBinary(number) {
  let binary = "";
  while (true) {
    binary += (number % 2).toString();
    number = Math.floor(number / 2);

    if (number == 1) {
      binary += "1";
      break;
    }
  }
  let result = reverse(binary);
  console.log(result);
}

function reverse(binary) {
  let reverseBinary = "";

  for (let i = binary.length - 1; i >= 0; i--) {
    reverseBinary += binary.charAt(i);
  }
  return reverseBinary;
}
