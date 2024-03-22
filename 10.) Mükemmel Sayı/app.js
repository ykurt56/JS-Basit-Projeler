//? Mükemmel Sayı Uygulaması

/**
 *    6 Bir mükemmel sayıdır.
 *    6 nın bölenleri = 1, 2, 3, 6           // 1 + 2 + 3 + 6 = 12
 *    6 nın bölenleri eğer ki 2 katına eşitse
 *  ? 6 Mükemmel BİR SAYIDIR
 *
 */
alert(
  "Bu uygulama Girilen Sayının MÜKEMMEL SAYI  Olup Olmadığını Kontrol Eder."
);
let number = Number(prompt("Lütfen Bir Sayı Giriniz: "));

isPerfectNumber(number);

function isPerfectNumber(number) {
  let total = 1;
  for (i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      total += i;
    }
  }
  total += number;

  if (total == number * 2) {
    alert(number + " Sayısı Mükemmel Bir Sayıdır.");
  } else {
    alert(number + " Sayısı Mükemmel Bir Sayı Değildir.");
  }
}
