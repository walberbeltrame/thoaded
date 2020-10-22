/**
 * 
 * The open source initiative for a library for simple and fast design pattern that extends model,
 * view and controller in supported modern programming languages.
 * 
 * @author Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
 * 
 */
package com.walberbeltrame.thoaded;

import java.util.concurrent.Future;

/**
 * 
 * The generic class represents a list events.
 * 
 * @param <T>
 */
public abstract class Thoaded<T> {

 private Thoaded<T> modified;

 /**
  * 
  * @return The thoaded object to a single dispatcher for all modifying events.
  */
 public Thoaded<T> getModified() {
  return this.modified;
 }

 /**
  * 
  * @param modified
  */
 public void setModified(Thoaded<T> modified) {
  this.modified = modified;
 }

 /**
  * 
  * @param t T
  * @return The event represents a future of adding some object.
  */
 public abstract Future<T> added(T t);

 /**
  * 
  * @param t T
  * @return The event represents a future of updating some object.
  */
 public abstract Future<T> updated(T t);

 /**
  * 
  * @param t T
  * @return The event represents a future of deleting some object.
  */
 public abstract Future<T> deleted(T t);

 /**
  * 
  * @param t T
  * @return The event represents a future of reading some object.
  */
 public abstract Future<T> readed(T t);

 /**
  * 
  * @param t T
  * @return The event represents a future of working some object.
  */
  public abstract Future<T> worked(T t);

  /**
   * 
   * @param t T
   * @return The event represents a future of handling some object.
   */
  public abstract Future<T> handled(T t);

 /**
  * 
  * @param t T
  * @return The event represents a future of querying objects.
  */
 public abstract Future<Iterable<T>> queried(T[] t);

 /**
  * 
  * @param t T
  * @return The event represents a future of listening some object.
  */
 public abstract Future<T> listened(T[] t);
 
 /**
  * 
  * @param t T
  * @return The event represents a future of unlistening some object.
  */
 public abstract Future<T> unlistened(T[] t);

}