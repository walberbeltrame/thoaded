<p>
 <a href="https://www.npmjs.com/package/thoaded" alt="Thoaded on Npm">
  <img src="https://img.shields.io/npm/v/thoaded.svg" />
 </a>
 <a href="http://opensource.org/licenses/MIT" alt="MIT License">
  <img src="https://img.shields.io/github/license/walberbeltrame/thoaded.svg" />
 </a>
</p>

# Thoaded
The open source initiative for a library for simple and fast design pattern that extends model, view and controller for asynchronous events in supported modern programming languages.

## Installation
Install the Thoaded:
```bash
npm i thoaded --save
```

## Documentation
Thoaded applications are created by composing a series of simple inheritances. By convention, this components extends Modify-based Asynchronous Pattern.

Any application has typical events, such as adding, updating, deleting, reading, working, handling, querying, listening and unlistening. In this example, they are encapsulated in a class that contains another object of the class itself, which represents a late modification, performed at the end of each corresponding event. This class can be extended by other classes that represent support for models and views.
```javascript
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
```
The controller will be an event map, which can be executed in sequence or in parallel. This facilitates the idealization of asynchronous solutions, such as a task graph with input and output processing.
```javascript
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
```

## Web Browser
Thoaded supports all environments that are [ECMAScript 6](https://ecma-international.org/).
```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8" />
 </head>
 <body>
  <script type="module" src="index.js"></script>
 </body>
</html>
```
```javascript
import {Thoaded, Modeled, Viewed, Controlled} from "<path>/thoaded.min.js";
```
Additionally, also supported by build in [Babel](https://babeljs.io/).
```html
  <script src="<path>/thoaded.babel.min.js"></script>
```

## TypeScript
Thoaded supports TypeScript.