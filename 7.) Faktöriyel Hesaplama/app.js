//? FAKTÖRİYEL HESAPLAMA

alert("Bu uygulama Girilen Sayının Faktöriyelini Hesaplar.");
let sayi = Number(prompt("Lütfen Bir Sayı Giriniz:"));
let sonuc = 1;

for (let i = 1; i <= sayi; i++) {
  sonuc = sonuc * i;
}

alert("Sonuç :" + sonuc);
