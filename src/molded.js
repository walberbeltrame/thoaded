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
  * The event class represents a promise of adding some object.
  * 
  */
 export class Add extends Promise {
 }

 /**
  * 
  * The event class represents a promise of updating some object.
  * 
  */
 export class Update extends Promise {
 }

 /**
  * 
  * The event class represents a promise of deleting some object.
  * 
  */
 export class Delete extends Promise {
 }

 /**
  * 
  * The event class represents a promise of reading some object.
  * 
  */
 export class Get extends Promise {
 }

 /**
  * 
  * The event class represents a promise of listening some object.
  * 
  */
 export class On extends Promise {
 }

 /**
  * 
  * The event class represents a promise of unlistening some object.
  * 
  */
 export class Off extends Promise {
 }

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
   this._Add = (data) => {return Add.resolve(data);};
   this._Update = (data) => {return Update.resolve(data);};
   this._Delete = (data) => {return Delete.resolve(data);};
   this._Get = (data) => {return Get.resolve(data);};
   this._On = (data) => {return On.resolve(data);};
   this._Off = (data) => {return Off.resolve(data);};
  }

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