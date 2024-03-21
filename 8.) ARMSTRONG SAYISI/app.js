//? ARMSTRONG SAYISI

/**
        153 Sayısı = 1*1*1 + 5*5*5 + 3*3*3 = 153 
                      3    +  125  + 27    = 153
          Yani Bu Sayı Bir ARMSTRONG SAYISIDIR.  
 */

alert(
  "Bu uygulama Girilen Sayının ARMSTRONG SAYISI Olup Olmadığını Kontrol Eder."
);
let sayi = prompt("Lütfen Bir Sayı Giriniz:");
let toplam = 0;

for (let i = 0; i < sayi.length; i++) {
  rakam = sayi.charAt(i);
  toplam += rakam * rakam * rakam;
}

if (Number(sayi) == toplam) {
  alert(sayi + " Sayısı bir ARMSTRONG SAYISIDIR.");
} else {
  alert(sayi + " Sayısı bir ARMSTRONG SAYISI Değildir.");
}
