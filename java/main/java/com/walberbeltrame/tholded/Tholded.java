/**
 * 
 * The source for a library for simple and fast design pattern of model,
 * view and controller in supported modern programming languages.
 * 
 * @author Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
 * 
 */
package com.walberbeltrame.tholded;

import java.util.concurrent.Future;

/**
 * 
 * The generic class represents a list events.
 * 
 * @param <T>
 */
public abstract class Tholded<T> {

 private Tholded<T> modified;

 /**
  * 
  * @return The tholded object to a single dispatcher for all modifying events.
  */
 public Tholded<T> getModified() {
  return this.modified;
 }

 /**
  * 
  * @param modified
  */
 public void setModified(Tholded<T> modified) {
  this.modified = modified;
 }

 /**
  * 
  * @param t T
  * @return The event represents a task of adding some object.
  */
 public abstract Future<T> added(T t);

 /**
  * 
  * @param t T
  * @return The event represents a task of updating some object.
  */
 public abstract Future<T> updated(T t);

 /**
  * 
  * @param t T
  * @return The event represents a task of deleting some object.
  */
 public abstract Future<T> deleted(T t);

 /**
  * 
  * @param t T
  * @return The event represents a task of reading some object.
  */
 public abstract Future<T> readed(T t);

 /**
  * 
  * @param t T
  * @return The event represents a task of querying objects.
  */
 public abstract Future<Iterable<T>> queried(T[] t);

 /**
  * 
  * @param t T
  * @return The event represents a task of listening some object.
  */
 public abstract Future<T> listened(T[] t);
 
 /**
  * 
  * @param t T
  * @return The event represents a task of unlistening some object.
  */
 public abstract Future<T> unlistened(T[] t);

}