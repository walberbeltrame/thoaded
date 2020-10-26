/**
 * 
 * The open source initiative for a library for simple and fast design pattern that extends model,
 * view and controller in supported modern programming languages.
 * 
 * @author Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
 * 
 */

/**
 * 
 * The generic class represents a list events.
 * 
 * @param <T>
 */
abstract class Thoaded<T> {

 private _modified: Thoaded<T>;

 /**
  * 
  * @return The thoaded object to a single dispatcher for all modifying events.
  */
 public get modified() {
  return this._modified;
 }

 /**
  * 
  * @param modified
  */
 public set modified(modified: Thoaded<T>) {
  this._modified = modified;
 }

 /**
   * 
   * @param t T
   * @return The event represents a promise of adding some object.
   */
 public abstract added(t: T): Promise<T>;

 /**
  * 
  * @param t T
  * @return The event represents a promise of updating some object.
  */
 public abstract updated(t: T): Promise<T>;

 /**
 * 
 * @param t T
 * @return The event represents a promise of deleting some object.
 */
 public abstract deleted(t: T): Promise<T>;

 /**
  * 
  * @param t T
  * @return The event represents a promise of reading some object.
  */
 public abstract readed(t: T): Promise<T>;

 /**
 * 
 * @param t T
 * @return The event represents a promise of working some object.
 */
 public abstract worked(t: T): Promise<T>;

 /**
  * 
  * @param t T
  * @return The event represents a promise of handling some object.
  */
 public abstract handled(t: T): Promise<T>;

 /**
  * 
  * @param t T
  * @return The event represents a promise of querying objects.
  */
 public abstract queried(t: T[]): Promise<Iterator<T>>;

 /**
  * 
  * @param t T
  * @return The event represents a promise of listening some object.
  */
 public abstract listened(t: T[]): Promise<T>;

 /**
  * 
  * @param t T
  * @return The event represents a promise of unlistening some object.
  */
 public abstract unlistened(t: T[]): Promise<T>;

}

/**
 * 
 * A modeled class might have a single listener for all model events in source.
 * 
 * @param <T>
 */
abstract class Modeled<T> extends Thoaded<T> { }

/**
 * 
 * A viewed class might have a single listener for all view events in source.
 * 
 * @param <T>
 */
abstract class Viewed<T> extends Thoaded<T> { }

/**
 * 
 * The generic class represents a control of events.
 * 
 * @param <T>
 */
abstract class Controlled<T>
{

 private _modeled: Modeled<T>;
 private _viewed: Viewed<T>;

 /**
  * 
  * @return modeled
  */
 public get modeled(): Modeled<T> {
  return this._modeled;
 }

 public set modeled(modeled: Modeled<T>) {
  this._modeled = modeled;
 }

 /**
  * 
  * @return viewed
  */
 public get viewed(): Viewed<T> {
  return this._viewed;
 }

 public set viewed(viewed: Viewed<T>) {
  this._viewed = viewed;
 }

 /**
  * 
  * Controlled acts on both modeled and viewed.
  * It controls the data flow into model object and updates the view whenever changes.
  * It keeps view and model separate.
  * 
  * @param modeled
  * @param viewed
  */
 constructor(modeled: Modeled<T>, viewed: Viewed<T>) {
  this._modeled = modeled;
  this._viewed = viewed;
 }

}