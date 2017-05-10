package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DefinitionClass {
	
	public static WebDriver drivernew = null;

	@Given("^Open browser and navigate to Login page$")
	public void Open_browser_and_navigate_to_Login_page() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Zameer\\QEA\\cucumber jar\\chromedriver.exe");
		drivernew = new ChromeDriver();
		drivernew.manage().window().maximize();
		drivernew.get("http://localhost:9999/SampleSpringWebProject/login");
		drivernew.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    
	}

	@When("^Entered valid username, password and clicked on Login button$")
	public void Entered_valid_username_password_and_clicked_on_Login_button(DataTable table) throws Throwable {
	java.util.List<java.util.List<String>> data = table.raw();
		
	drivernew.findElement(By.id("username")).sendKeys(data.get(1).get(0));
	drivernew.findElement(By.id("password")).sendKeys(data.get(1).get(1));
	drivernew.findElement(By.id("Submit")).click();
	}

	@Then("^It should successfully navigate to Applicant Information page$")
	public void It_should_successfully_navigate_to_Applicant_Information_page() throws Throwable {
		Assert.assertEquals("Applicant Information", drivernew.findElement(By.xpath("//form[@id='applicant']/table/tbody/tr[1]/td")).getText());
	}

	@Then("^Enter all the fields in Application Information page and click on Next$")
	public void Enter_all_the_fields_in_Application_Information_page_and_click_on_Next(DataTable table) throws Throwable {
		java.util.List<java.util.List<String>> data = table.raw();
		drivernew.findElement(By.id("applfirstname")).sendKeys(data.get(1).get(0));
		drivernew.findElement(By.id("applmidname")).sendKeys(data.get(1).get(1));
		drivernew.findElement(By.id("appllastname")).sendKeys(data.get(1).get(2));
		drivernew.findElement(By.id("appladdrline1")).sendKeys(data.get(1).get(3));
		drivernew.findElement(By.id("appladdrline2")).sendKeys(data.get(1).get(4));
		drivernew.findElement(By.id("city")).sendKeys(data.get(1).get(5));
		drivernew.findElement(By.id("state")).sendKeys(data.get(1).get(6));
		drivernew.findElement(By.id("zipcode")).sendKeys(data.get(1).get(7));
		drivernew.findElement(By.id("Submit")).click();
		
	}

	@Then("^Verify whether it is successfully navigated to Vehicle Information page$")
	public void Verify_whether_it_is_successfully_navigated_to_Vehicle_Information_page() throws Throwable {
		Assert.assertEquals("Vehicle Information", drivernew.findElement(By.xpath("//form[@id='vehicle']/table/tbody/tr[1]/td")).getText());
	}

	@Then("^Enter all the fields in Vehicle Information page and click on Next$")
	public void Enter_all_the_fields_in_Vehicle_Information_page_and_click_on_Next(DataTable table) throws Throwable {
		java.util.List<java.util.List<String>> data = table.raw();
		drivernew.findElement(By.id("vehnum")).sendKeys(data.get(1).get(0));
		drivernew.findElement(By.id("modelyear")).sendKeys(data.get(1).get(1));
		drivernew.findElement(By.id("make")).sendKeys(data.get(1).get(2));
		drivernew.findElement(By.id("model")).sendKeys(data.get(1).get(3));
		drivernew.findElement(By.id("vinnumber")).sendKeys(data.get(1).get(4));
		drivernew.findElement(By.id("Submit")).click();
	}

	@Then("^Verify whether it is successfully navigated to Coverage Information page$")
	public void Verify_whether_it_is_successfully_navigated_to_Coverage_Information_page() throws Throwable {
		Assert.assertEquals("Coverage Information", drivernew.findElement(By.xpath("//form[@id='coverage']/table/tbody/tr[1]/td")).getText());
	}

	@Then("^Enter all the fields in Coverage Information page and click on Next$")
	public void Enter_all_the_fields_in_Coverage_Information_page_and_click_on_Next(DataTable table) throws Throwable {
		java.util.List<java.util.List<String>> data = table.raw();
		Select ddcoverage = new Select(drivernew.findElement(By.id("COVERAGETYPE")));
		Select vusage = new Select(drivernew.findElement(By.id("vehusageType")));
		Select milesday = new Select(drivernew.findElement(By.id("milesday")));
		Select lcoverage = new Select(drivernew.findElement(By.id("liabilitycoverage")));
		ddcoverage.selectByValue(data.get(1).get(0));
		vusage.selectByValue(data.get(1).get(1));
		milesday.selectByValue(data.get(1).get(2));
		lcoverage.selectByValue(data.get(1).get(3));
		drivernew.findElement(By.id("Submit")).click();
	}

	@Then("^Verify whether Quote Information page is displayed with value of Quote$")
	public void Verify_whether_Quote_Information_page_is_displayed_with_value_of_Quote() throws Throwable {
		Assert.assertEquals("Quote Information", drivernew.findElement(By.xpath("//form[@id='coverage']/table/tbody/tr[1]/td")).getText());
		Assert.assertEquals("The value of the quote is :100.0", drivernew.findElement(By.xpath("//form[@id='coverage']/table/tbody/tr[2]/td")).getText());
	}

	@Then("^Close the browser$")
	public void Close_the_browser() throws Throwable {
		drivernew.close();
	}

	@When("^Entered blank username, password and clicked on Login button$")
	public void Entered_blank_username_password_and_clicked_on_Login_button() throws Throwable {
		drivernew.findElement(By.id("Submit")).click();
	}

	@Then("^It should throw error message$")
	public void It_should_throw_error_message() throws Throwable {
		Assert.assertEquals("Please enter UserName.", drivernew.findElement(By.id("username.errors")).getText());
		Assert.assertEquals("Please enter Password.", drivernew.findElement(By.id("password.errors")).getText());
		
	}

	@When("^Entered invalid username or password and clicked on Login button$")
	public void Entered_invalid_username_or_password_and_clicked_on_Login_button(DataTable table) throws Throwable {
		java.util.List<java.util.List<String>> data = table.raw();
		drivernew.findElement(By.id("username")).sendKeys(data.get(1).get(0));
		drivernew.findElement(By.id("password")).sendKeys(data.get(1).get(1));
		drivernew.findElement(By.id("Submit")).click();
	}

	@Then("^It should throw invalid error message$")
	public void It_should_throw_invalid_error_message() throws Throwable {
		Assert.assertEquals("Username or Password is not correct", drivernew.findElement(By.xpath("//form[@id='login']/table/tbody/tr[3]/td[4]")).getText());
		
	}
	
	
	

}
