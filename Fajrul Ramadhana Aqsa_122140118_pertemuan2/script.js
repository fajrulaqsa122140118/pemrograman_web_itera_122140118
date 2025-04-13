// Fungsi untuk menambah jadwal
const addSubject = () => {
  const name = document.getElementById("newSubject").value.trim();
  const day = document.getElementById("newDay").value;
  const time = document.getElementById("newTime").value;
  const link = document.getElementById("newLink").value.trim();

  if (!name || !day || !time || !link) return alert("Isi semua data dulu ya!");

  const newJadwal = { name, day, time, link };

  // Ambil data jadwal yang sudah ada dari localStorage
  const existingData = JSON.parse(localStorage.getItem("kuliahData")) || [];
  existingData.push(newJadwal);

  // Simpan data terbaru kembali ke localStorage
  localStorage.setItem("kuliahData", JSON.stringify(existingData));
  loadData(); // Render ulang data yang sudah diupdate
};

// Fungsi untuk menampilkan jadwal
const renderCards = (data) => {
  const container = document.getElementById("card-container");
  container.innerHTML = data.map((item, i) => `
    <div class="card" id="card-${i}">
      <h3>${item.name}</h3>
      <small>${item.day}, ${item.time}</small>
      <p>Link Google Meet: <a href="${item.link}" target="_blank">${item.link}</a></p>

      <div id="edit-form-${i}" class="edit-form" style="display: none;">
        <input type="text" value="${item.name}" id="edit-name-${i}" />
        <select id="edit-day-${i}">
          <option value="Senin" ${item.day === "Senin" ? "selected" : ""}>Senin</option>
          <option value="Selasa" ${item.day === "Selasa" ? "selected" : ""}>Selasa</option>
          <option value="Rabu" ${item.day === "Rabu" ? "selected" : ""}>Rabu</option>
          <option value="Kamis" ${item.day === "Kamis" ? "selected" : ""}>Kamis</option>
          <option value="Jumat" ${item.day === "Jumat" ? "selected" : ""}>Jumat</option>
          <option value="Sabtu" ${item.day === "Sabtu" ? "selected" : ""}>Sabtu</option>
          <option value="Minggu" ${item.day === "Minggu" ? "selected" : ""}>Minggu</option>
        </select>
        <input type="time" value="${item.time}" id="edit-time-${i}" />
        <input type="url" value="${item.link}" id="edit-link-${i}" placeholder="Link Google Meet" />
        <button class="save" onclick="saveEdit(${i})">Save</button>
        <button class="cancel" onclick="cancelEdit(${i})">Cancel</button>
      </div>

      <div id="view-form-${i}" class="view-form">
        <button onclick="editJadwal(${i})">Edit</button>
        <button onclick="hapusJadwal(${i})" class="delete-button">Hapus</button>
      </div>
    </div>
  `).join('');
};

// Fungsi untuk memuat data dari localStorage dan merender tampilan
const loadData = () => {
  const data = JSON.parse(localStorage.getItem("kuliahData")) || [];
  renderCards(data);
};

// Fungsi untuk menghapus jadwal
const hapusJadwal = (index) => {
  let data = JSON.parse(localStorage.getItem("kuliahData"));
  data.splice(index, 1); // Menghapus item berdasarkan index
  localStorage.setItem("kuliahData", JSON.stringify(data));
  loadData(); // Render ulang data setelah dihapus
};

// Fungsi untuk memulai pengeditan jadwal
const editJadwal = (index) => {
  document.getElementById(`edit-form-${index}`).style.display = "block"; // Menampilkan form edit
  document.getElementById(`view-form-${index}`).style.display = "none"; // Menyembunyikan tombol edit/hapus
};

// Fungsi untuk menyimpan perubahan yang diedit
const saveEdit = (index) => {
  const name = document.getElementById(`edit-name-${index}`).value.trim();
  const day = document.getElementById(`edit-day-${index}`).value;
  const time = document.getElementById(`edit-time-${index}`).value;
  const link = document.getElementById(`edit-link-${index}`).value.trim();

  if (!name || !day || !time || !link) return alert("Isi semua data dulu ya!");

  const data = JSON.parse(localStorage.getItem("kuliahData"));
  data[index] = { name, day, time, link };

  localStorage.setItem("kuliahData", JSON.stringify(data));
  loadData(); // Render ulang data setelah diupdate
};

// Fungsi untuk membatalkan pengeditan
const cancelEdit = (index) => {
  document.getElementById(`edit-form-${index}`).style.display = "none"; // Menyembunyikan form edit
  document.getElementById(`view-form-${index}`).style.display = "block"; // Menampilkan tombol edit/hapus
};

// Memuat data saat halaman pertama kali dibuka
document.addEventListener("DOMContentLoaded", loadData);
