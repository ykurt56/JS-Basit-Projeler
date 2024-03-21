let sayac = 1;
let toplam = 0;
do {
  if (sayac % 2 == 1) {
    toplam += sayac;
  }
  sayac++;
} while (sayac <= 20);
console.log("Toplam :", toplam);
