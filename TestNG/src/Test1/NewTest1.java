package Test1;

import org.testng.ITestResult;
import org.testng.TestListenerAdapter;
import org.testng.annotations.Test;

public class NewTest1 extends TestListenerAdapter {
  
	
	public void onTestSuccess(ITestResult tr)
	{
		System.out.println("Passed");
  }
	public void onTestFailure(ITestResult tr)
	{
		System.out.println("Fail");
		System.out.println("Puvi");
  }
}
