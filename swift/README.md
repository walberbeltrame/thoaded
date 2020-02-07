<p>
 <a href="https://github.com/walberbeltrame/thoaded" alt="Thoaded on Github">
  <img src="https://img.shields.io/github/v/tag/walberbeltrame/thoaded.svg" />
 </a>
 <a href="http://opensource.org/licenses/MIT" alt="MIT License">
  <img src="https://img.shields.io/github/license/walberbeltrame/thoaded.svg" />
 </a>
</p>

# Thoaded
The source for a library for simple and fast design pattern that extends model, view and controller for asynchronous events in supported modern programming languages.

## Installation
You should ensure that you add the router as a dependency in your swift project:
```
.package(url: "https://github.com/walberbeltrame/thoaded.git", from: "0.0.9")
```

## Documentation
Thoulded applications are created by composing a series of simple inheritances. By convention, this components extends Modify-based Asynchronous Pattern.
```swift
extension String : Task {}

extension Thoaded where T == String {

    func added(_ text: String) -> Task {
        return text
    }

    func updated(_ text: String) -> Task {
        return text
    }

    func deleted(_ text: String) -> Task {
        return text
    }

    func readed(_ text: String) -> Task {
        return text
    }

    func queried(_ texts: String...) -> [Task] {
        return [String]()
    }

    func listened(_ texts: String...) -> Task {
        return String()
    }

    func unlistened(_ texts: String...) -> Task {
        return String()
    }

}

class SampleModified : Modified, Thoaded {

    typealias T = String

}

class SampleModeled : Modeled {

    typealias T = String

    var modified = SampleModified()

}

class SampleViewed : Viewed {

    typealias T = String

    var modified = SampleModified()

}

class SampleControlled : Controlled {

    var modeled = SampleModeled()
    var viewed = SampleViewed()

    init() {
        // dispatch read event in modeled listener
        var text = self.modeled.readed("Hello, World!") as! String
        // dispatch read event to viewed listener
        text = self.viewed.readed(text) as! String
        // print successfully 
        print("Print \(text) successfully.")
    }

}
```

## Asynchronous
Adapt codes to use with frameworks like [PromiseKit](https://github.com/mxcl/PromiseKit) or [Google Promise](https://github.com/google/promises).

## Linux
Swift builds are not available on the Linux environments for current Travis. [Install Swift](https://swift.org/getting-started/) manually after downloading and run test with command.
```bash
swift test
```

## Compatibility
Thoaded supports all environments that are [Swift 5](https://swift.org).