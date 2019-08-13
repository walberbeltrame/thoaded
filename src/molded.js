/**
 * 
 * The source for a library for simple and fast design pattern of model,
 * view and controller in supported modern programming languages.
 * 
 * @author Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
 * 
 */

 /**
  * 
  * The generic class represents a list events.
  * 
  */
 export class Molded {

  /**
   * 
   * Make a list events with simple promise resolve. 
   * 
   */
  constructor() {
   this._added = (data) => {return Promise.resolve(data);};
   this._updated = (data) => {return Promise.resolve(data);};
   this._deleted = (data) => {return Promise.resolve(data);};
   this._readed = (data) => {return Promise.resolve(data);};
   this._queried = () => {return Promise.resolve();};
   this._listened = () => {return Promise.resolve();};
   this._unlistened = () => {return Promise.resolve();};
  }

  /**
   * @returns {Promise} The event represents a promise of adding some object.
   */
  get added() {
   return this._added;
  }

  /**
   * @param {Promise} added
   */
  set added(added) {
   this._added = added;
  }

  /**
   * @returns {Promise} The event represents a promise of updating some object.
   */
  get updated() {
   return this._updated;
  }

  /**
   * @param {Promise} updated
   */
  set updated(updated) {
   this._updated = updated;
  }

  /**
   * @returns {Promise} The event represents a promise of deleting some object.
   */
  get deleted() {
   return this._deleted;
  }

  /**
   * @param {Promise} deleted
   */
  set deleted(deleted) {
   this._deleted = deleted;
  }

  /**
   * @returns {Promise} The event represents a promise of reading some object.
   */
  get readed() {
   return this._readed;
  }

  /**
   * @param {Promise} readed
   */
  set readed(readed) {
   this._readed = readed;
  }

  /**
   * @returns {Promise} The event represents a promise of querying objects.
   */
  get queried() {
   return this._queried;
  }

  /**
   * @param {Promise} queried
   */
  set queried(queried) {
   this._queried = queried;
  }

  /**
   * @returns {Promise} The event represents a promise of listening some object.
   */
  get listened() {
   return this._listened;
  }

  /**
   * @param {Promise} listened
   */
  set listened(listened) {
   this._listened = listened;
  }

  /**
   * @returns {Promise} The event represents a promise of unlistening some object.
   */
  get unlistened() {
   return this._unlistened;
  }

  /**
   * @param {Promise} unlistened
   */
  set unlistened(unlistened) {
   this._unlistened = unlistened;
  }

  /**
   * @returns {Molded} The molded object to a single dispatcher for all modifying events.
   */
  get modified() {
   return this._modified;
  }

  /**
   * @param {Molded} modified
   */
  set modified(modified) {
   this._modified = modified;
  }

 }

 /**
  * 
  * A modeled class might have a single listener for all model events in source.
  * 
  */
 export class Modeled extends Molded {
 }

 /**
  * 
  * A viewed class might have a single listener for all view events in source.
  * 
  */
 export class Viewed extends Molded {
 }

 /**
  * 
  * The generic class represents a control of events.
  * 
  */
 export class Controlled {

  /**
   * 
   * Controlled acts on both modeled and viewed.
   * It controls the data flow into model object and updates the view whenever changes.
   * It keeps view and model separate.
   * 
   * @param {Modeled} modeled 
   * @param {Viewed} viewed 
   */
  constructor(modeled, viewed) {
   this._modeled = modeled;
   this._viewed = viewed;
  }

  /**
   * @returns {Modeled} modeled
   */
  get modeled() {
   return this._modeled;
  }

  /**
   * @returns {Viewed} viewed
   */
  get viewed() {
   return this._viewed;
  }

 }