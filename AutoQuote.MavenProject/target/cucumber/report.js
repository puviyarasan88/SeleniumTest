$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HiglevelFlow.feature");
formatter.feature({
  "line": 1,
  "name": "To Test autoquote application",
  "description": "",
  "id": "to-test-autoquote-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To test high level function",
  "description": "",
  "id": "to-test-autoquote-application;to-test-high-level-function",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open browser and navigate to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Entered valid username, password and clicked on Login button",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "zameer",
        "z"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "It should successfully navigate to Applicant Information page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter all the fields in Application Information page and click on Next",
  "rows": [
    {
      "cells": [
        "First Name",
        "Middle Name",
        "Last name",
        "Address Line 1",
        "Address Line 2",
        "City",
        "State",
        "Zip Code"
      ],
      "line": 12
    },
    {
      "cells": [
        "Ibrahim",
        "Mohammed",
        "Zameer",
        "2500 Lake cook",
        "Road",
        "Riverwood",
        "Il",
        "60015"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify whether it is successfully navigated to Vehicle Information page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter all the fields in Vehicle Information page and click on Next",
  "rows": [
    {
      "cells": [
        "Vehicle number",
        "Year",
        "Make",
        "Model",
        "Vin number"
      ],
      "line": 17
    },
    {
      "cells": [
        "1234",
        "2010",
        "Honda",
        "Cara",
        "113sfsdf"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify whether it is successfully navigated to Coverage Information page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter all the fields in Coverage Information page and click on Next",
  "rows": [
    {
      "cells": [
        "Coverage Type",
        "Vehicle Usage",
        "Miles",
        "Liablity Coverage"
      ],
      "line": 22
    },
    {
      "cells": [
        "liability",
        "personel",
        "20",
        "50000"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify whether Quote Information page is displayed with value of Quote",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DefinitionClass.Open_browser_and_navigate_to_Login_page()"
});
formatter.result({
  "duration": 50507525472,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created exception\nfrom disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d58.0.3029.96)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 32.98 seconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027LTUSLT012056\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:240)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:126)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:139)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:160)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:117)\r\n\tat stepDefinition.DefinitionClass.Open_browser_and_navigate_to_Login_page(DefinitionClass.java:25)\r\n\tat ✽.Given Open browser and navigate to Login page(HiglevelFlow.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DefinitionClass.Entered_valid_username_password_and_clicked_on_Login_button(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.It_should_successfully_navigate_to_Applicant_Information_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.Enter_all_the_fields_in_Application_Information_page_and_click_on_Next(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.Verify_whether_it_is_successfully_navigated_to_Vehicle_Information_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.Enter_all_the_fields_in_Vehicle_Information_page_and_click_on_Next(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.Verify_whether_it_is_successfully_navigated_to_Coverage_Information_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.Enter_all_the_fields_in_Coverage_Information_page_and_click_on_Next(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.Verify_whether_Quote_Information_page_is_displayed_with_value_of_Quote()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Logintest.feature");
formatter.feature({
  "line": 1,
  "name": "To Test Login page of Auto Quote Application",
  "description": "",
  "id": "to-test-login-page-of-auto-quote-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Enter Blank username and password in Login page",
  "description": "",
  "id": "to-test-login-page-of-auto-quote-application;enter-blank-username-and-password-in-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open browser and navigate to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Entered blank username, password and clicked on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "It should throw error message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DefinitionClass.Open_browser_and_navigate_to_Login_page()"
});
formatter.result({
  "duration": 28328974144,
  "status": "passed"
});
formatter.match({
  "location": "DefinitionClass.Entered_blank_username_password_and_clicked_on_Login_button()"
});
formatter.result({
  "duration": 10916536497,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"Submit\"}\n  (Session info: chrome\u003d58.0.3029.96)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.66 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027LTUSLT012056\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\160297\\AppData\\Local\\Temp\\scoped_dir5068_3034}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.96, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: c539c526758692bc13e8734acf5917b1\n*** Element info: {Using\u003did, value\u003dSubmit}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:393)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:214)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat stepDefinition.DefinitionClass.Entered_blank_username_password_and_clicked_on_Login_button(DefinitionClass.java:109)\r\n\tat ✽.When Entered blank username, password and clicked on Login button(Logintest.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DefinitionClass.It_should_throw_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Enter valid username and invalid password in Login page",
  "description": "",
  "id": "to-test-login-page-of-auto-quote-application;enter-valid-username-and-invalid-password-in-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Open browser and navigate to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Entered invalid username or password and clicked on Login button",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14
    },
    {
      "cells": [
        "zameer",
        "zeff"
      ],
      "line": 15
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "It should throw invalid error message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DefinitionClass.Open_browser_and_navigate_to_Login_page()"
});
formatter.result({
  "duration": 9402086352,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d58.0.3029.96)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4.72 seconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027LTUSLT012056\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\160297\\AppData\\Local\\Temp\\scoped_dir1212_13858}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.96, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 42d0d93b519bc7384394440875e51100\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat stepDefinition.DefinitionClass.Open_browser_and_navigate_to_Login_page(DefinitionClass.java:26)\r\n\tat ✽.Given Open browser and navigate to Login page(Logintest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DefinitionClass.Entered_invalid_username_or_password_and_clicked_on_Login_button(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.It_should_throw_invalid_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Enter invalid username and valid password in Login page",
  "description": "",
  "id": "to-test-login-page-of-auto-quote-application;enter-invalid-username-and-valid-password-in-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Open browser and navigate to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Entered invalid username or password and clicked on Login button",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23
    },
    {
      "cells": [
        "zameern",
        "z"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "It should throw invalid error message",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DefinitionClass.Open_browser_and_navigate_to_Login_page()"
});
formatter.result({
  "duration": 13912233823,
  "status": "passed"
});
formatter.match({
  "location": "DefinitionClass.Entered_invalid_username_or_password_and_clicked_on_Login_button(DataTable)"
});
formatter.result({
  "duration": 1778198197,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.DefinitionClass.Entered_invalid_username_or_password_and_clicked_on_Login_button(DefinitionClass.java:122)\r\n\tat ✽.When Entered invalid username or password and clicked on Login button(Logintest.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DefinitionClass.It_should_throw_invalid_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DefinitionClass.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});