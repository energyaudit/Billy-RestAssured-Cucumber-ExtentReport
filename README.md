# cucumber-rest-assured-extentreports vanilla project
This project is a plan project with Cucumber framework to automate Rest API's.
  - Automation of restfull api or webservices projects with Rest Assured
  - This also includes the extent reporting.
    
I have used following URL for dummy `POST`, `GET` and `PUT` requests:
  
https://reqres.in/
## Table of Contents (Optional)

- [Preconditions](#Preconditions)
- [MAVEN_Dependencies](#MAVEN_Dependencies)
- [run the test](#run the test)
- [run the test](#Support)

---

## Preconditions
```bash
- Maven 
- Java 8,if you use JDK 14 may got error
- Cucumber plugin
```

## How to run



- run single feature file only ://comment out tags = { "@hooks,@get,@smokes" },use: tags = { "@singlefeature" },
- Run whole suites with tags. Here i have added `@get,@post,@put,@getfail,@postfail,@putfail` tags.
  //comment outtags = { "@singlefeature" }
```java
import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty" }, features = "src//test//java//com//factory//cucumber//features", glue = {
		"com.factory.cucumber.stepdefinitions" }, tags = { "@get,@post,@put,@getfail,@postfail,@putfail" }, plugin = {
				"com.cucumber.listener.ExtentCucumberFormatter:src/test/reports/cucumber_report.html",
				"html:output/html-report" }, monochrome = true)
public class RunCucumberTest {
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File("src//test//java//com//factory//cucumber//configuration//extent-config.xml"));
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", "Windows 10");
		Reporter.setTestRunnerOutput("Sample test runner output message");
	}

}
```
## run the test
```
double click the test in maven
```
```
right click the file RunCucumberTest choose run RunCucumberTest
```


