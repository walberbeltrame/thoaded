const thoaded = require("thoaded");
const assert = require("assert");

class TestMoldeled extends thoaded.Modeled {
 constructor() {
  super();
 }
}

class TestViewed extends thoaded.Viewed {
 constructor() {
  super();
 }
}

class TestControlled extends thoaded.Controlled {
 constructor() {
  // run constructor in parent class
  super(new TestMoldeled(), new TestViewed());
  // get modeled listener
  let modeled = this.modeled;
  // get viewed listener
  let viewed = this.viewed;
  // dispatch read event in modeled listener
  modeled.readed("Hello, World!").then((text) =>{
   // dispatch read event to viewed listener
   viewed.readed(text).then((text) => {
    // print successfully 
    console.log("Print " + text + " successfully.");
   });
  });
 }
}

describe("Test thoaded", () => {
 const text = "test";
 const controlled = new TestControlled();
 it("Added", async () => {
  assert.equal(await controlled.modeled.added(text), await controlled.viewed.added(text));
 });
 it("Updated", async () => {
  assert.equal(await controlled.modeled.updated(text), await controlled.viewed.updated(text));
 });
 it("Deleted", async () => {
  assert.equal(await controlled.modeled.deleted(text), await controlled.viewed.deleted(text));
 });
 it("Readed", async () => {
  assert.equal(await controlled.modeled.readed(text), await controlled.viewed.readed(text));
 });
});