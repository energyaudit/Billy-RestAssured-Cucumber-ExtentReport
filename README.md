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

## MAVEN_Dependencies
Add the following dependencies to your `pom.xml`
All below dependencies are compatible.

```maven
<dependency>
	<groupId>com.vimalselvam</groupId>
	<artifactId>testng-extentsreport</artifactId>
	<version>1.3.1</version>
</dependency>
<dependency>
	<groupId>com.vimalselvam</groupId>
	<artifactId>cucumber-extentsreport</artifactId>
	<version>3.0.2</version>
</dependency>
<dependency>
	<groupId>info.cukes</groupId>
	<artifactId>cucumber-jvm-deps</artifactId>
	<version>1.0.5</version>
	<scope>provided</scope>
</dependency>
<dependency>
	<groupId>info.cukes</groupId>
	<artifactId>cucumber-junit</artifactId>
	<version>1.2.5</version>
	<scope>test</scope>
</dependency>
<dependency>
	<groupId>info.cukes</groupId>
	<artifactId>cucumber-java</artifactId>
	<version>1.2.5</version>
</dependency>
<dependency>
	<groupId>com.aventstack</groupId>
	<artifactId>extentreports</artifactId>
	<version>3.1.2</version>
</dependency>
```


- create a runner class for cucumber project
- Run with tags. Here i have added `@get,@post,@put,@getfail,@postfail,@putfail` tags.
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


