package com.walberbeltrame.thoaded;

/**
 * 
 * The generic class represents a control of events.
 * 
 * @param <T>
 */
public abstract class Controlled<T>
{
  
 private Modeled<T> modeled;
 private Viewed<T> viewed;

 /**
  * 
  * @return modeled
  */
 public Modeled<T> getModeled() {
  return this.modeled;
 }

 protected void setModeled(Modeled<T> modeled) {
  this.modeled = modeled;
 }

 /**
  * 
  * @return viewed
  */
 public Viewed<T> getViewed() {
  return this.viewed;
 }
 
 protected void setViewed(Viewed<T> viewed) {
  this.viewed = viewed;
 }

 /**
  * 
  * Controlled acts on both <code>modeled</code> and <code>viewed</code>.
  * It controls the data flow into model object and updates the view whenever changes.
  * It keeps view and model separate.
  * 
  * @param modeled
  * @param viewed
  */
 public Controlled(Modeled<T> modeled, Viewed<T> viewed)
 {
  this.modeled = modeled;
  this.viewed = viewed;
 }

}