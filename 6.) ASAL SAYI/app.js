//? ASAL SAYI BULMA UYGULAMASI
alert("Bu uygulama Girilen Sayının Asal Olup veya Olmadığını Kontrol Eder.");
let sayi = Number(prompt("Lütfen Bir Sayı Giriniz:"));

let sonuc = true;

for (let i = 2; i <= Math.floor(sayi / 2); i++) {
  if (sayi % i == 0) {
    sonuc = false;
    break;
  }
}

if (sonuc) {
  alert(sayi + " Sayısı Asal Bir Sayıdır.");
} else {
  alert(sayi + " Sayısı Asal Bir Sayı Değildir.");
}
