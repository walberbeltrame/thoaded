/**
 * 
 * Make sample to use persistence classes with IndexedDB and paginating with DOM.
 * 
 * @author Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
 * 
 */

import {Molded, Modeled, Viewed, Controlled} from "../../../src/molded.js";

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
 class IndexedDBMolded extends Molded {

  /**
   * @param {string} name
   * @param {Array} stores
   */
  constructor(name, stores) {
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
      event.target.result.createObjectStore(store.path, {keyPath : store.key});
     });
    };
    // event handler when request is successfully returned
    this._open.onsuccess = (event) => {
     // set local target
     this._target = event.target.result;
    };
    // make add promise
    this.Add = (data) => {return new Add(
     // make add transaction
     this.transaction(this.store(data, "readwrite").add(data, data.id))
    );};
    // make update promise
    this.Update = (data) => {return new Update(
     // make update transaction
     this.transaction(this.store(data, "readwrite").update(data, data.id))
    );};
    // make delete promise
    this.Delete = (data) => {return new Delete(
     // make delete transaction
     this.transaction(this.store(data, "readwrite").delete(data.id))
    );};
    // make get promise
    this.Get = (data) => {return new Get(
     // make get transaction
     this.transaction(this.store(data, "readonly").get(data.id))
    );};
    // make on promise
    this.On = (data, query, count) => {return new On(
     // make on transaction
     this.transaction(this.store(data, "readonly").getAll(query, count))
    );};
   }
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
 class NoteMoldeled extends Modeled {
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
   // TODO
   this.On = new Molded();
   // make global dispacher events
   document.querySelector("#add")
    .addEventListener("click", (event) => {
     this.On.Add(this.note)
      .then((note) => {
       // cleanup of note input
       this.cleanup();
       // make a message of successfully
       this.message("Note added successfully.");
      })}
    );
  }

  /**
   * @returns {Note} note
   */
  get note() {
   return new Note(document.querySelector("#note").value);
  }

  /**
   * @param {Note} note
   */
  set note(note) {
   document.querySelector("#note").value = note.text;
  }
 
  /**
   * 
   * Cleanup of note input.
   * 
   */
  cleanup() {
   // get page element of note input
   let input = document.querySelector("#note");
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
   document.querySelector("#snackbar").MaterialSnackbar.showSnackbar({
    message : message
   });
  }

 }

 /**
  * 
  * A final controlled class for note data manipulation.
  * 
  */
 class NoteControlled extends Controlled {

  /**
   * 
   * Extends controlled class and make listener for all events.
   * 
   */
  constructor() {
   // run constructor in parent class
   super(new NoteMoldeled(), new NoteViewed());
   // TODO
   this.viewed.On.Add = function(note) {
    // TODO
    return new Promise((resolve, reject) => {
     // TODO moldeled
     resolve(note);
    });  
   };
  }

 }

 export const controlled = new NoteControlled();