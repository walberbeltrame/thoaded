/**
 * 
 * The source for a library for simple and fast design pattern of model,
 * view and controller in supported modern javascript environments.
 * 
 * @author Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
 * 
 */

 /**
  * 
  * The event class is quite flexible for listener from any notify.
  * 
  */
 export class Event extends Promise {

  /**
   * 
   * Listener of event.
   * 
   * @returns {Promise} listener
   */
  get listener() {
   return this._listener;
  }

  /**
   * 
   * Attach a listener of event.
   * 
   * @param {Promise} listener
   */
  set listener(listener) {
   this._listener = listener;
  }

 }

 /**
  * 
  */
 export class Set extends Event {
 }

 /**
  * 
  */
 export class Update extends Event {
 }

 /**
  * 
  */
 export class Delete extends Event {
 }

 /**
  * 
  */
 export class Get extends Event {
 }

 /**
  * 
  */
 export class On extends Event {
 }

 /**
  * 
  */
 export class Off extends Event {
 }

 /**
  * 
  */
 export class Molded {

  /**
   * 
   */
   get Set() {
    return this._Set;
  }

  /**
    * @param {Set} Set
    */
  set Set(Set) {
    this._Set = Set;
  }

  /**
   * 
   */
  get Update() {
   return this._Update;
  }

  /**
    * @param {Update} Update
    */
  set Update(Update) {
    this._Update = Update;
  }

  /**
   * 
   */
  get Delete() {
   return this._Delete;
  }

  /**
    * @param {Delete} Delete
    */
  set Delete(Delete) {
   this._Delete = Delete;
  }

  /**
   * 
   */
  get Get() {
   return this._Get;
  }

  /**
    * @param {Get} Get
    */
  set Get(Get) {
    this._Get = Get;
  }

  /**
   * 
   */
  get On() {
   return this._On;
  }

  /**
    * @param {On} On
    */
  set On(On) {
    this._On = On;
  }

  /**
   * 
   */
  get Off() {
   return this._Off;
  }

  /**
    * @param {Off} Off
    */
  set Off(Off) {
    this._Off = Off;
  }

 }


 /**
  * 
  * A modeled class might have a single listener for all events in source.
  * 
  */
 export class Modeled extends Molded {
 }

 /**
  * 
  * A viewed class might have a single listener for all events in source.
  * 
  */
 export class Viewed extends Molded {
 }

 /**
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

 }