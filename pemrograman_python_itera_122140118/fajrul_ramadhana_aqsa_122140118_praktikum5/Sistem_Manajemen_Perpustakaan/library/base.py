from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self.__id = item_id
        self.__title = title
        self._available = True

    @abstractmethod
    def display_info(self):
        pass

    @abstractmethod
    def borrow(self):
        pass

    @abstractmethod
    def return_item(self):
        pass

    @property
    def id(self):
        return self.__id

    @property
    def title(self):
        return self.__title

    @property
    def available(self):
        return self._available

    def set_availability(self, status: bool):
        self._available = status