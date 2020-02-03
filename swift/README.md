<p>
 <a href="https://github.com/walberbeltrame/tholded" alt="Tholded on Github">
  <img src="https://img.shields.io/github/v/tag/walberbeltrame/tholded.svg" />
 </a>
 <a href="https://travis-ci.org/walberbeltrame/tholded" alt="Tholded on TravisCI">
  <img src="https://travis-ci.org/walberbeltrame/tholded.svg" />
 </a>
 <img src="https://img.shields.io/github/license/walberbeltrame/tholded.svg" />
</p>

# Tholded
The source for a library for simple and fast design pattern of time hold that extends model, view and controller for asynchronous events in supported modern programming languages.

## Installation
You should ensure that you add the router as a dependency in your swift project:
```
.package(url: "https://github.com/walberbeltrame/tholded.git", from: "0.0.8")
```

## Documentation
Tholded applications are built by composing a series of simple components. By convention, components are made up of extends classes.
```swift
extension String : Task {}

extension Tholded where T == String {

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

class SampleModified : Modified, Tholded {

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

## Compatibility
Tholded supports all environments that are [Swift 5](https://swift.org).