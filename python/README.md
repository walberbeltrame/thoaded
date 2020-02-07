<p>
 <img src="https://img.shields.io/pypi/v/thoaded.svg" />
 <a href="https://travis-ci.org/walberbeltrame/thoaded" alt="Thoaded on TravisCI">
  <img src="https://travis-ci.org/walberbeltrame/thoaded.svg" />
 </a>
 <a href="http://opensource.org/licenses/MIT" alt="MIT License">
  <img src="https://img.shields.io/github/license/walberbeltrame/thoaded.svg" />
 </a>
</p>

# Thoaded
The source for a library for simple and fast design pattern that extends model, view and controller for asynchronous events in supported modern programming languages.

## Installation
Use pip to install these utilities:
```bash
pip install thoaded
```

## Documentation
Thoaded applications are created by composing a series of simple inheritances. By convention, this components extends Modify-based Asynchronous Pattern.
```python
from thoaded import Modeled, Viewed, Controlled
import asyncio

class SampleMoldeled(Modeled):

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

class SampleViewed(Viewed):

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

class SampleControlled(Controlled):

    def __init__(self):
        super().__init__(SampleMoldeled(), SampleViewed())
        text = asyncio.run(self.modeled.readed("Hello, World!"))
        text = asyncio.run(self.viewed.readed(text))
        print("Print " + text + " successfully.")
```

## Compatibility
Thoaded supports all environments that are [Python 3](https://www.python.org/).