// ==========================
// SCRIPT UTAMA TOKO BUKU ONLINE
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const daftarForm = document.getElementById("daftarForm");

  // ================== LOGIN ==================
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const user = dataPengguna.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("userLogin", JSON.stringify(user));
        alert(`Selamat datang, ${user.nama}!`);
        window.location.href = "dashboard.html";
      } else {
        alert("Email atau password yang Anda masukkan salah!");
      }
    });
  }

  // ================== DAFTAR ==================
  if (daftarForm) {
    daftarForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Pendaftaran berhasil! Silakan login dengan akun Anda.");
      document.getElementById("modalDaftar").style.display = "none";
    });
  }

  // ================== GREETING DI DASHBOARD ==================
  if (document.getElementById("greeting")) {
    const jam = new Date().getHours();
    let sapaan = "Selamat Pagi";
    if (jam >= 12 && jam < 15) sapaan = "Selamat Siang";
    else if (jam >= 15 && jam < 18) sapaan = "Selamat Sore";
    else if (jam >= 18) sapaan = "Selamat Malam";

    const user = JSON.parse(localStorage.getItem("userLogin"));
    document.getElementById("greeting").textContent = `${sapaan}, ${user?.nama || "Pengguna"}!`;
  }

  // ================== LOGOUT ==================
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userLogin");
      alert("Anda telah logout!");
      window.location.href = "login.html";
    });
  }

  // ================== RENDER KATALOG ==================
  const katalogList = document.getElementById("katalogList");
  if (katalogList) {
    renderKatalog();
  }

  // ================== TAMBAH STOK BUKU ==================
  const btnTambahBuku = document.getElementById("btnTambahBuku");
  if (btnTambahBuku) {
    btnTambahBuku.addEventListener("click", () => {
      const kode = prompt("Kode Buku:");
      const nama = prompt("Nama Buku:");
      const stok = prompt("Jumlah Stok:");

      if (kode && nama && stok) {
        dataKatalogBuku.push({
          kodeBarang: kode,
          namaBarang: nama,
          jenisBarang: "Buku Tambahan",
          edisi: "1",
          stok: parseInt(stok),
          harga: "Rp 100.000",
          cover: "img/pengantar_komunikasi.jpg",
        });
        renderKatalog();
      }
    });
  }

  // ================== CHECKOUT ==================
  const bukuSelect = document.getElementById("bukuSelect");
  if (bukuSelect) {
    dataKatalogBuku.forEach((buku) => {
      const option = document.createElement("option");
      option.value = buku.namaBarang;
      option.textContent = `${buku.namaBarang} (${buku.harga})`;
      bukuSelect.appendChild(option);
    });

    const form = document.getElementById("checkoutForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Pesanan berhasil dikirim! Terima kasih telah berbelanja.");
      form.reset();
    });
  }

  // ================== TRACKING ==================
  const btnCari = document.getElementById("btnCariTracking");
  if (btnCari) {
    btnCari.addEventListener("click", () => {
      const input = document.getElementById("inputDO").value.trim();
      const hasil = document.getElementById("hasilTracking");
      const data = dataTracking[input];

      if (data) {
        let perjalananList = data.perjalanan
          .map((p) => `<li>${p.waktu} - ${p.keterangan}</li>`)
          .join("");
        hasil.innerHTML = `
          <h4>Nama Pemesan: ${data.nama}</h4>
          <p>Status: <b>${data.status}</b></p>
          <p>Ekspedisi: ${data.ekspedisi}</p>
          <p>Tanggal Kirim: ${data.tanggalKirim}</p>
          <p>Paket: ${data.paket}</p>
          <p>Total: ${data.total}</p>
          <h4>Riwayat Pengiriman:</h4>
          <ul class="perjalanan">${perjalananList}</ul>
        `;
      } else {
        hasil.innerHTML = `<p style="color:red;">Nomor DO tidak ditemukan!</p>`;
      }
    });
  }

  // ================== MODAL POPUP LOGIN ==================
  const modalLupa = document.getElementById("modalLupa");
  const modalDaftar = document.getElementById("modalDaftar");
  const closeBtns = document.querySelectorAll(".close");

  if (document.getElementById("btnLupaPassword")) {
    document.getElementById("btnLupaPassword").onclick = () =>
      (modalLupa.style.display = "block");
  }

  if (document.getElementById("btnDaftar")) {
    document.getElementById("btnDaftar").onclick = () =>
      (modalDaftar.style.display = "block");
  }

  closeBtns.forEach(
    (btn) =>
      (btn.onclick = () => {
        modalLupa.style.display = "none";
        modalDaftar.style.display = "none";
      })
  );

  window.onclick = (e) => {
    if (e.target == modalLupa || e.target == modalDaftar) {
      modalLupa.style.display = "none";
      modalDaftar.style.display = "none";
    }
  };
});

// ================== FUNGSI RENDER KATALOG ==================
function renderKatalog() {
  const katalogList = document.getElementById("katalogList");
  katalogList.innerHTML = "";
  dataKatalogBuku.forEach((buku) => {
    const div = document.createElement("div");
    div.className = "katalog-item";
    div.innerHTML = `
      <img src="${buku.cover}" alt="${buku.namaBarang}" style="width:150px;height:200px;object-fit:cover;border-radius:10px;">
      <h4>${buku.namaBarang}</h4>
      <p>${buku.jenisBarang}</p>
      <p><b>${buku.harga}</b></p>
      <p>Stok: ${buku.stok}</p>
    `;
    katalogList.appendChild(div);
  });
}
