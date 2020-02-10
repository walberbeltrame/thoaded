import 'dart:async';
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

void main() {
  SampleControlled();
}
