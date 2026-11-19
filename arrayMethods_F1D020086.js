// Tugas 2 - Metode Array JavaScript
// NIM: F1D020086

const aktivitas = [
  { nama: "Membaca", jamPerMinggu: 4, outdoor: false },
  { nama: "Bersepeda", jamPerMinggu: 3, outdoor: true },
  { nama: "Coding", jamPerMinggu: 10, outdoor: false },
  { nama: "Lari Pagi", jamPerMinggu: 2, outdoor: true },
  { nama: "Memasak", jamPerMinggu: 5, outdoor: false },
  { nama: "Badminton", jamPerMinggu: 3, outdoor: true },
  { nama: "Menulis", jamPerMinggu: 4, outdoor: false },
  { nama: "Hiking", jamPerMinggu: 6, outdoor: true },
  { nama: "Mendengarkan Musik", jamPerMinggu: 7, outdoor: false },
  { nama: "Berenang", jamPerMinggu: 2, outdoor: true }
];

// 1. map() -> Ambil daftar nama aktivitas dalam huruf kapital
const namaKapital = aktivitas.map((item) => item.nama.toUpperCase());
console.log("1. map() - Nama Kapital:", namaKapital);

// 2. filter() -> Ambil aktivitas outdoor saja
const aktivitasOutdoor = aktivitas.filter((item) => item.outdoor === true);
console.log("2. filter() - Aktivitas Outdoor:", aktivitasOutdoor);

// 3. reduce() -> Hitung total jam per minggu dari seluruh aktivitas
const totalJam = aktivitas.reduce((total, item) => total + item.jamPerMinggu, 0);
console.log("3. reduce() - Total Jam/Minggu:", totalJam);

// 4. find() -> Cari aktivitas pertama yang durasinya >= 6 jam per minggu
const aktivitasDurasiTinggi = aktivitas.find((item) => item.jamPerMinggu >= 6);
console.log("4. find() - Aktivitas >= 6 jam:", aktivitasDurasiTinggi);

// 5. some() -> Cek apakah ada aktivitas dengan durasi >= 10 jam per minggu
const adaYangSangatLama = aktivitas.some((item) => item.jamPerMinggu >= 10);
console.log("5. some() - Ada aktivitas >= 10 jam?:", adaYangSangatLama);

// 6. every() -> Cek apakah semua aktivitas memiliki durasi minimal 1 jam per minggu
const semuaMinimalSatuJam = aktivitas.every((item) => item.jamPerMinggu >= 1);
console.log("6. every() - Semua >= 1 jam?:", semuaMinimalSatuJam);