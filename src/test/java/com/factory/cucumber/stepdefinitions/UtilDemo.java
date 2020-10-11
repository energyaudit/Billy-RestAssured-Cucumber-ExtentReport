package com.factory.cucumber.stepdefinitions;

import com.factory.cucumber.util.PostByBodyVeri;
import com.factory.cucumber.util.RestAssuredPatchVeri;
import com.factory.cucumber.util.getResponseBodyVeri;
import com.factory.cucumber.util.postResponseBodyVeri;
import cucumber.api.java.en.And;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.json.simple.JSONObject;
import org.junit.Test;

import java.util.*;

import static com.factory.cucumber.util.hashMap2JsonFileVeri.hashMap2JsonFileMethod;


public class UtilDemo {

    @Test
    public void testPOSTResponseBody() {
        String puri = "http://localhost:8080/posts/";
        Random random = new Random();
        Integer inputId = random.nextInt();
        String uuid = UUID.randomUUID().toString().substring(0, 3);
        JSONObject map = new JSONObject();
        map.put("userId", inputId);
        map.put("id", inputId);
        map.put("title", "this is projectdebug.com");
        map.put("body", "this is REST-Assured Tutorial" + uuid);
        PostByBodyVeri rppt = new PostByBodyVeri();
        String rePath = rppt.inputpar(puri, map);
        System.out.println(rePath);
    }
    @Test
    public void userGetApiFirst() {
        RestAssured.useRelaxedHTTPSValidation();
        String uri="https://18.208.137.81:5001";
        HashMap<String, Object> headers = new HashMap<String, Object>();
        headers.put("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OTVhZGQxYi00NmY2LTQwNWItYWVmMy05NjBkNzkyNzA2OGciLCJjdHMiOiJPQVVUSDJfU1RBVEVMRVNTX0dSQU5UIiwiYXV0aF9sZXZlbCI6MCwiYXVkaXRUcmFja2luZ0lkIjoiNDNlNGNjN2EtMzgzNy00YmUzLTgxMzgtNjJhNjg3NzY1ZDMwLTExNjc2NTU0IiwiaXNzIjoiaHR0cHM6Ly8zLjgzLjEyMS40MjoxMDQ0My9hbS9vYXV0aDIvVmVyaWZvbmVVc2VycyIsInRva2VuTmFtZSI6ImFjY2Vzc190b2tlbiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJhdXRoR3JhbnRJZCI6IlU2VE1iXzhDYWx1QVlnNWhZel9rLTB6UVdDdyIsImF1ZCI6ImVudGl0eUNsaWVudCIsIm5iZiI6MTU5NzQwMTIwNiwiZ3JhbnRfdHlwZSI6ImF1dGhvcml6YXRpb25fY29kZSIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiXSwiYXV0aF90aW1lIjoxNTk3NDAwMDcxLCJyZWFsbSI6Ii9WZXJpZm9uZVVzZXJzIiwiZXhwIjoxNTk3NDA0ODA2LCJpYXQiOjE1OTc0MDEyMDYsImV4cGlyZXNfaW4iOjM2MDAsImp0aSI6ImRWRHk5cG05M0h0VDEwU2FCeWx2TDZ6TzdFVSIsImVudGl0eV9pZCI6IjFhMDE4ZWIwLWM5NTItNDM0MS1hMzY0LTUxOWM4NGE3NDNkZSIsInJvbGVzIjpbIk1FUkNIQU5UX0FETUlOIl0sInVzZXJVaWQiOiI2OTVhZGQxYi00NmY2LTQwNWItYWVmMy05NjBkNzkyNzA2OGcifQ.9maksYbw6tuSVFELaRrX6YZ7oX2gh9ZeCFmRJMk2ylQ");
        headers.put("Content-Type", "application/json");
        headers.put("Accept", "*/*");
        getResponseBodyVeri responseBody= new getResponseBodyVeri();
        responseBody.getWithHeaders(headers,uri,"/v1/hierarchy/");
        String uriQA="https://52.54.246.176:5001/";
        responseBody.getWithHeaders(headers,uriQA,"/v1/hierarchy/");
    }
    @Test
    public void testPOSTResponseBodyLocal() {
        String puri = "http://localhost:8080";
        Random random = new Random();
        Integer inputId = random.nextInt(10000000);
//        {
//            "name":"tammy",
//                "salary":"5000",
//                "age":"20"
//        }
        String requestBody = "{\n" +
                "  \"name\": \"tammy\",\n" +
                "  \"salary\": \"5000\",\n" +
                "  \"id\":"+inputId+",\n" +
                "  \"age\": \"20\"\n" +
                "}";
        postResponseBodyVeri rppt = new postResponseBodyVeri();
        Response rePath = rppt.postWithPaylaod(requestBody, puri, "/posts/");
        System.out.println(rePath.getBody().asString());
    }

