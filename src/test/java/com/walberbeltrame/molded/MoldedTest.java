package com.walberbeltrame.molded;

import java.util.concurrent.ExecutionException;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class MoldedTest {

 private TestControlled controlled;
 private String text = "test";

 public MoldedTest()
 {
  this.controlled = new TestControlled();
 }

 @Test
 public void added() {
  try {
   assertEquals(this.controlled.getModeled().added(text).get(), this.controlled.getViewed().added(text).get());
  } catch (InterruptedException | ExecutionException exception) {
   exception.printStackTrace();
  }
 }

 @Test
 public void updated() {
  try {
   assertEquals(this.controlled.getModeled().updated(text).get(), this.controlled.getViewed().updated(text).get());
  } catch (InterruptedException | ExecutionException exception) {
   exception.printStackTrace();
  }
 }

 @Test
 public void deleted() {
  try {
   assertEquals(this.controlled.getModeled().deleted(text).get(), this.controlled.getViewed().deleted(text).get());
  } catch (InterruptedException | ExecutionException exception) {
   exception.printStackTrace();
  }
 }

 @Test
 public void readed() {
  try {
   assertEquals(this.controlled.getModeled().readed(text).get(), this.controlled.getViewed().readed(text).get());
  } catch (InterruptedException | ExecutionException exception) {
   exception.printStackTrace();
  }
 }

}