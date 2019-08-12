using System.Collections.Generic;
using System.Threading.Tasks;

namespace Molded
{

 /// <summary>
 /// The source for a library for simple and fast design pattern of model,
 /// view and controller in supported modern programming languages.
 /// <summary>
 public abstract class Molded<T>
 {

  public Molded<T> Moulded { get; set; }

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
  public abstract Task<T> Readed(T t);

  /// <summary>
  /// The event represents a task of querying objects.
  /// </summary>
  public abstract Task<IEnumerable<T>> Queried(T t);

  /// <summary>
  /// The event represents a task of listening some object.
  /// </summary>
  public abstract Task Listened(T t);

  /// <summary>
  /// The event represents a task of unlistening some object.
  /// </summary>
  public abstract Task Unlistened(T t);

 }

 /// <summary>
 /// A modeled class might have a single listener for all model events in source.
 /// </summary>
 public abstract class Modeled<T> : Molded<T> {}

 /// <summary>
 /// A viewed class might have a single listener for all view events in source.
 /// </summary>
 public abstract class Viewed<T> : Molded<T> {}

 /// <summary>
 /// The generic class represents a control of events.
 /// </summary>
 public abstract class Controlled<T>
 {
  
  public Modeled<T> Modeled { protected set; get; }
  public Viewed<T> Viewed { protected set; get; }

  /// <summary>
  /// Controlled acts on both <paramref name="Modeled"/> and <paramref name="Viewed"/>.
  /// It controls the data flow into model object and updates the view whenever changes.
  /// It keeps view and model separate.
  /// </summary>
  public Controlled(Modeled<T> Modeled, Viewed<T> Viewed)
  {
   this.Modeled = Modeled;
   this.Viewed = Viewed;
  }

 }

}