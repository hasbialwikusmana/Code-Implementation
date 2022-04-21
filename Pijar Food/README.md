2. Buatlah Flowchart dan Code untuk soal dibawah ini:

Demy membeli makanan menggunakan aplikasi PijarFood. Dimana terdapat 2 buah kode promo:

- Promo ‘PIJARFOOD5’ dengan ketentuan pemesanan minimal 50rb akan mendapat diskon 50%, dengan maksimal potongan sebesar 50rb.
- Promo ‘DITRAKTIRPIJAR’ dengan ketentuan pemesanan minimal 25rb akan mendapatkan diskon 60%, dengan maksimal potongan sebesar 30rb.
- Jika tidak menggunakan kode promo tidak mendapatkan potongan (false)

Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap satu kilometer selanjutnya dikenakan penambahan 3rb.
Untuk beberapa restoran dikenakan pajak yakni 5% dari harga makanan yang dipesan (true), jika tidak dikenakan pajak (false).

# TASK

- Buatlah flowchart untuk membuat fungsi dari cerita diatas.
- Buatlah sebuah function yang menerima 4 parameter.
  PijarFood(harga, voucher, jarak, pajak)

  Example:
  Input : PijarFood(75000, “PIJARFOOD5”, 5, true)
  Output :
  Harga : 75000
  Potongan : 37500
  Biaya Antar : 14000
  Pajak : 3750
  SubTotal : 55250 (harga - potongan + biaya antar + pajak)
