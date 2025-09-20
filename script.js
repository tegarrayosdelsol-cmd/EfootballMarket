// Tampilkan daftar akun di akun.html
const akunContainer = document.getElementById("akun-list");
if (akunContainer) {
  akunList.forEach(akun => {
    akunContainer.innerHTML += `
      <div class="akun-card">
        <img src="${akun.gambar}" alt="${akun.nama}">
        <h3>${akun.nama}</h3>
        <p class="price">${akun.harga}</p>
        <a href="detail.html?id=${akun.id}" class="btn">Lihat Detail</a>
      </div>
    `;
  });
}

// Tampilkan detail akun di detail.html
const akunDetail = document.getElementById("akun-detail");
if (akunDetail) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const akun = akunList.find(a => a.id == id);

  if (akun) {
    akunDetail.innerHTML = `
      <img src="${akun.gambar}" alt="${akun.nama}">
      <h2>${akun.nama}</h2>
      <p class="price">${akun.harga}</p>
      <p>${akun.deskripsi}</p>
      <a href="https://wa.me/6281234567890?text=Halo%20saya%20minat%20${encodeURIComponent(akun.nama)}" class="btn">Beli via WhatsApp</a>
    `;
  } else {
    akunDetail.innerHTML = "<p>Akun tidak ditemukan.</p>";
  }
}