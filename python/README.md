<p>
 <img src="https://img.shields.io/pypi/v/thoulded.svg" />
 <a href="https://travis-ci.org/walberbeltrame/thoulded" alt="Thoulded on TravisCI">
  <img src="https://travis-ci.org/walberbeltrame/thoulded.svg" />
 </a>
 <a href="http://opensource.org/licenses/MIT" alt="MIT License">
  <img src="https://img.shields.io/github/license/walberbeltrame/thoulded.svg" />
 </a>
</p>

# Thoulded
The source for a library for simple and fast design pattern that extends model, view and controller for asynchronous events in supported modern programming languages.

## Installation
Use pip to install these utilities:
```bash
pip install thoulded
```

## Documentation
Thoulded applications are built by composing a series of simple components. By convention, components are made up of extends classes.
```python
from thoulded import Modeled, Viewed, Controlled
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
Thoulded supports all environments that are [Python 3](https://www.python.org/).