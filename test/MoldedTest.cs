using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace Molded.Tests
{

 public class TestMoldeled : Modeled<String>
 {

  public override Task<string> Added(string t)
  {
   return Task.FromResult<string>(t);
  }

  public override Task<string> Updated(string t)
  {
   return Task.FromResult<string>(t);
  }

  public override Task<string> Deleted(string t)
  {
   return Task.FromResult<string>(t);
  }

  public override Task Listened(string t)
  {
   return Task.FromResult<string>(t);
  }

  public override Task<IEnumerable<string>> Queried(string t = null)
  {
   return Task.FromResult<IEnumerable<string>>(new string[0]);
  }

  public override Task<string> Readed(string t = null)
  {
   return Task.FromResult<string>(t);
  }

  public override Task Unlistened(string t = null)
  {
   return Task.FromResult<string>(t);
  }

 }

 public class TestViewed : Viewed<String>
 {

  public override Task<string> Added(string t)
  {
   return Task.FromResult<string>(t);
  }

  public override Task<string> Updated(string t)
  {
   return Task.FromResult<string>(t);
  }

  public override Task<string> Deleted(string t)
  {
   return Task.FromResult<string>(t);
  }

  public override Task Listened(string t)
  {
   return Task.FromResult<string>(t);
  }

  public override Task<IEnumerable<string>> Queried(string t = null)
  {
   return Task.FromResult<IEnumerable<string>>(new string[0]);
  }

  public override Task<string> Readed(string t = null)
  {
   return Task.FromResult<string>(t);
  }

  public override Task Unlistened(string t = null)
  {
   return Task.FromResult<string>(t);
  }

 }

 public class TestControlled : Controlled<String>
 {

  // run constructor in parent class
  public TestControlled() : base(new TestMoldeled(), new TestViewed())
  {
   // dispatch read event in modeled listener
   this.Modeled.Readed("Hello, World!").ContinueWith((modeled) => {
    // dispatch read event to viewed listener
    this.Viewed.Readed(modeled.Result).ContinueWith((viewed) => {
     // print successfully 
     Console.WriteLine("Print " + viewed.Result + " successfully.");
    });
   });

  }

 }

 public class MoldedTest
 {

  private readonly TestControlled Controlled;
  private readonly string text = "test";

  public MoldedTest()
  {
   Controlled = new TestControlled();
  }

  [Fact]
  public void Test()
  {
   Assert.Equal(Controlled.Modeled.Added(text).Result, Controlled.Viewed.Added(text).Result);
   Assert.Equal(Controlled.Modeled.Updated(text).Result, Controlled.Viewed.Updated(text).Result);
   Assert.Equal(Controlled.Modeled.Deleted(text).Result, Controlled.Viewed.Deleted(text).Result);
   Assert.Equal(Controlled.Modeled.Readed(text).Result, Controlled.Viewed.Readed(text).Result);
  }

 }

}