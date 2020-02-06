from thoaded import Modeled, Viewed, Controlled
import unittest
import asyncio

class TestMoldeled(Modeled):

    async def added(self, value):
        return value

    async def updated(self, value):
        return value

    async def deleted(self, value):
        return value

    async def readed(self, value):
        return value

    async def queried(self, value=None):
        return value

    async def listened(self, value=None):
        return value

    async def unlistened(self, value=None):
        return value

class TestViewed(Viewed):

    async def added(self, value):
        return value

    async def updated(self, value):
        return value

    async def deleted(self, value):
        return value

    async def readed(self, value):
        return value

    async def queried(self, value=None):
        return value

    async def listened(self, value=None):
        return value

    async def unlistened(self, value=None):
        return value

class TestControlled(Controlled):

    def __init__(self):
        super().__init__(TestMoldeled(), TestViewed())
        text = asyncio.run(self.modeled.readed("Hello, World!"))
        text = asyncio.run(self.viewed.readed(text))
        print("Print " + text + " successfully.")

class ThoadedTest(unittest.TestCase):

    def test_thoaded(self):
        text = "test"
        controlled = TestControlled()
        self.assertEqual(asyncio.run(controlled.modeled.added(text)), asyncio.run(controlled.viewed.added(text)))
        self.assertEqual(asyncio.run(controlled.modeled.updated(text)), asyncio.run(controlled.viewed.updated(text)))
        self.assertEqual(asyncio.run(controlled.modeled.deleted(text)), asyncio.run(controlled.viewed.deleted(text)))
        self.assertEqual(asyncio.run(controlled.modeled.readed(text)), asyncio.run(controlled.viewed.readed(text)))

if __name__ == '__main__':
    unittest.main()