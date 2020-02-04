using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace Thoulded.Tests
{

 public class TestMoldeled : Modeled<string>
 {

  public override Task<string> Added(string text)
  {
   return Task.FromResult<string>(text);
  }

  public override Task<string> Updated(string text)
  {
   return Task.FromResult<string>(text);
  }

  public override Task<string> Deleted(string text)
  {
   return Task.FromResult<string>(text);
  }

  public override Task<string> Readed(string text)
  {
   return Task.FromResult<string>(text);
  }

  public override Task<IEnumerable<string>> Queried(params string[] texts)
  {
   return Task.FromResult<IEnumerable<string>>(new string[0]);
  }
 
  public override Task Listened(params string[] texts)
  {
   return Task.FromResult<string>(string.Empty);
  }

  public override Task Unlistened(params string[] texts)
  {
   return Task.FromResult<string>(string.Empty);
  }

 }

 public class TestViewed : Viewed<string>
 {

  public override Task<string> Added(string text)
  {
   return Task.FromResult<string>(text);
  }

  public override Task<string> Updated(string text)
  {
   return Task.FromResult<string>(text);
  }

  public override Task<string> Deleted(string text)
  {
   return Task.FromResult<string>(text);
  }

  public override Task<string> Readed(string text)
  {
   return Task.FromResult<string>(text);
  }

  public override Task<IEnumerable<string>> Queried(params string[] texts)
  {
   return Task.FromResult<IEnumerable<string>>(new string[0]);
  }
 
  public override Task Listened(params string[] texts)
  {
   return Task.FromResult<string>(string.Empty);
  }

  public override Task Unlistened(params string[] texts)
  {
   return Task.FromResult<string>(string.Empty);
  }

 }

 public class TestControlled : Controlled<string>
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

 public class ThouldedTest
 {

  private readonly TestControlled Controlled;
  private readonly string text = "test";

  public ThouldedTest()
  {
   this.Controlled = new TestControlled();
  }

  [Fact]
  public void Test()
  {
   Assert.Equal(this.Controlled.Modeled.Added(text).Result, this.Controlled.Viewed.Added(text).Result);
   Assert.Equal(this.Controlled.Modeled.Updated(text).Result, this.Controlled.Viewed.Updated(text).Result);
   Assert.Equal(this.Controlled.Modeled.Deleted(text).Result, this.Controlled.Viewed.Deleted(text).Result);
   Assert.Equal(this.Controlled.Modeled.Readed(text).Result, this.Controlled.Viewed.Readed(text).Result);
  }

 }

}