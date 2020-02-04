package com.walberbeltrame.thoulded;

import java.util.LinkedList;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class TestViewed extends Viewed<String> {

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