// Function hitung nilai akhir (Tugas 30%, UTS 30%, UAS 40%)
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

// Function tentukan grade
function tentukanGrade(nilaiAkhir) {
    if (nilaiAkhir >= 85) return "A";
    else if (nilaiAkhir >= 75) return "B";
    else if (nilaiAkhir >= 65) return "C";
    else if (nilaiAkhir >= 55) return "D";
    return "E";
}

// Function tentukan status
function tentukanStatus(nilaiAkhir) {
    return nilaiAkhir >= 65 ? "Lulus" : "Belum Lulus";
}

// Function validasi nilai
function validasiNilai(nilai) {
    return !isNaN(nilai) && nilai >= 0 && nilai <= 100;
}

// Menghubungkan event submit form dengan JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const formNilai = document.getElementById("formNilai");
    const hasil = document.getElementById("hasil");

    if (formNilai) {
        formNilai.addEventListener("submit", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            // Ambil input dan konversi ke Number
            const nama = document.getElementById("nama").value;
            const tugas = Number(document.getElementById("tugas").value);
            const uts = Number(document.getElementById("uts").value);
            const uas = Number(document.getElementById("uas").value);

            // Validasi input
            const daftarNilai = [tugas, uts, uas];
            let semuaValid = true;

            for (let i = 0; i < daftarNilai.length; i++) {
                if (!validasiNilai(daftarNilai[i])) {
                    semuaValid = false;
                    break;
                }
            }

            if (!semuaValid) {
                alert("Semua nilai harus berupa angka antara 0 hingga 100!");
                return;
            }

            // Hitung hasil
            const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
            const grade = tentukanGrade(nilaiAkhir);
            const status = tentukanStatus(nilaiAkhir);
            const statusClass = status === "Lulus" ? "Lulus" : "Gagal";

            const mahasiswa = {
                nama: nama,
                tugas: tugas,
                uts: uts,
                uas: uas,
                nilaiAkhir: nilaiAkhir,
                grade: grade,
                status: status
            };

            console.log("Data hasil perhitungan:", mahasiswa);

            // Tampilkan ke panel kanan
            hasil.innerHTML = `
                <h2>Hasil Perhitungan</h2>
                <p class="nama-mhs">Mahasiswa: <strong>${mahasiswa.nama}</strong></p>
                <div class="score-display">${mahasiswa.nilaiAkhir.toFixed(1)}</div>
                <div class="status-badge ${statusClass}">Status: ${mahasiswa.status}</div>
                
                <div class="detail-grid">
                    <div class="detail-card">Grade: <strong>${mahasiswa.grade}</strong></div>
                    <div class="detail-card">Tugas: <strong>${mahasiswa.tugas}</strong></div>
                    <div class="detail-card">UTS: <strong>${mahasiswa.uts}</strong></div>
                    <div class="detail-card">UAS: <strong>${mahasiswa.uas}</strong></div>
                </div>
            `;
        });
    }
});