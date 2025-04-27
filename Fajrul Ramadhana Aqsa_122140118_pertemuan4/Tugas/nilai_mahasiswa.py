# Program Pengelolaan Data Nilai Mahasiswa

# Data mahasiswa
mahasiswa = [
    {"nama": "Ichsan", "nim": "A001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 82},
    {"nama": "Mychael", "nim": "A002", "nilai_uts": 70, "nilai_uas": 75, "nilai_tugas": 72},
    {"nama": "Kaisar", "nim": "A003", "nilai_uts": 90, "nilai_uas": 88, "nilai_tugas": 91},
    {"nama": "Reynaldi", "nim": "A004", "nilai_uts": 60, "nilai_uas": 65, "nilai_tugas": 62},
    {"nama": "Fajrul", "nim": "A005", "nilai_uts": 45, "nilai_uas": 90, "nilai_tugas": 48}
]

# Menghitung nilai akhir dan grade
for mhs in mahasiswa:
    nilai_akhir = (0.3 * mhs["nilai_uts"]) + (0.4 * mhs["nilai_uas"]) + (0.3 * mhs["nilai_tugas"])
    mhs["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Menampilkan tabel data
print("\nData Nilai Mahasiswa")
print("-" * 75)
print(f"{'Nama':<10} {'NIM':<10} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade':<5}")
print("-" * 75)
for mhs in mahasiswa:
    print(f"{mhs['nama']:<10} {mhs['nim']:<10} {mhs['nilai_uts']:<5} {mhs['nilai_uas']:<5} {mhs['nilai_tugas']:<7} {mhs['nilai_akhir']:<7.2f} {mhs['grade']:<5}")
print("-" * 75)

# Mahasiswa nilai tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print(f"\nMahasiswa dengan nilai tertinggi: {tertinggi['nama']} ({tertinggi['nilai_akhir']:.2f})")
print(f"Mahasiswa dengan nilai terendah: {terendah['nama']} ({terendah['nilai_akhir']:.2f})")
