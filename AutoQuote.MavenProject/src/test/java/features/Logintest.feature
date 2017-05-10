Feature: To Test Login page of Auto Quote Application

Scenario: Enter Blank username and password in Login page

Given Open browser and navigate to Login page 
	When Entered blank username, password and clicked on Login button
	Then It should throw error message
	And Close the browser
	
Scenario: Enter valid username and invalid password in Login page

Given Open browser and navigate to Login page 
	When Entered invalid username or password and clicked on Login button
			| username | password |
			| zameer   | zeff     |
	Then It should throw invalid error message
	And Close the browser
	
Scenario: Enter invalid username and valid password in Login page

Given Open browser and navigate to Login page 
	When Entered invalid username or password and clicked on Login button
			| username | password |
			| zameern   | z        |
	Then It should throw invalid error message
	And Close the browser