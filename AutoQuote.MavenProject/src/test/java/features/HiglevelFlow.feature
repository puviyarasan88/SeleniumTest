Feature: To Test autoquote application

Scenario: To test high level function

	Given Open browser and navigate to Login page 
	When Entered valid username, password and clicked on Login button
		| username | password |
		| zameer   | z        |
	Then It should successfully navigate to Applicant Information page
	
	And Enter all the fields in Application Information page and click on Next
		| First Name	|Middle Name	|Last name	| Address Line 1	|	Address Line 2	|City		|State	|Zip Code|
		|Ibrahim		|Mohammed		|Zameer		|2500 Lake cook		|Road				|Riverwood	|Il		|60015	 |  
	Then Verify whether it is successfully navigated to Vehicle Information page
	
	And Enter all the fields in Vehicle Information page and click on Next
		| Vehicle number|Year	|Make	|Model	|Vin number	|
		|1234			|2010	|Honda	|Cara	|113sfsdf	| 
	Then Verify whether it is successfully navigated to Coverage Information page
	
	And Enter all the fields in Coverage Information page and click on Next
		|Coverage Type	|Vehicle Usage	|Miles	|Liablity Coverage	|
		|liability		|personel		|20		|50000				|
	Then Verify whether Quote Information page is displayed with value of Quote
	
	And Close the browser