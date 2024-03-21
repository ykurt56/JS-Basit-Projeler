let yeniSatir = "\r\n";
let sayi = prompt(
  "1 - Pazartesi" +
    yeniSatir +
    "2 - Salı" +
    yeniSatir +
    "3 - Çarşamba" +
    yeniSatir +
    "4 - Perşembe" +
    yeniSatir +
    "5 - Cuma" +
    yeniSatir +
    "6 - Cumartesi" +
    yeniSatir +
    "7 - Pazar" +
    yeniSatir +
    "Lütfen Bir Gün Seçiniz : "
);

switch (sayi) {
  case "1":
    document.write("Pazartesi Gününü Seçtiniz.");
    break;
  case "2":
    document.write("Salı Gününü Seçtiniz.");
    break;
  case "3":
    document.write("Çarşamba Gününü Seçtiniz.");
    break;
  case "4":
    document.write("Perşembe Gününü Seçtiniz.");
    break;
  case "5":
    document.write("Cuma Gününü Seçtiniz.");
    break;
  case "6":
    document.write("Cumartesi Gününü Seçtiniz.");
    break;
  case "7":
    document.write("Pazar Gününü Seçtiniz.");
    break;
  default:
    document.write("Lütfen geçerli bir değer giriniz !");
    break;
}
