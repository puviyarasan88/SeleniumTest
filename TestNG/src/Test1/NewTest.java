package Test1;

import org.testng.annotations.Test;

import junit.framework.Assert;

public class NewTest {
  @Test
  public void f() {
	  
	  System.out.println("Test case - 1");
  }
  
  @Test
  public void f1() {
	  
	  System.out.println("Test case - 2");
	  Assert.assertEquals(1, 2);
  }
}
