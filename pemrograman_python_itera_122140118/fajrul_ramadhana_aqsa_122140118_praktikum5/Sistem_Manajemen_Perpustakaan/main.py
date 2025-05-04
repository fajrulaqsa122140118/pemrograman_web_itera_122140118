from library.book import Book
from library.magazine import Magazine
from library.ebook import Ebook
from library.thesis import Thesis
from library.library import Library

def menu():
    library = Library()
    while True:
        print("\n=== MENU PERPUSTAKAAN ===")
        print("1. Tambah Buku")
        print("2. Tambah Majalah")
        print("3. Tambah Ebook")
        print("4. Tambah Thesis")
        print("5. Lihat Koleksi")
        print("6. Cari Item")
        print("7. Pinjam Item")
        print("8. Kembalikan Item")
        print("9. Filter Berdasarkan Tipe")
        print("0. Keluar")

        p = input("Pilih: ")
        if p == "1":
            library.add_item(Book(input("ID: "), input("Judul: "), input("Penulis: ")))
        elif p == "2":
            library.add_item(Magazine(input("ID: "), input("Judul: "), input("Edisi: ")))
        elif p == "3":
            library.add_item(Ebook(input("ID: "), input("Judul: "), input("Penulis: "), input("Ukuran MB: ")))
        elif p == "4":
            id = input("ID Thesis: ")
            title = input("Judul Thesis: ")
            peneliti = input("Peneliti: ")
            terbatas = input("Akses terbatas? (y/n): ").lower() == "y"
            library.add_item(Thesis(id, title, peneliti, terbatas))
        elif p == "5":
            library.show_all_items()
        elif p == "6":
            library.search_item(input("Judul/ID: "))
        elif p == "7":
            library.borrow_item(input("ID: "))
        elif p == "8":
            library.return_item(input("ID: "))
        elif p == "9":
            library.filter_by_type(input("Tipe (Book/Magazine/Ebook/Thesis): "))
        elif p == "0":
            print("👋 Keluar dari sistem.")
            break
        else:
            print("❗ Pilihan salah.")

if __name__ == "__main__":
    menu()
