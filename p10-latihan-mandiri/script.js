// INPUT: daftar belanja (array of object)
const keranjang = [
  { nama: "Buku Tulis", harga: 5000, jumlah: 4 },
  { nama: "Pulpen", harga: 3000, jumlah: 6 },
  { nama: "Tas Ransel", harga: 150000, jumlah: 1 },
  { nama: "Penggaris", harga: 4000, jumlah: 2 }
];

// PROSES 1: subtotal satu barang
function hitungSubtotal(item) {
  return item.harga * item.jumlah;
}

// PROSES 2: total semua barang (loop)
function hitungTotal(daftar) {
  let total = 0;

  for (let i = 0; i < daftar.length; i++) {
    const subtotal = hitungSubtotal(daftar[i]);
    console.log("DEBUG subtotal", daftar[i].nama + ":", subtotal);
    total += subtotal;
  }

  return total;
}

// KEPUTUSAN: persen diskon berdasarkan total (conditional)
function tentukanPersenDiskon(total) {
  if (total >= 500000) {
    return 15;
  } else if (total >= 200000) {
    return 10;
  } else if (total >= 100000) {
    return 5;
  }
  return 0;
}

// OUTPUT
const totalBelanja = hitungTotal(keranjang);
const persenDiskon = tentukanPersenDiskon(totalBelanja);
const nilaiDiskon = totalBelanja * persenDiskon / 100;
const totalBayar = totalBelanja - nilaiDiskon;

const hasil = {
  totalBelanja: totalBelanja,
  persenDiskon: persenDiskon,
  nilaiDiskon: nilaiDiskon,
  totalBayar: totalBayar
};

console.table(keranjang);
console.log("Total belanja:", totalBelanja);
console.log("Diskon (%):", persenDiskon);
console.log("Total bayar:", totalBayar);
console.log("Ringkasan:", hasil);