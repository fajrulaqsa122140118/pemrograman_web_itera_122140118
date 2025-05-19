from library.base import LibraryItem


class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue):
        super().__init__(item_id, title)
        self.__issue = issue

    def display_info(self):
        status = "Tersedia" if self.available else "Dipinjam"
        print(f"[MAJALAH] ID: {self.id}, Judul: {self.title}, Edisi: {self.__issue}, Status: {status}")

    def borrow(self):
        print(f"❌ Majalah '{self.title}' tidak bisa dipinjam.")

    def return_item(self):
        print(f"ℹ️ Majalah '{self.title}' tidak perlu dikembalikan.")