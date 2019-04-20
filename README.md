# Molded
The source for a library for simple and fast design pattern of model, view and controller in supported modern javascript environments.

## Installation
Install the Molded:
```bash
npm install @walberbeltrame/molded@latest --save
```
## Documentation
Molded applications are built by composing a series of simple components. By convention, components are made up of extends javascript classes.
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
import {Molded, Modeled, Viewed, Controlled, Add, Update, Delete, Get, On, Off}
 from "<path>/dist/molded.min.js";

 /**
  * 
  * The final class represents model methods.
  * 
  */
 class SampleMoldeled extends Modeled {
  constructor() {
   // run constructor in parent class
   super();
   // make on event
   this.On = (text) => {
    // make on promise
    return new On((resolve, reject) => {
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
   // make on event
   this.On = (text) => {
    // make on promise
    return new On((resolve, reject) => {
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
   // make on event in modeled listener
   modeled.On("Hello, World!").then((text) =>{
    // dispatch on event to viewed listener
    viewed.On(text).then((text)=> {
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
Molded supports all browsers that are [ES6-compliant](http://kangax.github.io/compat-table/es6/). 

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/walberbeltrame/molded/releases).

## License
Licensed under the [MIT](http://opensource.org/licenses/MIT) License.