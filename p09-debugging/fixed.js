// PERBAIKAN BUG 1: nama variabel disesuaikan
const namaMahasiswa = "Raka";
console.log("Nama mahasiswa:", namaMahasiswa);

// PERBAIKAN BUG 2: konversi ke number dengan Number()
const nilaiTugas = Number("80");
const nilaiUts = Number("75");
const total = nilaiTugas + nilaiUts;
console.log("Total nilai:", total);

// PERBAIKAN BUG 3: panggil nama function yang benar
function hitungRataRata(a, b) {
    return (a + b) / 2;
}

console.log("Rata-rata:", hitungRataRata(nilaiTugas, nilaiUts));