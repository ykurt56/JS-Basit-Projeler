# Javascript Eğitimimde Yaptığım Uygulamalar

## 1.) Beden Kitle Endeksi ( if - else )

Uygulama sizden istenilen verileri doğru şekilde girdikten sonra size ideal Kilonuzun altında veya üstünde olduğunuza dair bilgi vermeyi amaçlar.

## 2.) Benzin İstasyonu ( if - else )

Uygulama benzin istasyonuna gelen müşteriden bilgi alıp ona istediği yakıtı satmayı amaçlar.

#### Gelen Müşteriden İstenilen Bilgiler

    1.  Yakıt Tipi
    2.  Yüklenecek Yakıt Litresi
    3.  Bakiyesi

## 3.) Haftanın Günleri ( switch - case )

Uygulama girilen verinin 1 - 7 arasında bir gün seçmesini ister ve o günü seçtirmeyi amaçlar.

#### Örnek

    3 verisi girildiğinde **Çarşamba Gününü Seçtiniz.** diye ekrana yazdırır.

## 4.) ATM ( switch - case )

Uygulama 1000 TL bakiyesi olan kullanıcıya işlem seçtirir ve seçtiği işlemleri uygulamayı amaçlar.

#### Kullanıcının Yapabileceği İşlemler

    1.  Bakiye Görüntüleme
    2.  Para Çekme
    3.  Para Yatırma
    4.  Çıkış

## 5.) TYT PUAN HESAPLAMA ( switch - case )

Uygulama TYT sınavına girmiş bir öğrencinden veriler isteyerek sınav puanını hesaplamayı amaçlar.

    SORU SAYILARI

    1.  Türkçe Soru Sayısı = 40
    2.  Matematik Soru Sayısı = 40
    3.  Sosyal Bilimler Soru Sayısı = 30
    4.  Fen bilimleri Soru Sayısı = 20

    - 100 puanı ÖSYM veriyor
    - Okul puanı max 60

## 6.) ASAL SAYI ( for - if-else )

Uygulama kullanıcıdan bir adet sayı girmesini ister ve girilen sayının asal olup olmadığını kontrol etmeyi amaçlar.

## 7.) FAKTÖRİYEL HESAPLAMA ( for )

Uygulama kullanıcıdan bir adet sayı girmesini ister ve girilen sayının faktöriyelini hesaplamayı amaçlar.

## 8.) ARMSTRONG SAYISI ( for - if-else )

Uygulama kullanıcıdan bir adet sayı girmesini ister ve girilen sayının ARMSTRONG SAYISI olup olmadığını kontrol etmeyi amaçlar.

        153 Sayısı = 1*1*1 + 5*5*5 + 3*3*3 = 153
                        3   +  125  +   27  = 153
         Bu Sayı Bir ARMSTRONG SAYISIDIR.

## 9.) Metinde Harf Bulma

Uygulama kullanıcıdan **metin** girmesini ister ve girilen **metnin** içerisinde kullanıcının girdiği harften kaç tane olduğunu kontrol etmeyi amaçlar.

## 10.) Mükemmel Sayı

Uygulama kullanıcıdan bir adet sayı girmesini ister ve girilen sayının MÜKEMMEL SAYI olup olmadığını kontrol etmeyi amaçlar.

    6 Bir mükemmel sayı mıdır ?
    6 nın bölenleri = 1, 2, 3, 6
    6 nın bölenleri eğer ki 2 katına eşitse
    (// 1 + 2 + 3 + 6 = 12)
    6 Mükemmel bir sayıdır.

## 11.) 10'luk Sayıyı 2'liğe Çevirme

Bu uygulama kullanıcının girdiği sayıyı 10'luk sayı sistemden 2'lik sayı sisteme çevirmeyi amaçlar.

#### Örnek

    10 Sayısını 2'liğe çevirirsek

    Sayıyı Sürekli 2 ye bölerek kalanları ve en son bölümü ters çevirip yazdığımızda 2'lik sayı sistemine çevirmiş oluruz.

    10/2 den kalan 0
    5/2 den kalan 1
    2/2 den kalan 0
    2/2 den bölüm 1

    Sondan Okuyarak yani 1010 bizim 2 lik sayı sonucumuz ediyor.

## 12.) 2'lik Sayıdan 10'luğa Çevirme

Bu uygulama kullanıcının girdiği sayıyı 2'lik sayı sistemden 10'luk sayı sisteme çevirmeyi amaçlar.

#### Örnek

    1010 Sayısı 2'lik bir sayıdır.

    2'lik bir sayıyı 10'luk bir sayıya çevirken sondan başlarız ve rakamlar 2^0, 2^1 diye sıra sıra çarpılır.
    Çıkan sonuç ise toplanarak 10'luk sayı elde etmemizi sağlar.

    Sondan başlayarak ilerleceyeceğiz.
    Yani 0101 olarak düşünelim.

    Sonrasında
        0 * 2^0 = 0
        1 * 2^1 = 2
        0 * 2^2 = 0
        1 * 2^3 = 8
    Çıkan sonuçları toplayalım = 0 + 2 + 0 + 8 = 10
    Sonuç olarak 1010 Sayısı = 10 Sayısına Tekabül ediyormuş.

## 13.) Ürün arama(search)

Bu uygulama kullanıcının girdiği ürün ismine göre ürün aramayı amaçlar.

    Arama yapabileceğiniz markalar = Lenova, Apple, Acer

    Tüm ürünleri görmek için boş bırakabilirsiniz.

## 14.) Kitaplıktaki bir kitabın yerini bulma

Bu uygulama kullanıcının girdiği kitap ismine göre kitabın kaçıncı rafta olduğunu söylemeyi amaçlar.

### Not

Console Kısmından Kontrol Edebilirsiniz...

#### Kitaplıkla bulunan kitaplar

    "Her Şeyi Düşünme"
    "Hiç bir karşılaşma tesadüf değildir"
    "Şeker portakalı"
    "Son Kuşlar"
    "İnsan Neyle Yaşar"
