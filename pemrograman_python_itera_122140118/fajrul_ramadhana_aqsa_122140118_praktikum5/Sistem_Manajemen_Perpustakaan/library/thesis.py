from library.base import LibraryItem


class Thesis(LibraryItem):
    def __init__(self, item_id, title, researcher, restricted=True):
        super().__init__(item_id, title)
        self.__researcher = researcher
        self.__restricted = restricted

    def display_info(self):
        status = "Tersedia" if self.available else "Dipinjam"
        akses = "Terbatas" if self.__restricted else "Umum"
        print(f"[THESIS] ID: {self.id}, Judul: {self.title}, Peneliti: {self.__researcher}, Akses: {akses}, Status: {status}")

    def borrow(self):
        if self.__restricted:
            print(f"❌ Thesis '{self.title}' hanya bisa dibaca di tempat.")
        elif self.available:
            self.set_availability(False)
            print(f"✅ Thesis '{self.title}' berhasil dipinjam.")
        else:
            print(f"❌ Thesis '{self.title}' sedang dipinjam.")

    def return_item(self):
        if self.__restricted:
            print(f"ℹ️ Thesis tidak perlu dikembalikan karena hanya untuk dibaca.")
        else:
            self.set_availability(True)
            print(f"🔄 Thesis '{self.title}' berhasil dikembalikan.")