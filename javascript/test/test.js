const thoaded = require("thoaded");

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
  // make add event
  this.added = this.promise("added");
  // make update event
  this.updated = this.promise("updated");
  // make delete event
  this.deleted = this.promise("deleted");
  // make read event
  this.readed = this.promise("readed");
  // make work event
  this.worked = this.promise("worked");
  // make handle event
  this.handled = this.promise("handled");
  // make query event
  this.queried = this.promise("queried");
  // make listen event
  this.listened = this.promise("listened");
  // make unlisten event
  this.unlistened = this.promise("unlistened");
 }

 /**
   * 
   * Make a generic promise
   * 
   * @param {string} event
   * @returns {function} promise
   */
 promise(event) {
  // make event for promise
  return (data) => {
   // make work promise
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
  // make add event in modeled listener
  modeled.modified.added = (data) => {
   // dispatch add event to viewed listener
   return viewed.added(data);
  };
  // make update event in modeled listener
  modeled.modified.updated = (data) => {
   // dispatch update event to viewed listener
   return viewed.updated(data);
  };
  // make delete event in modeled listener
  modeled.modified.deleted = (data) => {
   // dispatch delete event to viewed listener
   return viewed.deleted(data);
  };
  // make read event in modeled listener
  modeled.modified.readed = (data) => {
   // dispatch read event to viewed listener
   return viewed.readed(data);
  };
  // make work event in modeled listener
  modeled.modified.worked = (data) => {
   // dispatch work event to viewed listener
   return viewed.worked(data);
  };
  // make handle event in modeled listener
  modeled.modified.handled = (data) => {
   // dispatch handle event to viewed listener
   return viewed.handled(data);
  };
  // make query event in modeled listener
  modeled.modified.queried = (data) => {
   // dispatch query event to viewed listener
   return viewed.queried(data);
  };
  // make listen event in modeled listener
  modeled.modified.listened = (data) => {
   // dispatch listen event to viewed listener
   return viewed.listened(data);
  };
  // make unlisten event in modeled listener
  modeled.modified.unlistened = (data) => {
   // dispatch unlisten event to viewed listener
   return viewed.unlistened(data);
  };
 }

}

describe("Thoaded", () => {
 const data = Tested.prototype;
 const controlled = new TestControlled();
 it("Added", () => {
  return controlled.modeled.added(data);
 });
 it("Updated", () => {
  return controlled.modeled.updated(data);
 });
 it("Deleted", () => {
  return controlled.modeled.deleted(data);
 });
 it("Readed", () => {
  return controlled.modeled.readed(data);
 });
 it("Worked", () => {
  return controlled.modeled.worked(data);
 });
 it("Handled", () => {
  return controlled.modeled.handled(data);
 });
 it("Queried", () => {
  return controlled.modeled.queried(data);
 });
 it("Listened", () => {
  return controlled.modeled.listened(data);
 });
 it("Unlistened", () => {
  return controlled.modeled.unlistened(data);
 });
});