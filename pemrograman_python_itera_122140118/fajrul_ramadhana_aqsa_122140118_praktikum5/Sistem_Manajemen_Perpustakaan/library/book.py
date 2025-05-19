from library.base import LibraryItem


class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author

    def display_info(self):
        status = "Tersedia" if self.available else "Dipinjam"
        print(f"[BUKU] ID: {self.id}, Judul: {self.title}, Penulis: {self.__author}, Status: {status}")

    def borrow(self):
        if self.available:
            self.set_availability(False)
            print(f"✅ Buku '{self.title}' berhasil dipinjam.")
        else:
            print(f"❌ Buku '{self.title}' sedang dipinjam.")

    def return_item(self):
        self.set_availability(True)
        print(f"🔄 Buku '{self.title}' berhasil dikembalikan.")
