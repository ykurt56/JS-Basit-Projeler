let urun1 = {
  isim: "LENOVO IdeaPad",
  katagori: "Teknoloji",
  fiyat: 8.999,
};

let urun2 = {
  isim: "LENOVO IP Gaming",
  katagori: "Teknoloji",
  fiyat: 22.999,
};

let urun3 = {
  isim: "LENOVA LOQ",
  katagori: "Teknoloji",
  fiyat: 24.999,
};

let urun4 = {
  isim: "APPLE Macbook",
  katagori: "Teknoloji",
  fiyat: 36.999,
};

let urun5 = {
  isim: "ACER Nitro 5",
  katagori: "Teknoloji",
  fiyat: 8.999,
};

let urun6 = {
  isim: "ACER Nitro 16",
  katagori: "Teknoloji",
  fiyat: 8.999,
};

alert(
  "Bu uygulama kullanıcının girdiği ürün ismine göre ürün aramayı amaçlar."
);

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let kullaniciGirdisi = prompt("Urun ismini giriniz");
let arananUrunler = [];

urunleriBul(urunler);
urunleriYazdir(arananUrunler);

function urunleriBul(arama) {
  urunler.forEach(function (urun) {
    if (urun.isim.toUpperCase().includes(kullaniciGirdisi.toUpperCase(), 0)) {
      arananUrunler.push(urun);
    }
  });
}

function urunleriYazdir(urunler) {
  urunler.forEach(function (urun) {
    document.write(
      "--------------------------------------------------------------------------------------------------- <br>"
    );

    document.write(
      "Urun Adı: " +
        urun.isim +
        "<br>" +
        "Urun Fiyatı: " +
        urun.fiyat +
        "TL" +
        "<br>" +
        "Urun Katagorisi: " +
        urun.katagori +
        "<br>"
    );

    document.write(
      "---------------------------------------------------------------------------------------------------<br>"
    );
  });
}
