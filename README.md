# Tugas 2 - Array Function

## Identitas
- Nama : Rara Apriliana
- NIM  : F1D020086

## Deskripsi Tugas
Tugas ini bertujuan untuk memahami dan menerapkan enam metode array pada JavaScript (`map()`, `filter()`, `reduce()`, `find()`, `some()`, dan `every()`) menggunakan data array buatan sendiri minimal 10 elemen dengan kasus yang berbeda pada setiap metode.

## Implementasi

### map()
- Tujuan: Mengubah seluruh nama aktivitas pada array menjadi huruf kapital.
- Screenshot:
  ![Kode dan Hasil map()](./screenshot/output-semua.png)

### filter()
- Tujuan: Menyaring aktivitas yang dilakukan di luar ruangan (`outdoor: true`).
- Screenshot:
  ![Kode dan Hasil filter()](./screenshot/output-semua.png)

### reduce()
- Tujuan: Menghitung total jam per minggu dari seluruh aktivitas.
- Screenshot:
  ![Kode dan Hasil reduce()](./screenshot/output-semua.png)

### find()
- Tujuan: Mencari aktivitas pertama yang memiliki durasi minimal 6 jam per minggu.
- Screenshot:
  ![Kode dan Hasil find()](./screenshot/output-semua.png)

### some()
- Tujuan: Mengecek apakah terdapat minimal satu aktivitas dengan durasi 10 jam atau lebih per minggu.
- Screenshot:
  ![Kode dan Hasil some()](./screenshot/output-semua.png)

### every()
- Tujuan: Memastikan seluruh aktivitas memiliki durasi minimal 1 jam per minggu.
- Screenshot:
  ![Kode dan Hasil every()](./screenshot/output-semua.png)

## Kesimpulan
Setiap metode array memiliki fungsi yang spesifik: `map()` menghasilkan array baru dengan elemen yang telah ditransformasi, `filter()` menyaring elemen sesuai kondisi, `reduce()` mengakumulasi seluruh elemen menjadi satu nilai, `find()` mengembalikan elemen pertama yang cocok dengan kondisi, `some()` mengecek apakah setidaknya ada satu elemen yang memenuhi syarat, dan `every()` memastikan seluruh elemen memenuhi syarat.