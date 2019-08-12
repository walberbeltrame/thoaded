using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Molded
{

 /// <summary>
 /// The source for a library for simple and fast design pattern of model,
 /// view and controller in supported modern programming languages.
 /// <summary>
 [Author("Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)")]

 public abstract class Molded<T> {

  public Molded<T> Molded { get; set; }

  /// <summary>
  /// The event represents a task of adding some object.
  /// </summary>
  public abstract Task<T> Added(T t);

  /// <summary>
  /// The event represents a task of updating some object.
  /// </summary>
  public abstract Task<T> Updated(T t);
  
  /// <summary>
  /// The event represents a task of deleting some object.
  /// </summary>
  public abstract Task<T> Deleted(T t);

  /// <summary>
  /// The event represents a task of reading some object.
  /// </summary>
  public abstract Future<T> Readed(T t);

  /// <summary>
  /// The event represents a task of querying objects.
  /// </summary>
  public abstract Task<IEnumerable<T>> Queried(T t = null);

  /// <summary>
  /// The event represents a task of listening some object.
  /// </summary>
  public abstract Task Listened(T t = null);

  /// <summary>
  /// The event represents a task of unlistening some object.
  /// </summary>
  public abstract Task Unlistened(T t = null);

 }

 /// <summary>
 /// A modeled class might have a single listener for all model events in source.
 /// </summary>
 public abstract class Modeled<T> : Molded<T> {}

 /// <summary>
 /// A viewed class might have a single listener for all view events in source.
 /// </summary>
 public abstract class Viewed<T> : Molded<T> {}

 // TODO

}