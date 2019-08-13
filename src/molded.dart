/// The source for a library for simple and fast design pattern of model,
/// view and controller in supported modern programming languages.
/// [author] Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
library molded;

import 'dart:async';

/// The generic class represents a list events.
abstract class Molded<T> {

 Molded<T> _modified;

 /// The event represents a future of adding some object.
 Future<T> added(T t);

 /// The event represents a future of updating some object.
 Future<T> updated(T t);

 /// The event represents a future of deleting some object.
 Future<T> deleted(T t);

 /// The event represents a future of reading some object.
 Future<T> readed(T t);

 /// The event represents a future of querying objects.
 Future<Iterable<T>> queried([T t]);

 /// The event represents a future of listening some object.
 Future<void> listened([T t]);

 /// The event represents a future of unlistening some object.
 Future<void> unlistened([T t]);

 /// The molded object to a single dispatcher for all modifying events.
 Molded<T> get modified {
  return this._modified;
 }

 set modified(Molded<T> modified) {
  this._modified = modified;
 }

}

/// A modeled class might have a single listener for all model events in source.
abstract class Modeled<T> extends Molded<T> {}

/// A viewed class might have a single listener for all view events in source.
abstract class Viewed<T> extends Molded<T> {}

/// The generic class represents a control of events.
abstract class Controlled<T> {

 final Modeled<T> _modeled;
 final Viewed<T> _viewed;

 /// Controlled acts on both [modeled] and [viewed].
 /// It controls the data flow into model object and updates the view whenever changes.
 /// It keeps view and model separate.
 Controlled(this._modeled, this._viewed);

 Modeled<T> get modeled {
  return this._modeled;
 }

 Viewed<T> get viewed {
  return this._viewed;
 }

}