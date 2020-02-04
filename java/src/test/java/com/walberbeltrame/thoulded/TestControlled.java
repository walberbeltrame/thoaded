package com.walberbeltrame.thoulded;

import java.util.concurrent.ExecutionException;

public class TestControlled extends Controlled<String> {

 public TestControlled() {
  super(new TestMoldeled(), new TestViewed());
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