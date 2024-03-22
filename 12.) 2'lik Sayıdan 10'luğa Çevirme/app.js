//? 2 lik Sayıdan 10'luğa Çevirme Uygulaması

/**
 *
 *  1010 Sayısı 2'lik bir sayıdır.
 *  Sondan başlayarak ilerleceyeceğiz.
 *  Yani 0101 olarak düşünelim. Sonrasında
 *  0 * 2^0 = 0
 *  1 * 2^1 = 2
 *  0 * 2^2 = 0
 *  1 * 2^3 = 8
 *  Çıkan sonuçları toplayalım = 0 + 2 + 0 + 8 = 10
 *  Sonuç olarak 1010 Sayısı = 10 Sayısına Tekabül ediyormuş.
 *
 */

alert(
  "Bu uygulama Kullanıcının girdiği Sayıyı 2 lik Sistemden 10 luk sisteme çevirir."
);

let number = prompt("Lütfen Bir Sayı Giriniz:");

convertBinaryToDecimal(number);

function convertBinaryToDecimal(binary) {
  let result = 0;
  let exponent = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    result += Number(binary.charAt(i)) * Math.pow(2, exponent);
    exponent++;
  }

  alert(number + " Sayısının 10'luk Sistemde Karşılığı : " + result);
}
