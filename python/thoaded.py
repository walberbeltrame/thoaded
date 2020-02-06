from abc import ABC, abstractmethod

class Thoaded(ABC):
    """
    The source for a library for simple and fast design pattern of time hold
    that extends model, view and controller for asynchronous events in
    supported modern programming languages.

    Author
    ----------
    Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
    """

    @property
    def modified(self):
        """The thoaded object to a single dispatcher for all modifying events."""
        return self._modified

    @modified.setter
    def modified(self, value):
        self._modified = value

    @abstractmethod
    async def added(self, value):
        """The event represents a future of adding some object."""
        pass

    @abstractmethod
    async def updated(self, value):
        """The event represents a future of updating some object."""
        pass

    @abstractmethod
    async def deleted(self, value):
        """The event represents a future of deleting some object."""
        pass

    @abstractmethod
    async def readed(self, value):
        """The event represents a future of reading some object."""
        pass

    @abstractmethod
    async def queried(self, value=None):
        """The event represents a future of querying objects."""
        pass

    @abstractmethod
    async def listened(self, value=None):
        """The event represents a future of listening some object."""
        pass

    @abstractmethod
    async def unlistened(self, value=None):
        """The event represents a future of unlistening some object."""
        pass

class Modeled(Thoaded):
    """A modeled class might have a single listener for all model events in source."""
    pass

class Viewed(Thoaded):
    """A viewed class might have a single listener for all view events in source."""
    pass

class Controlled(ABC):
    """The generic class represents a control of events."""
    def __init__(self, modeled, viewed):
        """
        Controlled acts on both modeled and viewed.
        It controls the data flow into model object and updates the view whenever changes.
        It keeps view and model separate.
        """
        self.modeled = modeled
        self.viewed = viewed