<p>
 <img src="https://img.shields.io/pypi/v/tholded.svg" />
 <a href="https://travis-ci.org/walberbeltrame/tholded" alt="Tholded on TravisCI">
  <img src="https://travis-ci.org/walberbeltrame/tholded.svg" />
 </a>
 <a href="http://opensource.org/licenses/MIT" alt="MIT License">
  <img src="https://img.shields.io/github/license/walberbeltrame/tholded.svg" />
 </a>
</p>

# Tholded
The source for a library for simple and fast design pattern that extends model, view and controller for asynchronous events in supported modern programming languages.

## Installation
Use pip to install these utilities:
```bash
pip install tholded
```

## Documentation
Tholded applications are built by composing a series of simple components. By convention, components are made up of extends classes.
```python
from tholded import Modeled, Viewed, Controlled
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
Tholded supports all environments that are [Python 3](https://www.python.org/).