# Program Penghitung BMI

# Input berat badan (kg) dan tinggi badan (m)
berat = float(input("Masukkan berat badan (kg): "))
tinggi = float(input("Masukkan tinggi badan (m): "))

# Hitung BMI
bmi = berat / (tinggi * tinggi)

# Menentukan kategori BMI
if bmi < 18.5:
    kategori = "Berat badan kurang"
elif bmi < 25:
    kategori = "Berat badan normal"
elif bmi < 30:
    kategori = "Berat badan berlebih"
else:
    kategori = "Obesitas"

# Menampilkan hasil
print(f"\nBMI Anda: {bmi:.2f}")
print(f"Kategori: {kategori}")
