// Data Array berisi sekumpulan Object Mahasiswa
const mahasiswa = [
    { nama: "Ayu", prodi: "SI", nilai: 88 },
    { nama: "Bima", prodi: "SI", nilai: 76 },
    { nama: "Citra", prodi: "SI", nilai: 91 },
    { nama: "Dedi", prodi: "SI", nilai: 64 }
];

// Function menentukan status kelulusan (Batas nilai >= 65)
function tentukanStatus(nilai) {
    return nilai >= 65 ? "Lulus" : "Belum Lulus";
}

// Function menghitung rata-rata nilai menggunakan pengulangan (loop)
function hitungRataRata(dataMahasiswa) {
    let total = 0;
    for (let i = 0; i < dataMahasiswa.length; i++) {
        total += dataMahasiswa[i].nilai;
    }
    return total / dataMahasiswa.length;
}

document.addEventListener("DOMContentLoaded", function () {
    // Perhitungan ringkasan data
    const rataRata = hitungRataRata(mahasiswa);
    const jumlahLulus = mahasiswa.filter((item) => item.nilai >= 65).length;

    // Render bagian Ringkasan ke elemen HTML (#ringkasan)
    const ringkasan = document.getElementById("ringkasan");
    if (ringkasan) {
        ringkasan.innerHTML = `
            <article class="summary-card">
                <p>Total Mahasiswa</p>
                <strong>${mahasiswa.length}</strong>
            </article>
            <article class="summary-card">
                <p>Rata-rata Nilai</p>
                <strong>${rataRata.toFixed(1)}</strong>
            </article>
            <article class="summary-card">
                <p>Jumlah Lulus</p>
                <strong>${jumlahLulus}</strong>
            </article>
        `;
    }

    // Render daftar kartu mahasiswa ke elemen HTML (#daftar)
    const daftar = document.getElementById("daftar");
    if (daftar) {
        for (let i = 0; i < mahasiswa.length; i++) {
            const item = mahasiswa[i];
            const status = tentukanStatus(item.nilai);
            const statusClass = status === "Lulus" ? "status-lulus" : "status-belum";

            daftar.innerHTML += `
                <article class="card">
                    <span class="badge">${item.prodi}</span>
                    <h2>${item.nama}</h2>
                    <p>Nilai: <strong>${item.nilai}</strong></p>
                    <p>Status: <span class="${statusClass}">${status}</span></p>
                </article>
            `;
        }
    }

    // Tampilkan data berbentuk tabel pada DevTools Console untuk verifikasi
    console.table(mahasiswa);
    console.log("Rata-rata:", rataRata);
});