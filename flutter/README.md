<p>
 <a href="https://pub.dev/packages/thoaded/" alt="Thoaded on Pub">
  <img src="https://img.shields.io/pub/v/thoaded.svg" />
 </a>
 <a href="https://travis-ci.org/walberbeltrame/thoaded" alt="Thoaded on TravisCI">
  <img src="https://travis-ci.org/walberbeltrame/thoaded.svg" />
 </a>
 <a href="http://opensource.org/licenses/MIT" alt="MIT License">
  <img src="https://img.shields.io/github/license/walberbeltrame/thoaded.svg" />
 </a>
</p>

# Thoaded
The source for a library for simple and fast design pattern that extends model, view and controller for asynchronous events in supported modern programming languages.

## Installation
You should ensure that you add the router as a dependency in your project:
```yaml
dependencies:
 thoaded: "^0.0.9"
```

## Documentation
Thoulded applications are created by composing a series of simple inheritances. By convention, this components extends Modify-based Asynchronous Pattern.
```dart
import 'package:thoaded/thoaded.dart';

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
Thoaded supports all environments that are [Flutter](https://flutter.dev/).