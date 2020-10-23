const thoaded = require("thoaded");

// make an events list
const events = ["added", "updated", "deleted", "readed", "worked",
  "handled", "queried", "listened", "unlistened"];

/**
 * 
 * An simple class to test modify-based asynchronous events.
 * 
 */
class Tested extends thoaded.Thoaded {

  /**
   * 
   * Extends thoaded class and make listener for all events.
   * 
   */
  constructor() {
    // run constructor in parent class
    super();
    // thoaded object to a single dispatcher for all modifying events
    this.modified = new thoaded.Thoaded();
    // for all events
    for (let index in events) {
      // make a event with promise
      this[events[index]] = this.promise(events[index]);
    }
  }

  /**
   * 
   * Make a generic promise
   * 
   * @param {string} event
   * @returns {function} promise
   */
  promise(event) {
    // make a event for promise
    return (data) => {
      // make an work promise
      return new Promise((resolve, reject) => {
        // verify data is valid
        if (data) {
          // dispatch modify-based asynchronous event to work data
          this.modified[event](data).then((result) => {
            // resolve promise
            resolve(result);
          })
            // exception in event to dispatch data
            .catch(() => {
              // reject promise of unsuccessfully
              reject(data);
            });
        } else {
          // reject promise
          reject(data);
        }
      });
    }
  }

}

/**
 * 
 * A final modeled class for data manipulation.
 * In this example, it’s just a symbolic extension.
 * 
 */
class TestMoldeled extends Tested {
  constructor() {
    super();
  }
}

/**
 * 
 * A final viewed class for data pagination.
 * In this example, it’s just a symbolic extension.
 * 
 */
class TestViewed extends Tested {
  constructor() {
    super();
  }
}

/**
 * 
 * A final controlled class for acts on both modeled and viewed.
 * 
 */
class TestControlled extends thoaded.Controlled {

  /**
   * 
   * Extends controlled class and make listener for all events.
   * 
   */
  constructor() {
    // run constructor in parent class
    super(new TestMoldeled(), new TestViewed());
    // get modeled listener
    let modeled = this.modeled;
    // get viewed listener
    let viewed = this.viewed;
    // for all events
    for (let index in events) {
      // make an event in modeled listener
      modeled.modified[events[index]] = (data) => {
        // dispatch event to viewed listener
        return viewed[events[index]](data);
      };
    }
  }

}

describe("Thoaded", () => {
  // make a generic data
  const data = Tested.prototype;
  // make a controlled listener
  const controlled = new TestControlled();
  // for all events
  for (let index in events) {
    // make an event test
    it(events[index], () => {
      // dispatch event to modeled listener
      return controlled.modeled[events[index]](data);
    });
  }
});