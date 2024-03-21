/*
  ? SORULAR
  1 - Türkçe 40 
  2 - Matematik 40 
  3 - Sosyal Bilimler 30 
  4 - Fen bilimleri 20 

  ----> 100 puanı ÖSYM veriyor
  ----> Okul puanı max 60 

*/

let turkceDogru,
  turkceYanlis = 0;
let matematikDogru,
  matematikYanlis = 0;
let sosyalDogru,
  sosyalYanlis = 0;
let fenDogru,
  fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let yeniSatir = "\r\n";
let mesaj =
  "TYT PUAN HESAPLAMA UYGULAMASINA HOŞGELDİNİZ..." +
  yeniSatir +
  "1 - Puan Hesaplama" +
  yeniSatir +
  "2 - Çıkış Yap";

let secim = prompt(mesaj);

switch (secim) {
  case "1":
    okulPuani = Number(prompt("Okul Puanınızı Giriniz: "));

    turkceDogru = Number(prompt("Türkçe Doğru Sayısını Giriniz: "));
    turkceYanlis = Number(prompt("Türkçe Yanlış Sayısını Giriniz: "));

    matematikDogru = Number(prompt("Matematik Doğru Sayısını Giriniz: "));
    matematikYanlis = Number(prompt("Matematik Yanlış Sayısını Giriniz: "));

    sosyalDogru = Number(prompt("Sosyal Bilimler Doğru Sayısını Giriniz: "));
    sosyalYanlis = Number(prompt("Sosyal Bilimler Yanlış Sayısını Giriniz: "));

    fenDogru = Number(prompt("Fen Bilimleri Doğru Sayısını Giriniz: "));
    fenYanlis = Number(prompt("Fen Bilimleri Yanlış Sayısını Giriniz: "));

    let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenYanlis;
    let yanlisSayisi =
      turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
    let kalanDogruSayisi = dogruSayisi - yanlisSayisi / 4;
    puan = kalanDogruSayisi * 4 + 100 + okulPuani;

    alert("TYT Puanınız : " + puan);

    break;
  case "2":
    alert("Uygulamadan çıkış Yapıldı...");
    break;
  default:
    alert("Lütfen Geçerli Bir Seçim Yapınız.");
    break;
}
