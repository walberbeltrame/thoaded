import XCTest
@testable import Tholded

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

class TestModified : Modified, Tholded {

    typealias T = String

}

class TestModeled : Modeled {

    typealias T = String

    var modified = TestModified()

}

class TestViewed : Viewed {

    typealias T = String

    var modified = TestModified()

}

class TestControlled : Controlled {

    var modeled = TestModeled()
    var viewed = TestViewed()

    init() {
        // dispatch read event in modeled listener
        var text = self.modeled.readed("Hello, World!") as! String
        // dispatch read event to viewed listener
        text = self.viewed.readed(text) as! String
        // print successfully 
        print("Print \(text) successfully.")
    }

}

final class TholdedTests: XCTestCase {

    let controlled = TestControlled()
    let text = "test"

    func test() {
        XCTAssertEqual(self.controlled.modeled.added(text) as! String, self.controlled.viewed.added(text) as! String)
        XCTAssertEqual(self.controlled.modeled.updated(text) as! String, self.controlled.viewed.updated(text) as! String)
        XCTAssertEqual(self.controlled.modeled.deleted(text) as! String, self.controlled.viewed.deleted(text) as! String)
        XCTAssertEqual(self.controlled.modeled.readed(text) as! String, self.controlled.viewed.readed(text) as! String)
    }

    static var allTests = [
        ("test", test)
    ]

}