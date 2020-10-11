//package com.factory.cucumber.stepdefinitions;
//
//import com.fasterxml.jackson.core.JsonGenerationException;
//import com.fasterxml.jackson.databind.JsonMappingException;
//import com.verifone.User_json.Jsontojava;
//import com.verifone.cucumber.common.steps.CommonRestSteps;
//import com.verifone.rest.client.RestClientSimulator;
//import com.verifone.com.factory.cucumber.util.getResponseBodyVeri;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
//import io.restassured.RestAssured;
//import io.restassured.response.Response;
//import io.restassured.specification.RequestSpecification;
//import net.thucydides.core.annotations.Steps;
//import org.json.JSONException;
//import org.testng.Assert;
//
//import java.io.IOException;
//import java.sql.SQLException;
//import java.com.factory.cucumber.util.HashMap;
//
//public class User {
//
//    Response response;
//    RequestSpecification httpRequest;
//    RestClientSimulator restClientSimulator;
//    @Steps
//    CommonRestSteps commonRestSteps;
//
//    @When("disabled certificate")
//    public void disabled_certificate() {
//        RestAssured.useRelaxedHTTPSValidation();
//       //httpRequest.given().relaxedHTTPSValidation().when().get("https://18.208.137.81:5001/v1/users");
//
//        //httpRequest.config(RestAssured.config().sslConfig(new SSLConfig().relaxedHTTPSValidation()));
//        System.out.println("Certificate");
//
//    }
//
//    @When("fetch request body from db")
//    public void fetch_request_body_from_db() throws ClassNotFoundException, SQLException, JsonGenerationException, JsonMappingException, IOException, JSONException {
//        Jsontojava js = new Jsontojava();
//        js.Jsonjava();
//    }
//
//    @Then("get response body")
//    public void getResponseBody() {
//        System.out.println("!-------------------------------------------------------------------------------------------! ");
////        String mod="get";
////        ResponseOptions<Response>  hieararchyGetResponse = this.commonRestSteps.requestMethod("get");
////                System.out.println("The hiararchy reponse is:  "+hieararchyGetResponse);
//        String uri="https://18.208.137.81:5001";
//        HashMap<String, Object> headers = new HashMap<String, Object>();
//        headers.put("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OTVhZGQxYi00NmY2LTQwNWItYWVmMy05NjBkNzkyNzA2OGciLCJjdHMiOiJPQVVUSDJfU1RBVEVMRVNTX0dSQU5UIiwiYXV0aF9sZXZlbCI6MCwiYXVkaXRUcmFja2luZ0lkIjoiNDNlNGNjN2EtMzgzNy00YmUzLTgxMzgtNjJhNjg3NzY1ZDMwLTExNjc2NTU0IiwiaXNzIjoiaHR0cHM6Ly8zLjgzLjEyMS40MjoxMDQ0My9hbS9vYXV0aDIvVmVyaWZvbmVVc2VycyIsInRva2VuTmFtZSI6ImFjY2Vzc190b2tlbiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJhdXRoR3JhbnRJZCI6IlU2VE1iXzhDYWx1QVlnNWhZel9rLTB6UVdDdyIsImF1ZCI6ImVudGl0eUNsaWVudCIsIm5iZiI6MTU5NzQwMTIwNiwiZ3JhbnRfdHlwZSI6ImF1dGhvcml6YXRpb25fY29kZSIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiXSwiYXV0aF90aW1lIjoxNTk3NDAwMDcxLCJyZWFsbSI6Ii9WZXJpZm9uZVVzZXJzIiwiZXhwIjoxNTk3NDA0ODA2LCJpYXQiOjE1OTc0MDEyMDYsImV4cGlyZXNfaW4iOjM2MDAsImp0aSI6ImRWRHk5cG05M0h0VDEwU2FCeWx2TDZ6TzdFVSIsImVudGl0eV9pZCI6IjFhMDE4ZWIwLWM5NTItNDM0MS1hMzY0LTUxOWM4NGE3NDNkZSIsInJvbGVzIjpbIk1FUkNIQU5UX0FETUlOIl0sInVzZXJVaWQiOiI2OTVhZGQxYi00NmY2LTQwNWItYWVmMy05NjBkNzkyNzA2OGcifQ.9maksYbw6tuSVFELaRrX6YZ7oX2gh9ZeCFmRJMk2ylQ");
//        headers.put("Content-Type", "application/json");
//        headers.put("Accept", "*/*");
//        getResponseBodyVeri responseBody= new getResponseBodyVeri();
//        responseBody.getWithHeaders(headers,uri,"/v1/hierarchy/");
////        String uriQA="https://52.54.246.176:5001/";
////        responseBody.getWithHeaders(headers,uriQA,"/v1/hierarchy/");
//    }
//
//    @Given("user get api first")
//    public void userGetApiFirst() {
//        RestAssured.useRelaxedHTTPSValidation();
//        String uri="https://18.208.137.81:5001";
//        HashMap<String, Object> headers = new HashMap<String, Object>();
//        headers.put("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OTVhZGQxYi00NmY2LTQwNWItYWVmMy05NjBkNzkyNzA2OGciLCJjdHMiOiJPQVVUSDJfU1RBVEVMRVNTX0dSQU5UIiwiYXV0aF9sZXZlbCI6MCwiYXVkaXRUcmFja2luZ0lkIjoiNDNlNGNjN2EtMzgzNy00YmUzLTgxMzgtNjJhNjg3NzY1ZDMwLTExNjc2NTU0IiwiaXNzIjoiaHR0cHM6Ly8zLjgzLjEyMS40MjoxMDQ0My9hbS9vYXV0aDIvVmVyaWZvbmVVc2VycyIsInRva2VuTmFtZSI6ImFjY2Vzc190b2tlbiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJhdXRoR3JhbnRJZCI6IlU2VE1iXzhDYWx1QVlnNWhZel9rLTB6UVdDdyIsImF1ZCI6ImVudGl0eUNsaWVudCIsIm5iZiI6MTU5NzQwMTIwNiwiZ3JhbnRfdHlwZSI6ImF1dGhvcml6YXRpb25fY29kZSIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiXSwiYXV0aF90aW1lIjoxNTk3NDAwMDcxLCJyZWFsbSI6Ii9WZXJpZm9uZVVzZXJzIiwiZXhwIjoxNTk3NDA0ODA2LCJpYXQiOjE1OTc0MDEyMDYsImV4cGlyZXNfaW4iOjM2MDAsImp0aSI6ImRWRHk5cG05M0h0VDEwU2FCeWx2TDZ6TzdFVSIsImVudGl0eV9pZCI6IjFhMDE4ZWIwLWM5NTItNDM0MS1hMzY0LTUxOWM4NGE3NDNkZSIsInJvbGVzIjpbIk1FUkNIQU5UX0FETUlOIl0sInVzZXJVaWQiOiI2OTVhZGQxYi00NmY2LTQwNWItYWVmMy05NjBkNzkyNzA2OGcifQ.9maksYbw6tuSVFELaRrX6YZ7oX2gh9ZeCFmRJMk2ylQ");
//        headers.put("Content-Type", "application/json");
//        headers.put("Accept", "*/*");
//        getResponseBodyVeri responseBody= new getResponseBodyVeri();
//        responseBody.getWithHeaders(headers,uri,"/v1/hierarchy/");
////        String uriQA="https://52.54.246.176:5001/";
////        responseBody.getWithHeaders(headers,uriQA,"/v1/hierarchy/");
//    }
//
//
//
//    @Then("get id from response")
//    public void get_id_from_response()
//    {
//        System.out.println("!-------------------------------------------------------------------------------------------! ");
//        System.out.println("!-------------------------------------------------------------------------------------------! ");
//        int userid= commonRestSteps.getResponse().body().path("id");
//        String response1= commonRestSteps.getResponse().body().asString();
//        System.out.println("Rsponsebody"+response1);
//        System.out.println(userid);
//        System.out.println("Userid"+userid);
//        // httpRequest.get("https://18.208.137.81:5001/v1/users/"+userid);
//        Response response=null;
//        RestAssured.given().when().get("https://18.208.137.81:5001/v1/users/"+userid);
//        response= RestAssured.given().when().get("https://18.208.137.81:5001/v1/users/"+userid);
//        System.out.println("Response :" + response.asString());
//        System.out.println("Status Code :" + response.getStatusCode());
//        //System.out.println("Does Reponse contains 'employee_salary'? :" + response.asString().contains("employee_salary"));
//        Assert.assertEquals(200, response.getStatusCode());
//    }
//
//
//
//}