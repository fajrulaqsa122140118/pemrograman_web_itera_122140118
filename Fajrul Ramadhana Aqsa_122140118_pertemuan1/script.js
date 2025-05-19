// To-Do List
const domOutput = document.getElementById("todo-output");
const todoInput = document.getElementById("todo-input");

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach(todo => {
    addTodoToDOM(todo.text, todo.completed);
  });
}

function saveTodos() {
  const todos = [];
  domOutput.querySelectorAll('.todo-item').forEach(item => {
    todos.push({
      text: item.querySelector('span').innerText,
      completed: item.classList.contains('line-through')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodoToDOM(text, completed = false) {
  const newItem = document.createElement("div");
  newItem.className = `todo-item flex justify-between items-center p-3 mb-2 bg-blue-100 rounded-lg ${completed ? 'line-through text-slate-400' : ''}`;
  newItem.innerHTML = `
    <span>${text}</span>
    <div class="flex gap-2">
      <button class="complete-btn bg-emerald-400 text-white px-2 py-1 rounded hover:bg-emerald-500">${completed ? 'Batal' : 'Selesai'}</button>
      <button class="delete-btn bg-rose-400 text-white px-2 py-1 rounded hover:bg-rose-500">Hapus</button>
    </div>
  `;
  domOutput.appendChild(newItem);

  newItem.querySelector('.complete-btn').addEventListener('click', function () {
    newItem.classList.toggle('line-through');
    newItem.classList.toggle('text-slate-400');
    this.innerText = newItem.classList.contains('line-through') ? 'Batal' : 'Selesai';
    saveTodos();
  });

  newItem.querySelector('.delete-btn').addEventListener('click', function () {
    domOutput.removeChild(newItem);
    saveTodos();
  });
}

document.getElementById("btn-tambah-item").addEventListener("click", function () {
  const text = todoInput.value.trim();
  if (text !== "") {
    addTodoToDOM(text);
    todoInput.value = "";
    saveTodos();
  }
});

loadTodos();

// KALKULATOR
let operasiTerakhir = null;

const ambilAngka = () => [
  parseFloat(document.getElementById("angka1").value),
  parseFloat(document.getElementById("angka2").value)
];

function hitungKalkulator(a1, a2, operasi) {
  switch (operasi) {
    case "tambah": return a1 + a2;
    case "kurang": return a1 - a2;
    case "kali": return a1 * a2;
    case "bagi": return a2 !== 0 ? a1 / a2 : "Error: Bagi 0";
    case "pangkat": return Math.pow(a1, a2);
    case "akar": return a1 >= 0 ? Math.sqrt(a1) : "Error: Akar negatif";
    case "modulus": return a2 !== 0 ? a1 % a2 : "Error: Mod 0";
    default: return "Operasi tidak valid";
  }
}

function tampilkanHasil(a1, a2, op, simbol) {
  const output = document.getElementById("hasil-kalkulator");
  if (isNaN(a1) || (isNaN(a2) && op !== "akar")) {
    output.innerHTML = `<p class="text-red-500">Input tidak valid</p>`;
    return;
  }
  const hasil = hitungKalkulator(a1, a2, op);
  output.innerHTML = `<p>${typeof hasil === "string" ? hasil : `Hasil: ${a1} ${simbol} ${op === "akar" ? "" : a2} = ${hasil}`}</p>`;
}

// Tombol operasi
document.getElementById("btn-tambah").onclick = () => { operasiTerakhir = "tambah"; };
document.getElementById("btn-kurang").onclick = () => { operasiTerakhir = "kurang"; };
document.getElementById("btn-kali").onclick = () => { operasiTerakhir = "kali"; };
document.getElementById("btn-bagi").onclick = () => { operasiTerakhir = "bagi"; };
document.getElementById("btn-pangkat").onclick = () => { operasiTerakhir = "pangkat"; };
document.getElementById("btn-akar").onclick = () => { operasiTerakhir = "akar"; };
document.getElementById("btn-modulus").onclick = () => { operasiTerakhir = "modulus"; };

// Tombol =
document.getElementById("btn-hitung").onclick = () => {
  if (!operasiTerakhir) {
    document.getElementById("hasil-kalkulator").innerHTML = `<p class="text-red-500">Pilih operasi terlebih dahulu.</p>`;
    return;
  }

  const [a, b] = ambilAngka();
  const simbol = {
    tambah: "+", kurang: "-", kali: "×", bagi: "÷",
    pangkat: "^", akar: "√", modulus: "%"
  }[operasiTerakhir];

  tampilkanHasil(a, b, operasiTerakhir, simbol);
};

// FORM
document.getElementById("form-validasi").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  document.getElementById("error-nama").textContent = "";
  document.getElementById("error-email").textContent = "";
  document.getElementById("error-password").textContent = "";

  if (nama.length <= 3) {
    return document.getElementById("error-nama").textContent = "Nama minimal 4 karakter.";
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValid.test(email)) {
    return document.getElementById("error-email").textContent = "Email tidak valid.";
  }

  if (password.length < 8) {
    return document.getElementById("error-password").textContent = "Password minimal 8 karakter.";
  }

  alert("Form valid! Data siap dikirim.");
});
