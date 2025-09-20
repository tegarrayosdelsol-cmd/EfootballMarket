// Daftar akun otomatis
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

// Detail akun otomatis
const akunDetail = document.getElementById("akun-detail");
if (akunDetail) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const akun = akunList.find(a => a.id == id);

  if (akun) {
    akunDetail.innerHTML = `
      <div class="detail-img"><img src="${akun.gambar}" alt="${akun.nama}"></div>
      <div class="detail-info">
        <h2>${akun.nama}</h2>
        <p class="price">${akun.harga}</p>
        <p>${akun.deskripsi}</p>
        <a href="https://www.facebook.com/username" target="_blank" class="btn-green">Hubungi via Facebook</a>
      </div>
    `;
  } else {
    akunDetail.innerHTML = "<p>Akun tidak ditemukan.</p>";
  }
}