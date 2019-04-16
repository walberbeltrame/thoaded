/**
 * 
 * The class represents database methods in IndexedDB.
 * 
 * @author Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
 * 
 */

import * as Molded from "../../dist/molded";

 /**
  * 
  * The final class represents database methods in IndexedDB for persisting data.
  * 
  */
 export class IndexedDBMolded extends Molded {

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
   * Create IndexedDB store.
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
   * Create IndexedDB transaction.
   * 
   * @param {any} store
   * @returns {Promise} transaction
   */
  transaction(store) {
   // create promise
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

  /**
   * 
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
      // create object store
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

 }