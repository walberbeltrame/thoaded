/* The source for a library for simple and fast design pattern of model,
view and controller in supported modern programming languages.
Author: Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com) */

// The generic protocol represents a task events.
protocol Task {}

// The generic protocol represents a single dispatcher for all modifying events.
protocol Modified {}

// The generic protocol represents a list events.
protocol Molded {

    associatedtype T

    // The event represents a task of adding some object.
    func added(_ t: T) -> Task

    // The event represents a task of updating some object.
    func updated(_ t: T) -> Task

    // The event represents a task of deleting some object.
    func deleted(_ t: T) -> Task

    // The event represents a task of reading some object.
    func readed(_ t: T) -> Task

    // The event represents a task of querying objects.
    func queried(_ t: T...) -> [Task]

    // The event represents a task of listening some object.
    func listened(_ t: T...) -> Task

    // The event represents a task of unlistening some object.
    func unlistened(_ t: T...) -> Task

}

// A modeled protocol might have a single listener for all model events in source.
protocol Modeled : Molded {}

// A viewed protocol might have a single listener for all view events in source.
protocol Viewed : Molded {}

// The generic protocol represents a control of events.
protocol Controlled {}