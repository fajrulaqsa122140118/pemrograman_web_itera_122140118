class Library:
    def __init__(self):
        self.__collection = []

    def add_item(self, item):
        self.__collection.append(item)
        print(f"➕ Item '{item.title}' ditambahkan.")

    def show_all_items(self):
        print("\n📚 Koleksi Perpustakaan:")
        if not self.__collection:
            print("🚫 Belum ada koleksi.")
        for item in self.__collection:
            item.display_info()

    def search_item(self, keyword):
        print(f"\n🔍 Hasil pencarian '{keyword}':")
        found = False
        for item in self.__collection:
            if keyword.lower() in item.title.lower() or keyword == item.id:
                item.display_info()
                found = True
        if not found:
            print("❌ Tidak ditemukan.")

    def borrow_item(self, item_id):
        for item in self.__collection:
            if item.id == item_id:
                item.borrow()
                return
        print("❌ ID tidak ditemukan.")

    def return_item(self, item_id):
        for item in self.__collection:
            if item.id == item_id:
                item.return_item()
                return
        print("❌ ID tidak ditemukan.")

    def filter_by_type(self, type_name):
        print(f"\n📦 Item bertipe '{type_name}':")
        found = False
        for item in self.__collection:
            if type(item).__name__.lower() == type_name.lower():
                item.display_info()
                found = True
        if not found:
            print("❌ Tidak ada.")