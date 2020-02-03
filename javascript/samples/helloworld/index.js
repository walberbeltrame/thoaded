import {Modeled, Viewed, Controlled} from "../../tholded.min.js";

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