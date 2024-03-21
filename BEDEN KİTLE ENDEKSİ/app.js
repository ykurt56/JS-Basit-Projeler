//* Beden Kitle Endeksi Hesaplama

let kilo = Number(prompt("Kilonuzu Giriniz: "));
let boy = Number(prompt("Boyunuzu Giriniz: "));

let sonuc = kilo / (boy * boy);

if (sonuc < 18.5) {
  console.log("İdeal Kilonun Altındasnız. ");
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
  console.log("İdeal Kilonun Altındasnız. ");
} else if (sonuc >= 25 && sonuc <= 29.9) {
  console.log("İdeal Kilodasınız. ");
} else if (sonuc >= 30 && sonuc <= 39.9) {
  console.log("İdeal Kilonun Çok Üstündesiniz (OBEZ)");
} else if (sonuc >= 40) {
  console.log("İdeal Kilonun Çok Üstündesiniz (MORBİD OBEZ)");
}
