const thoaded = require("thoaded");

/**
 * 
 * An example class to demonstrate modify-based asynchronous events.
 * 
 */
class Exampled extends thoaded.Thoaded {

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
    // make an events list
    let events = ["added", "updated", "deleted", "readed", "worked",
      "handled", "queried", "listened", "unlistened"];
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
class ExampleMoldeled extends Exampled {
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
class ExampleViewed extends Exampled {
  constructor() {
    super();
  }
}

/**
 * 
 * A final controlled class for acts on both modeled and viewed.
 * 
 */
class ExampleControlled extends thoaded.Controlled {

  /**
   * 
   * Extends controlled class and make listener for all events.
   * 
   */
  constructor() {
    // run constructor in parent class
    super(new ExampleMoldeled(), new ExampleViewed());
    // get modeled listener
    let modeled = this.modeled;
    // get viewed listener
    let viewed = this.viewed;
    // make a work event in modeled listener
    modeled.modified.worked = (data) => {
      // dispatch handle event to viewed listener
      return viewed.handled(data);
    };
    // make a work event in viewed listener
    viewed.modified.worked = (data) => {
      // dispatch handle event to modeled listener
      return modeled.handled(data);
    };
  }

}

// make a controlled listener
const exampled = new ExampleControlled();

// dispatch work event to modeled listener
module.exports = exampled.modeled.worked(Exampled.prototype)
  .then((data) => {
    // dispatch work event to viewed listener
    return exampled.viewed.worked(data);
  })
  .then(() => {
    // return exampled
    return exampled;
  });