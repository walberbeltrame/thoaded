/**
 * 
 * Make sample to use persistence classes with IndexedDB and paginating with DOM.
 * 
 * @author Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
 * 
 */

import {Tholded, Modeled, Viewed, Controlled} from "../../dist/tholded.min.js";

 /**
  * 
  * The final class as struct of attributes for persisting note.
  * 
  */
 class Note {

  /**
   * @param {string} text 
   */
  constructor(text) {
   this._text = text;
  }

  /**
   * @param {int} id
   */
  set id(id) {
   this._id = id;
  }

  /**
   * @returns {int} id
   */
  get id() {
   return this._id;
  }

  /**
   * @param {string} text
   */
  set text(text) {
   this._text = text;
  }

  /**
   * @returns {string} text
   */
  get text() {
   return this._text;
  }

 }

 /**
  * 
  * Auxiliary class for database build.
  * 
  */
 class IndexedDBStore {

  /**
   * @param {string} path 
   * @param {string} key 
   */
  constructor(path, key) {
   this._path = path;
   this._key = key;
  }

  /**
   * @param {string} path
   */
  set path(path) {
   this._path = path;
  }
 
  /**
   * @returns {string} path
   */
  get path() {
   return this._path;
  }
 
  /**
   * @param {string} key
   */
  set key(key) {
   this._key = key;
  }
 
  /**
   * @returns {string} key
   */
  get key() {
   return this._key;
  }

 }

 /**
  * 
  * The final class represents database methods in IndexedDB for persisting data.
  * 
  */
 class IndexedDBModeled extends Modeled {

  /**
   * @param {string} name
   * @param {Array} stores
   */
  constructor(name, stores) {
   // run constructor in parent class
   super();
   // create promise to sync events when opening IndexedDB
   return new Promise((resolve, reject) => {
    // local database resource
    this._database = window.indexedDB ||
                      window.msIndexedDB ||
                      window.mozIndexedDB ||
                      window.webkitIndexedDB;
    // verify local database
    if (this._database) {
      // initialize local database
      this._open = this._database.open(name);
      // event handler when request is upgrade needed
      this._open.onupgradeneeded = (event) => {
       // for all stores
       stores.forEach(store => {
        // make object store
        event.target.result.createObjectStore(store.path, {keyPath : store.key, autoIncrement : true});
       });
      };
      // event handler when request is successfully returned
      this._open.onsuccess = (event) => {
       // set local target
       this._target = event.target.result;
       // resolve promise
       resolve(this);
      };
      // event handler when request is unsuccessfully returned
      this._open.onerror = (event) => {
       // reject promise
       reject(event);
      };
      // make add promise
      this.added = (data) => {return new Promise((resolve, reject) => {
       // make add transaction
       this.transaction(this.store(data, "readwrite").add(data))
        // request is successfully returned
        .then((event) => {
         // set identifier data
         data.id = event.target.result;
         // resolve promise
         resolve(data); 
        })
        // request is incorrectly returned
        .catch(() => {
         // reject promise
         reject(data);
        })
       });
      };
      // make update promise
      this.updated = (data) => {return new Promise((resolve, reject) => {
       // make update transaction
       this.transaction(this.store(data, "readwrite").put(data))
        // request is successfully returned
        .then(() => {
         // resolve promise
         resolve(data); 
        })
        // request is incorrectly returned
        .catch(() => {
        // reject promise
         reject(data);
        })
       });
      };
      // make delete promise
      this.deleted = (data) => {return new Promise((resolve, reject) => {
       // make delete transaction
       this.transaction(this.store(data, "readwrite").delete(data.id))
        // request is successfully returned
        .then(() => {
         // resolve promise
         resolve(data); 
        })
        // request is incorrectly returned
        .catch(() => {
         // reject promise
         reject(data);
        })
       });
      };
      // make query promise
      this.queried = (data) => {return new Promise((resolve, reject) => {
       // make query transaction
       this.transaction(this.store(data, "readonly").getAll())
        // request is successfully returned
        .then((event) => {
         // make an array of notes
         let notes = [];
         // for all result
         event.target.result.forEach(data => {
          // make a note with data
          let note = new Note(data._text);
          // set note identifier 
          note.id = data._id;
          // push note in array
          notes.push(note);
         });
         // resolve promise
         resolve(notes); 
        })
        // request is incorrectly returned
        .catch(() => {
         // reject promise
         reject();
        })
       });
      };
    } else {
     // reject promise
     reject();
    }
   });
  }

  /**
   * @returns {any} target
   */
  get target() {
   return this._target;
  }
 
  /**
   * @returns {any} open
   */
  get open() {
   return this._open;
  }
 
  /**
   * 
   * Make IndexedDB store.
   * 
   * @param {any} data
   * @param {string} type
   * @returns {any} store 
   */
  store(data, type) {
   // open a transaction store of type
   return this.target.transaction([data.constructor.name], type).objectStore(data.constructor.name);
  }
 
  /**
   * 
   * Make IndexedDB transaction.
   * 
   * @param {any} store
   * @returns {Promise} transaction
   */
  transaction(store) {
   // make promise
   return new Promise((resolve, reject) => {
    // report the success of our transaction
    store.onsuccess = (event) => {
     // resolve promise
     resolve(event);
    };
    // report the error of our transaction
    store.onerror = (event) => {
     // reject promise
     reject(event);
    }
   });
  }
 
 }

 /**
  * 
  * A final modeled class for note data manipulation.
  * 
  */
 class NoteMoldeled extends IndexedDBModeled {

  /**
   * 
   * Extends modeled class and make listener for all events.
   * 
   */
  constructor() {
   // run constructor in parent class
   super("Tholded", [new IndexedDBStore("Note", "_id")]);
  }

 }

 /**
  * 
  * A final viewed class for note data pagination.
  * 
  */
 class NoteViewed extends Viewed {

  /**
   * 
   * Extends viewed class and make listener for all events.
   * 
   */
  constructor() {
   // run constructor in parent class
   super();
   // make add event
   this.added = (note) => {
    // make add promise
    return new Promise((resolve, reject) => {
     // verify node is valid
     if (note && note.id) {
      // get page element of list
      let list = this.list;
      // make template by list
      let template = this.template(list);
      // get item of template
      let item = this.item(template);
      // get text of item
      let text = item.text;
      // get button of item
      let button = item.button;
      // set text content
      text.textContent = note.text;
      // set text identifier
      text.setAttribute("id", note.id);
      // set text data
      text.setAttribute("data-text", note.text);
      // bind an event handler to change text
      text.addEventListener("blur", this.update);
      // set button identifier
      button.setAttribute("id", note.id);
      // bind an event handler to click button
      button.addEventListener("click", this.delete);
      // append the item in list
      list.appendChild(template);
      // resolve promise
      resolve(note);
     } else {
      // reject promise
      reject(note);
     } 
    });
   };
   // make delete event
   this.deleted = (note) => {
    // make delete promise
    return new Promise((resolve, reject) => {
     // verify node is valid
     if (note && note.id) {
      // get page element of list
      let list = this.list;
      // delete element in list
      list.removeChild(this.element(note.id));
      // resolve promise
      resolve(note);
     } else {
      // reject promise
      reject(note);
     } 
    });
   };
   // tholded object to a single dispatcher for all modifying events in page
   this.modified = new Tholded();
   // get page element of button
   let button = this.button;
   // get page element of input
   let input = this.input;
   // bind an event handler to click button
   button.addEventListener("click", this.add);
   // bind an event handler to enter from input text
   input.addEventListener("keyup", (event) => {
    // enter key on the keyboard
    if (event.keyCode === 13) {
     // stops the default action
     event.preventDefault();
     // remove focus from input text
     input.blur();
     // trigger button with a click
     button.click();
    }
   });
  }

  /**
   * @returns {any} input
   */
  get input() {
   // get page element of input
   return document.querySelector("input");
  }

  /**
   * @returns {any} button
   */
  get button() {
   // get page element of button
   return document.querySelector("button");
  }

  /**
   * @returns {any} list
   */
  get list() {
   // get page element of list
   return document.querySelector("ul");
  }

  /**
   * @param {any} element
   * @returns {any} template
   */
  template(element) {
   // clone page element of template
   return element.querySelector("template").content.cloneNode(true);
  }

  /**
   * @param {any} element
   * @returns {any} item
   */
  item(element) {
   return {
    // get page element of text
    text : element.querySelector("div"),
    // get page element of button
    button : element.querySelector("button")
   }
  }

  /**
   * @returns {Note} note
   */
  get note() {
   // make a note of input
   return new Note(this.input.value);
  }

  /**
   * @param {any} element
   * @returns {Note} note
   */
  get(element) {
   // make a note of element
   let note = new Note(element.textContent);
   // set text identifier
   note.id = parseInt(element.id || element.parentNode.id, 10);
   // return note
   return note;
  }

  /**
   * @param {string} id
   * @returns {any} element 
   */
  element(id) {
   // get page element of id
   return document.getElementById(id).parentNode.parentNode;
  }

  /**
   * 
   * Make event to required input
   * 
   */
  required() {
   // get page element of note input
   let input = this.input;
   // set attribute required in input
   input.setAttribute("required", true);
   // force to check if input parent is validity
   input.parentNode.MaterialTextfield.checkValidity();
   // wait three seconds
   setTimeout(()=>{
    // remove attribute required in input
    input.removeAttribute("required");
    // force to check if input parent is validity
    input.parentNode.MaterialTextfield.checkValidity();
   }, 3000);
  }

  /**
   * 
   * Make event handler to load notes
   * 
   * @returns {Promise} load
   */
  get load() {
   // dispatch event to query notes
   return this.modified.queried(Note.prototype).then((notes) => {
    // for all notes
    notes.forEach(note => {
     // dispatch event to add note
     this.added(note).then(() => {});
    });
   });
  }

  /**
   * 
   * Make event handler to add note
   * 
   * @returns {function} add
   */
  get add() {
   // make event to add note
   return (event) => {
    // stops the default action
    event.preventDefault();
    // get note of input
    let note = this.note;
    // verify if note is valid
    if (note.text) {
     // cleanup of note input
     this.cleanup();
     // dispatch event to add note
     this.modified.added(note).then((note) => {
      // add note in list
      this.added(note).then(() => {
       // make a message of successfully
       this.message("Note added successfully.");
      });
     })
     // exception in event to add note
     .catch(() => {
      // make a error of unsuccessfully
      this.error("Note not added.");
     });
    } else {
     // dispatch event to required input
     this.required();
    }
   }
  }

  /**
   * 
   * Make event handler to update note
   * 
   * @returns {function} update
   */
  get update() {
   // make event to update note
   return (event) => {
    // stops the default action
    event.preventDefault();
    // get note of event
    let note = this.get(event.target);
    // verify if note is valid
    if (note.text) {
     // dispatch event to update note
     this.modified.updated(note).then((note) => {
      // update data with text
      event.target.setAttribute("data-text", note.text);
      // make a message of successfully
      this.message("Note updated successfully.");
     })
     // exception in event to update note
     .catch(() => {
      // reset text with data
      event.target.textContent = event.target.getAttribute("data-text");
      // make a error of unsuccessfully
      this.error("Note not updated.");
     });
    } else {
     // reset text with data
     event.target.textContent = event.target.getAttribute("data-text");
     // make a error of unsuccessfully
     this.error("Note is required.");
    }
   }
  }

  /**
   * 
   * Make event handler to delete note
   * 
   * @returns {function} delete
   */
  get delete() {
   // make event to delete note
   return (event) => {
    // stops the default action
    event.preventDefault();
    // get note of event
    let note = this.get(event.target);
    // dispatch event to delete note
    this.modified.deleted(note).then((note) => {
     // delete note in list
     this.deleted(note).then(() => {
      // make a message of successfully
      this.message("Note deleted successfully.");
     });
    })
    // exception in event to delete note
    .catch(() => {
     // make a error of unsuccessfully
     this.error("Note not deleted.");
    });
   }
  }

  /**
   * 
   * Cleanup of note input.
   * 
   */
  cleanup() {
   // get page element of note input
   let input = this.input;
   // reset blank value of note input
   input.value = null;
   // force to check if input parent is dirty
   input.parentNode.MaterialTextfield.checkDirty();
  }

  /**
   * @param {string} message 
   */
  message(message) {
   // make a message in snackbar
   document.querySelector("#message").MaterialSnackbar.showSnackbar({
    message : message
   });
  }

  /**
   * @param {string} message 
   */
  error(message) {
   // make a message in snackbar
   document.querySelector("#error").MaterialSnackbar.showSnackbar({
    message : message
   });
  }

 }

 /**
  * 
  * A final controlled class for acts on both modeled and viewed.
  * 
  */
 class NoteControlled extends Controlled {

  /**
   * 
   * Extends controlled class and make listener for all events.
   * 
   * @param {NoteModeled} noteModeled 
   * @param {NoteViewed} noteViewed 
   */
  constructor(noteModeled, noteViewed) {
   // run constructor in parent class
   super(noteModeled, noteViewed);
   // get modeled listener
   let modeled = this.modeled;
   // get viewed listener
   let viewed = this.viewed;
   // make add event in viewed listener
   viewed.modified.added = (note) => {
    // dispatch add event to modeled listener
    return modeled.added(note);
   };
   // make update event in viewed listener
   viewed.modified.updated = (note) => {
    // dispatch update event to modeled listener
    return modeled.updated(note);
   };
   // make delete event in viewed listener
   viewed.modified.deleted = (note) => {
    // dispatch delete event to modeled listener
    return modeled.deleted(note);
   };
   // make query event in viewed listener
   viewed.modified.queried = (note) => {
    // dispatch query event to modeled listener
    return modeled.queried(note);
   };
  }

 }

 export const controlled = new NoteMoldeled().then(moldeled => {
  // make a controlled listener
  return new NoteControlled(moldeled, new NoteViewed());
 }).then((controlled) => {
  // dispatch load event to viewed listener
  return controlled.viewed.load.then(() => {
   // return controlled
   return controlled;
  });
 });