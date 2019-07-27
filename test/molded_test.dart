import 'package:flutter_test/flutter_test.dart';

import 'package:molded/molded.dart';

class TestMoldeled extends Modeled<String> {

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
 Future<Iterable<String>> queried([String text]) {
  return Future.value([text]);
 }

 @override
 Future<void> listened([String text]) {
  return Future.value();
 }

 @override
 Future<String> unlistened([String text]) {
  return Future.value();
 }

}

class TestViewed extends Viewed<String> {

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
 Future<Iterable<String>> queried([String text]) {
  return Future.value([text]);
 }

 @override
 Future<void> listened([String text]) {
  return Future.value();
 }

 @override
 Future<String> unlistened([String text]) {
  return Future.value();
 }

}

class TestControlled extends Controlled<String> {

 TestControlled() : super(new TestMoldeled(), new TestViewed()) {
  // make on event in modeled listener
  this.modeled.readed("Hello, World!").then((text) {
   // dispatch on event to viewed listener
   this.viewed.readed(text).then((text) {
    // print successfully 
    print("Print " + text + " successfully.");
   });
  });
 }

}

void main() {
 test("Test molded", () async {
  final text = "test";
  final controlled = TestControlled();
  expect(await controlled.modeled.added(text), await controlled.viewed.added(text));
  expect(await controlled.modeled.updated(text), await controlled.viewed.updated(text));
  expect(await controlled.modeled.deleted(text), await controlled.viewed.deleted(text));
  expect(await controlled.modeled.readed(text), await controlled.viewed.readed(text));
  expect(await controlled.modeled.queried(), await controlled.viewed.queried());
 });
}
