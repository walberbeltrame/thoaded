using Xunit;
using Molded;

namespace Molded.Tests
{
 
 public class TestMoldeled : Modeled<String> {
 }

 public class TestViewed : Viewed<String> {
  
 }

 public class TestControlled : Controlled<String> {
  
 }

 public class MoldedTest
 {

  private readonly TestControlled controlled;

  public MoldedTest()
  {
   controlled = new TestControlled();
  }

  [Fact]
  public void Test()
  {
   // Assert.Equal(,);
  }

 }

}
