//todo ATM UYGULAMASI
/* 
  1 - Bakiye Görüntüleme 
  2 - Para Çekme 
  3 - Para Yatırma 
  4 - Çıkış 

*/
let yeniSatir = "\r\n";
let bakiye = 1000;
let metin =
  "1 - Bakiye Görüntüleme " +
  yeniSatir +
  "2 - Para Çekme " +
  yeniSatir +
  "3 - Para Yatırma" +
  yeniSatir +
  "4 - Çıkış" +
  yeniSatir +
  "Lütfen Yapılacak İşlemi Seçiniz: ";

let secim = prompt(metin);

switch (secim) {
  case "1":
    alert("Bakiyeniz : " + bakiye);
    break;

  case "2":
    let cekilecekTutar = Number(prompt("Çekilecek Tutarı Giriniz: "));
    //? BAKİYE EĞER ÇEKİLMEK İSTENEN TUTARDAN FAZLAYSA
    if (bakiye < cekilecekTutar) {
      alert(
        "Çekmek İstediğiniz Miktarda Bakiyeniz Bulunmamaktadır." +
          yeniSatir +
          "Güncel Bakiyeniz : " +
          bakiye +
          yeniSatir +
          " Çekmek İstediğiniz Tutar: " +
          cekilecekTutar
      ); //? EĞER BAKİYE ÇEKİLCEK TUTARDAN AZ İSE
    } else {
      bakiye = bakiye - cekilecekTutar;
      alert(
        "Bakiyeniz Çekilmiştir." + yeniSatir + "Güncel Bakiyeniz : " + bakiye
      );
    }
    break;

  case "3":
    let yatirilacakTutar = Number(
      prompt("Yatırmak İsteğiniz Bakiye Miktarını Giriniz: ")
    );
    bakiye = bakiye + yatirilacakTutar;
    alert("Güncel Bakiyeniz: " + bakiye);
    break;

  case "4":
    document.write("Sistemden Çıkış Yapılmıştır.");
    break;
  default:
    document.write("Lütfen 1 - 4 Arasında Değer Giriniz ! ");
    break;
}
