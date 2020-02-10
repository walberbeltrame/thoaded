<p>
 <a href="https://www.npmjs.com/package/thoaded" alt="Thoaded on Npm">
  <img src="https://img.shields.io/npm/v/thoaded.svg" />
 </a>
 <a href="https://travis-ci.org/walberbeltrame/thoaded" alt="Thoaded on TravisCI">
  <img src="https://travis-ci.org/walberbeltrame/thoaded.svg" />
 </a>
 <a href="http://opensource.org/licenses/MIT" alt="MIT License">
  <img src="https://img.shields.io/github/license/walberbeltrame/thoaded.svg" />
 </a>
</p>

# Thoaded
Library for simple and fast design pattern that extends model, view and controller for asynchronous events in supported modern programming languages.

## Installation
Install the Thoaded:
```bash
npm i thoaded --save
```

## Documentation
Thoaded applications are created by composing a series of simple inheritances. By convention, this components extends Modify-based Asynchronous Pattern.
```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8" />
  <title>Hello, World!</title>
 </head>
 <body>
  <script type="module" src="index.js"></script>
 </body>
</html>
```
```javascript
import {Modeled, Viewed, Controlled} from "<path>/thoaded.min.js";

 /**
  * 
  * The final class represents model methods.
  * 
  */
 class SampleMoldeled extends Modeled {
  constructor() {
   // run constructor in parent class
   super();
   // make read event
   this.readed = (text) => {
    // make a simple promise
    return new Promise((resolve, reject) => {
     // verify text is valid
     if (text) {
      // resolve promise
      resolve(text);
     } else {
      // reject promise
      reject(text);
     }
    });
   };
  }
 }

 /**
  * 
  * The final class represents view methods.
  * 
  */
 class SampleViewed extends Viewed {
  constructor() {
   // run constructor in parent class
   super();
   // make read event
   this.readed = (text) => {
    // make a simple promise
    return new Promise((resolve, reject) => {
     // verify text is valid
     if (text) {
      // make element from document
      let element = document.createElement("p");
      // set text content of element
      element.textContent = text;
      // append child in document
      document.body.appendChild(element);
      // resolve promise
      resolve(text);
     } else {
      // reject promise
      reject(text);
     }
    });
   };
  }
 }

 /**
  * 
  * The final class represents controller methods.
  * 
  */
 class SampleControlled extends Controlled {
  constructor() {
   // run constructor in parent class
   super(new SampleMoldeled(), new SampleViewed());
   // get modeled listener
   let modeled = this.modeled;
   // get viewed listener
   let viewed = this.viewed;
   // dispatch read event in modeled listener
   modeled.readed("Hello, World!").then((text) =>{
    // dispatch read event to viewed listener
    viewed.readed(text).then((text) => {
     // print successfully 
     console.log("Print " + text + " successfully.");
    });
   });
  }
 }

export const controlled = new SampleControlled();
```

## Samples
The [IndexedDB](http://walberbeltrame.github.io/thoaded/javascript/samples/indexeddb/) is a good place to start learning how to use Thoaded.

## Compatibility
Thoaded supports all environments that are [ECMAScript 6](https://ecma-international.org/). Additionally, also supported by build in [Babel](https://babeljs.io/).