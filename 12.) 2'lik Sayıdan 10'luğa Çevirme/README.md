# 12.) 2'lik Sayıdan 10'luğa Çevirme

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
