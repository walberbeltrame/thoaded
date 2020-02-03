<p>
 <a href="https://pub.dev/packages/tholded/" alt="Tholded on Pub">
  <img src="https://img.shields.io/pub/v/tholded.svg" />
 </a>
 <a href="https://travis-ci.org/walberbeltrame/tholded" alt="Tholded on TravisCI">
  <img src="https://travis-ci.org/walberbeltrame/tholded.svg" />
 </a>
 <a href="http://opensource.org/licenses/MIT" alt="MIT License">
  <img src="https://img.shields.io/github/license/walberbeltrame/tholded.svg" />
 </a>
</p>

# Tholded
The source for a library for simple and fast design pattern of time hold that extends model, view and controller for asynchronous events in supported modern programming languages.

## Installation
You should ensure that you add the router as a dependency in your project:
```yaml
dependencies:
 tholded: "^0.0.8"
```

## Documentation
Tholded applications are built by composing a series of simple components. By convention, components are made up of extends classes.
```dart
import 'package:tholded/tholded.dart';

class SampleMoldeled extends Modeled<String> {

 @override
 Future<String> added(String text) {
  return Future.value(text);
 }

 @override
 Future<String> updated(String text) {
  return Future.value(text);
 }

 @override
 Future<String> deleted(String text) {
  return Future.value(text);
 }

 @override
 Future<String> readed(String text) {
  return Future.value(text);
 }

 @override
 Future<Iterable<String>> queried([String texts]) {
  return Future.value([texts]);
 }

 @override
 Future<void> listened([String texts]) {
  return Future.value();
 }

 @override
 Future<String> unlistened([String texts]) {
  return Future.value();
 }

}

class SampleViewed extends Viewed<String> {

 @override
 Future<String> added(String text) {
  return Future.value(text);
 }

 @override
 Future<String> updated(String text) {
  return Future.value(text);
 }

 @override
 Future<String> deleted(String text) {
  return Future.value(text);
 }

 @override
 Future<String> readed(String text) {
  return Future.value(text);
 }

 @override
 Future<Iterable<String>> queried([String texts]) {
  return Future.value([texts]);
 }

 @override
 Future<void> listened([String texts]) {
  return Future.value();
 }

 @override
 Future<String> unlistened([String texts]) {
  return Future.value();
 }

}

class SampleControlled extends Controlled<String> {

 // run constructor in parent class
 SampleControlled() : super(new SampleMoldeled(), new SampleViewed()) {
  // dispatch read event in modeled listener
  this.modeled.readed("Hello, World!").then((text) {
   // dispatch read event to viewed listener
   this.viewed.readed(text).then((text) {
    // print successfully 
    print("Print " + text + " successfully.");
   });
  });
 }

}
```

## Compatibility
Tholded supports all environments that are [Flutter](https://flutter.dev/).