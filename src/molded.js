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
  * The event class represents an action of adding some object.
  * 
  */
 export class Add extends Event {
 }

 /**
  * 
  * The event class represents an action of updating some object.
  * 
  */
 export class Update extends Event {
 }

 /**
  * 
  * The event class represents an action of deleting some object.
  * 
  */
 export class Delete extends Event {
 }

 /**
  * 
  * The event class represents an action of reading some object.
  * 
  */
 export class Get extends Event {
 }

 /**
  * 
  * The event class represents an action of listening some object.
  * 
  */
 export class On extends Event {
 }

 /**
  * 
  * The event class represents an action of unlistening some object.
  * 
  */
 export class Off extends Event {
 }

 /**
  * 
  * The generic class represents a list events.
  * 
  */
 export class Molded {

  /**
   * @returns {Add} Add
   */
   get Add() {
    return this._Add;
  }

  /**
    * @param {Add} Add
    */
  set Add(Add) {
    this._Add = Add;
  }

  /**
   * @returns {Update} Update
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
   * @returns {Delete} Delete
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
   * @returns {Get} Get
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
   * @returns {On} On
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
   * @returns {Off} Off
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

 }