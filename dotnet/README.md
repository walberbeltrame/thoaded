<p>
 <a href="https://www.nuget.org/packages/Thoaded/" alt="Thoaded on Nuget">
  <img src="https://img.shields.io/nuget/v/thoaded.svg" />
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
Use following command to install Thoaded package:
```bash
dotnet add package Thoaded
```

## Documentation
Thoaded applications are created by composing a series of simple inheritances. By convention, this components extends Modify-based Asynchronous Pattern.
```csharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Thoaded.Samples
{

 public class SampleMoldeled : Modeled<string>
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

 public class SampleViewed : Viewed<string>
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

 public class SampleControlled : Controlled<string>
 {

  // run constructor in parent class
  public SampleControlled() : base(new SampleMoldeled(), new SampleViewed())
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

}
```

## Compatibility
Thoaded supports all environments that are [Netstandard 2](https://docs.microsoft.com/en-us/dotnet/standard/net-standard).