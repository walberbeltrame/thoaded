# Molded
The source for a library for simple and fast design pattern of model, view and controller in supported modern programming languages.

## Installation
### Javascript
Install the Molded:
```bash
npm i @walberbeltrame/molded --save
```
### Dart
You should ensure that you add the router as a dependency in your dart project:
```yaml
dependencies:
 molded: "^0.0.7"
```

## Documentation
Molded applications are built by composing a series of simple components. By convention, components are made up of extends classes.
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
import {Modeled, Viewed, Controlled} from "../../dist/molded.min.js";

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
The [IndexedDB](http://walberbeltrame.github.io/molded/samples/indexeddb/) is a good place to start learning how to use Molded.

## Compatibility
### Javascript
Molded supports all browsers that are [ES6-compliant](http://kangax.github.io/compat-table/es6/). 
### Dart
Molded supports all environments that are [Dart 2](https://dart.dev/dart-2).

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/walberbeltrame/molded/releases).

## License
Licensed under the [MIT](http://opensource.org/licenses/MIT) License.