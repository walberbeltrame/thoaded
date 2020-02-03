<p>
 <a href="https://pypi.org/project/tholded/" alt="Tholded on PyPI">
  <img src="https://img.shields.io/pypi/v/tholded.svg" />
 </a>
 <a href="https://travis-ci.org/walberbeltrame/tholded" alt="Tholded on TravisCI">
  <img src="https://travis-ci.org/walberbeltrame/tholded.svg" />
 </a>
</p>

# Tholded
The source for a library for simple and fast design pattern of time hold that extends model, view and controller for asynchronous events in supported modern programming languages.

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
```

## Compatibility
Tholded supports all environments that are [Python 3](https://www.python.org/).

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/walberbeltrame/tholded/releases).

## License
Licensed under the [MIT](http://opensource.org/licenses/MIT) License.