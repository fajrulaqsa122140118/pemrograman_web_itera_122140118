from library.base import LibraryItem
from .book import Book # Assuming Book is in the same directory as this file

class Ebook(Book):
    def __init__(self, item_id, title, author, file_size):
        super().__init__(item_id, title, author)
        self.__file_size = file_size

    def display_info(self):
        status = "Tersedia" if self.available else "Dipinjam"
        print(f"[EBOOK] ID: {self.id}, Judul: {self.title}, Ukuran: {self.__file_size}MB, Status: {status}")

    def borrow(self):
        print(f"📅 Ebook '{self.title}' diunduh.")

    def return_item(self):
        print(f"✅ Ebook '{self.title}' tidak perlu dikembalikan.")