    @And("user post method one")
    public void user_post_method_one() {
        String puri = "http://localhost:8080/posts/";
        Random random = new Random();
        Integer inputId = random.nextInt();
        String uuid = UUID.randomUUID().toString().substring(0, 3);
        JSONObject map = new JSONObject();
        map.put("userId", inputId);
        map.put("id", inputId);
        map.put("title", "this is projectdebug.com");
        map.put("body", "this is REST-Assured Tutorial" + uuid);
        PostByBodyVeri rppt = new PostByBodyVeri();
        String rePath = rppt.inputpar(puri, map);
        System.out.println(rePath);
    }

    @And("user post method two")
    public void userPostMethodTwo() {
        String puri = "http://localhost:8080/posts/";
        Random random = new Random();
        Integer inputId = random.nextInt();
        String uuid = UUID.randomUUID().toString().substring(0, 3);
        JSONObject map = new JSONObject();
        map.put("userId", inputId);
        map.put("id", inputId);
        map.put("title", "this is projectdebug.com");
        map.put("body", "this is REST-Assured Tutorial" + uuid);
        PostByBodyVeri rppt = new PostByBodyVeri();
        String rePath = rppt.inputpar(puri, map);
        System.out.println(rePath);
    }

    @And("user put to change a data")
    public void userPutToChangeAData() {
    }

    @And("user patch to change a data")
    public void userPatchToChangeAData() {
        int empid = 1943992775;
        String paturi = "http://localhost:8080/";
        Random random = new Random();
        Integer inputId = random.nextInt(1000000);
        String authorName = random.nextInt() + "billy";
        System.out.println(authorName);
        HashMap requestParams = new HashMap();
        requestParams.put("title", "this is projectdebug.com" + inputId);
        requestParams.put("author", authorName);
        System.out.println("!-------------------------------------------------------------------------------------------! ");
        System.out.println("!-------------------------------------------------------------------------------------------! ");
        RestAssuredPatchVeri rapatch= new RestAssuredPatchVeri();
        String path="posts/" + empid;
        rapatch.inputpar(paturi, requestParams,path);
    }

    @And("create new payload.json file")
    public void createNewPayloadJsonFile() {
        Random random = new Random();
        Integer inputId = random.nextInt(1000000);
        Map<String, Object> usrMap = new HashMap<String, Object>();
        String uuid = UUID.randomUUID().toString().substring(0,6);
        usrMap.put("user_name", "Audi"+inputId);
        usrMap.put("email", inputId+"mijb832k@verifone.com");
        usrMap.put("status","Deactivated");
//        usrMap.put("sites",{});
        List<String> roles = new ArrayList<String>();
        roles.add("Store Cashier");
        roles.add("Store Manager");
        roles.add("Store Cashier");
        usrMap.put("roles", roles);
        String path="src/test/resources/request-payload/payload.json";
        hashMap2JsonFileMethod(usrMap,path);
    }

    @And("request payload from file ")
    public void requestPayloadFromFileRequestPayloadPayloadJson() {
        Random random = new Random();
        Integer inputId = random.nextInt(1000000);
        Map<String, Object> usrMap = new HashMap<String, Object>();
        String uuid = UUID.randomUUID().toString().substring(0,6);
        usrMap.put("user_name", "Audi"+inputId);
        usrMap.put("email", "mijb"+inputId+"k@verifone.com");
        usrMap.put("status","Deactivated");
//        usrMap.put("sites",{});
        List<String> roles = new ArrayList<String>();
        roles.add("Store Cashier");
        roles.add("Store Manager");
        roles.add("Store Cashier");
        usrMap.put("roles", roles);
        String path="src/test/resources/request-payload/payload.json";
        hashMap2JsonFileMethod(usrMap,path);
    }

    @And("create new payload.json file with number after Name")
    public void createNewPayloadJsonFileWithNumberAfterName() {
        Random random = new Random();
        Integer inputId = random.nextInt(1000000);
        Map<String, Object> usrMap = new HashMap<String, Object>();
        String uuid = UUID.randomUUID().toString().substring(0,6);
        usrMap.put("user_name", "Audi"+inputId);
        usrMap.put("email", "mijb"+inputId+"k@verifone.com");
        usrMap.put("status","Deactivated");
//        usrMap.put("sites",{});
        List<String> roles = new ArrayList<String>();
        roles.add("Store Cashier");
        roles.add("Store Manager");
        roles.add("Store Cashier");
        usrMap.put("roles", roles);
        String path="src/test/resources/request-payload/payload.json";
        hashMap2JsonFileMethod(usrMap,path);
    }
}
