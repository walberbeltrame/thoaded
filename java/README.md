<p>
 <a href="https://search.maven.org/artifact/com.walberbeltrame/tholded" alt="Tholded on Maven Central">
  <img src="https://img.shields.io/maven-central/v/com.walberbeltrame/tholded.svg" />
 </a>
 <a href="https://travis-ci.org/walberbeltrame/tholded" alt="Tholded on TravisCI">
  <img src="https://travis-ci.org/walberbeltrame/tholded.svg" />
 </a>
 <img src="https://img.shields.io/github/license/walberbeltrame/tholded.svg" />
</p>

# Tholded
The source for a library for simple and fast design pattern of time hold that extends model, view and controller for asynchronous events in supported modern programming languages.

## Installation
You should ensure that you add the router as a dependency in your maven project:
```xml
<dependency>
 <groupId>com.walberbeltrame.tholded</groupId>
 <artifactId>tholded</artifactId>
 <version>0.0.8</version>
</dependency>
```

## Documentation
Tholded applications are built by composing a series of simple components. By convention, components are made up of extends classes.

_SampleMoldeled.java_
```java
import com.walberbeltrame.tholded.Modeled;
import java.util.LinkedList;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class SampleMoldeled extends Modeled<String> {

 @Override
 public Future<String> added(String text) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return text;
  });
 }

 @Override
 public Future<String> updated(String text) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return text;
  });
 }

 @Override
 public Future<String> deleted(String text) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return text;
  });
 }

 @Override
 public Future<String> readed(String text) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return text;
  });
 }

 @Override
 public Future<Iterable<String>> queried(String[] texts) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return new LinkedList<String>();
  });
 }

 @Override
 public Future<String> listened(String[] texts) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return new String();
  });
 }

 @Override
 public Future<String> unlistened(String[] texts) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return new String();
  });
 }
 
}
```
_SampleViewed.java_
```java
import com.walberbeltrame.tholded.Viewed;
import java.util.LinkedList;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class SampleViewed extends Viewed<String> {

 @Override
 public Future<String> added(String text) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return text;
  });
 }

 @Override
 public Future<String> updated(String text) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return text;
  });
 }

 @Override
 public Future<String> deleted(String text) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return text;
  });
 }

 @Override
 public Future<String> readed(String text) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return text;
  });
 }

 @Override
 public Future<Iterable<String>> queried(String[] texts) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return new LinkedList<String>();
  });
 }

 @Override
 public Future<String> listened(String[] texts) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return new String();
  });
 }

 @Override
 public Future<String> unlistened(String[] texts) {
  return Executors.newSingleThreadExecutor().submit(() -> {
   return new String();
  });
 }
 
}
```
_SampleControlled.java_
```java
import com.walberbeltrame.tholded.Controlled;
import java.util.concurrent.ExecutionException;

public class SampleControlled extends Controlled<String> {

 public SampleControlled() {
  super(new SampleMoldeled(), new SampleViewed());
  try {
   // dispatch read event in modeled listener
   String text = this.getModeled().readed("Hello, World!").get();
   // dispatch read event to viewed listener
   text = this.getViewed().readed(text).get();
   // print successfully 
   System.out.println("Print " + text + " successfully.");
  } catch (InterruptedException | ExecutionException exception) {
   exception.printStackTrace();
  }
 }
 
}
```

## Compatibility
Tholded supports all environments that are [Java 1.8](https://www.java.com/).