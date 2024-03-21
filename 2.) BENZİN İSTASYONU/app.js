//todo BENZİN İSTASYONU UYGULAMASI

/* 

        Dizel  : 41.90 TL/LT
        Benzin : 43.48 TL/LT
        LPG    : 21.95 TL/LT



        Gelen Müşteriden Alacağımız Bilgiler 
        1- Yakıt Tipi
        2- Yüklenecek Yakıt Litresi
        3- Bakiyesi
*/

let yeniSatir = "\r\n";

let dizel = 41.9,
  benzin = 43.48,
  lpg = 21.95;

let yakitMetni =
  "H O Ş G E L D İ N İ Z " +
  yeniSatir +
  "1 - Dizel" +
  yeniSatir +
  "2 - Benzin" +
  yeniSatir +
  "3 - Lpg" +
  yeniSatir +
  "Lütfen Aracınıza Uygun Yakıt Tipini Seçiniz: ";

let yakitTipi = prompt(yakitMetni);

if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
  let yakitLitre = Number(
    prompt("Aracınıza Yüklenecek Yakıt Litresini Giriniz: ")
  );

  let bakiye = Number(prompt("Lütfen Bakiyenizi Giriniz: "));

  if (yakitTipi == "1") {
    let odenecekTutar = dizel * yakitLitre;

    if (bakiye >= odenecekTutar) {
      //! BAKİYE EĞER YETİYORSA
      alert(
        "Aracınıza Yakıtınız Yüklenmiştir." +
          yeniSatir +
          "Ödediğiniz Tutar = -" +
          odenecekTutar +
          yeniSatir +
          "Kalan Bakiye = " +
          (bakiye - odenecekTutar)
      );
    }
    //! BAKİYE EĞER YETMiYORSA
    else {
      alert(
        "Aracınıza Yakıtınız Yüklenmemiştir." +
          yeniSatir +
          "Bakiyeniz Yeterli değildir." +
          yeniSatir +
          "Ödenecek Tutar : -" +
          odenecekTutar +
          yeniSatir +
          "Bakiyeniz : " +
          bakiye +
          yeniSatir +
          "Eksik Tutar: " +
          (odenecekTutar - bakiye)
      );
    }
  }

  if (yakitTipi == "2") {
    let odenecekTutar = benzin * yakitLitre;

    if (bakiye >= odenecekTutar) {
      //! BAKİYE EĞER YETİYORSA
      alert(
        "Aracınıza Yakıtınız Yüklenmiştir." +
          yeniSatir +
          "Ödediğiniz Tutar = -" +
          odenecekTutar +
          yeniSatir +
          "Kalan Bakiye = " +
          (bakiye - odenecekTutar)
      );
    }
    //! BAKİYE EĞER YETMiYORSA
    else {
      alert(
        "Aracınıza Yakıtınız Yüklenmemiştir." +
          yeniSatir +
          "Bakiyeniz Yeterli değildir." +
          yeniSatir +
          "Ödenecek Tutar : -" +
          odenecekTutar +
          yeniSatir +
          "Bakiyeniz : " +
          bakiye +
          yeniSatir +
          "Eksik Tutar: -" +
          (odenecekTutar - bakiye)
      );
    }
  }

  if (yakitTipi == "3") {
    let odenecekTutar = lpg * yakitLitre;

    if (bakiye >= odenecekTutar) {
      //! BAKİYE EĞER YETİYORSA
      alert(
        "Aracınıza Yakıtınız Yüklenmiştir." +
          yeniSatir +
          "Ödediğiniz Tutar = -" +
          odenecekTutar +
          yeniSatir +
          "Kalan Bakiye = " +
          (bakiye - odenecekTutar)
      );
    }
    //! BAKİYE EĞER YETMiYORSA
    else {
      alert(
        "Aracınıza Yakıtınız Yüklenmemiştir." +
          yeniSatir +
          "Bakiyeniz Yeterli değildir." +
          yeniSatir +
          "Ödenecek Tutar : -" +
          odenecekTutar +
          yeniSatir +
          "Bakiyeniz : " +
          bakiye +
          yeniSatir +
          "Eksik Tutar: -" +
          (odenecekTutar - bakiye)
      );
    }
  }
} else {
  alert("Hatalı Giriş Yaptınız Lütfen Aracınıza Uygun Yakıt Tipini Seçiniz.");
}
