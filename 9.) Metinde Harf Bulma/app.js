//? HARF SAYISI BULMA UYGULAMASI

alert(
  "Bu uygulama Kullanıcının girdiği Metnin içindeki yine kullanıcının girdiği Harfin Kaç Kere Geçtiğini Kontrol Eder."
);

let metin = prompt(
  "Lütfen Harf Arayacağınız Metninizi Giriniz:  \r\n Örnek Metin: \r\n Merhaba Ben Şuan Javascript Öğreniyorum."
);

let harf = prompt("Bir Harf Giriniz");

let sonuc = bul(harf);
alert("Harf Sayısı : " + sonuc);

function bul(harf) {
  let toplam = 0;
  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i).toLowerCase() == harf.toLowerCase()) {
      toplam += 1;
    }
  }
  return toplam;
}
