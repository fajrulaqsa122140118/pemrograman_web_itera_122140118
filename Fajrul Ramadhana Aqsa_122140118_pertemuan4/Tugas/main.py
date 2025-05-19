# Program Utama yang menggunakan math_operations

# Cara 1: import seluruh modul
import math_operations

# Cara 2: import spesifik fungsi
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

# Menggunakan fungsi dari math_operations

print("\n=== Perhitungan Geometri ===")
print(f"Luas Persegi (sisi 5): {math_operations.luas_persegi(5)}")
print(f"Keliling Persegi (sisi 5): {math_operations.keliling_persegi(5)}")
print(f"Luas Persegi Panjang (p=8, l=3): {math_operations.luas_persegi_panjang(8, 3)}")
print(f"Keliling Persegi Panjang (p=8, l=3): {math_operations.keliling_persegi_panjang(8, 3)}")
print(f"Luas Lingkaran (r=7): {math_operations.luas_lingkaran(7):.2f}")
print(f"Keliling Lingkaran (r=7): {math_operations.keliling_lingkaran(7):.2f}")

print("\n=== Konversi Suhu ===")
temp_c = 30
print(f"{temp_c}°C ke Fahrenheit: {celsius_ke_fahrenheit(temp_c):.2f}°F")
print(f"{temp_c}°C ke Kelvin: {celsius_ke_kelvin(temp_c):.2f}K")
