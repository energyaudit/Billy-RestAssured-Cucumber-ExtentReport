$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoFeatureGet.feature");
formatter.feature({
  "line": 2,
  "name": "GET: Automated Demo Tests",
  "description": "Description: GET: purpose of this feature is to test some demo app.",
  "id": "get:-automated-demo-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "GET: Test the Demo app",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-demo-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-demo-app;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 13,
      "id": "get:-automated-demo-tests;get:-test-the-demo-app;;1"
    },
    {
      "cells": [
        "Demo test",
        "/api/users?page\u003d2",
        "application/json",
        "",
        "GET",
        "200"
      ],
      "line": 14,
      "id": "get:-automated-demo-tests;get:-test-the-demo-app;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3180300,
  "status": "passed"
});
formatter.before({
  "duration": 402500,
  "status": "passed"
});
formatter.before({
  "duration": 1594300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "GET: Test the Demo app",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-demo-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"/api/users?page\u003d2\" for test case \"Demo test\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users?page\u003d2",
      "offset": 22
    },
    {
      "val": "Demo test",
      "offset": 56
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 95813200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 1393100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 2642682500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 2352300,
  "status": "passed"
});
formatter.after({
  "duration": 966900,
  "status": "passed"
});
formatter.after({
  "duration": 627300,
  "status": "passed"
});
formatter.after({
  "duration": 567500,
  "status": "passed"
});
formatter.uri("Hooks.feature");
formatter.feature({
  "line": 2,
  "name": "GET: Hooks Demo",
  "description": "Description: GET: purpose of this feature is to test demo Hooks.",
  "id": "get:-hooks-demo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "GET: Test Hooks",
  "description": "",
  "id": "get:-hooks-demo;get:-test-hooks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Given I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\""
    }
  ],
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "comments": [
    {
      "line": 10,
      "value": "#Then I try to verify the status code is \"\u003cStatusCode\u003e\""
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "id": "get:-hooks-demo;get:-test-hooks;",
  "rows": [
    {
      "cells": [
        "ContentType",
        "RequestBody",
        "RequestMethod"
      ],
      "line": 13,
      "id": "get:-hooks-demo;get:-test-hooks;;1"
    },
    {
      "cells": [
        "application/json",
        "",
        "GET"
      ],
      "line": 14,
      "id": "get:-hooks-demo;get:-test-hooks;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 747200,
  "status": "passed"
});
formatter.before({
  "duration": 702500,
  "status": "passed"
});
formatter.before({
  "duration": 3448300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "GET: Test Hooks",
  "description": "",
  "id": "get:-hooks-demo;get:-test-hooks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Given I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\""
    }
  ],
  "line": 8,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 782800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 673983600,
  "status": "passed"
});
formatter.after({
  "duration": 556700,
  "status": "passed"
});
formatter.after({
  "duration": 253900,
  "status": "passed"
});
formatter.after({
  "duration": 229600,
  "status": "passed"
});
formatter.uri("TagsDemo.feature");
formatter.feature({
  "line": 2,
  "name": "GET: Tags Demo Tests",
  "description": "Description: GET: purpose of this feature is to test Tags demo app.",
  "id": "get:-tags-demo-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "GET: Test the Tags Demo app",
  "description": "",
  "id": "get:-tags-demo-tests;get:-test-the-tags-demo-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smokes"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "get:-tags-demo-tests;get:-test-the-tags-demo-app;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 13,
      "id": "get:-tags-demo-tests;get:-test-the-tags-demo-app;;1"
    },
    {
      "cells": [
        "Demo test",
        "/api/users?page\u003d2",
        "application/json",
        "",
        "GET",
        "200"
      ],
      "line": 14,
      "id": "get:-tags-demo-tests;get:-test-the-tags-demo-app;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 335500,
  "status": "passed"
});
formatter.before({
  "duration": 259000,
  "status": "passed"
});
formatter.before({
  "duration": 811900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "GET: Test the Tags Demo app",
  "description": "",
  "id": "get:-tags-demo-tests;get:-test-the-tags-demo-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smokes"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"/api/users?page\u003d2\" for test case \"Demo test\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users?page\u003d2",
      "offset": 22
    },
    {
      "val": "Demo test",
      "offset": 56
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 1119300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 650500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 700860900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 999900,
  "status": "passed"
});
formatter.after({
  "duration": 1247700,
  "status": "passed"
});
formatter.after({
  "duration": 719400,
  "status": "passed"
});
formatter.after({
  "duration": 590100,
  "status": "passed"
});
formatter.uri("demo.feature");
formatter.feature({
  "line": 1,
  "name": "demo util tests",
  "description": "",
  "id": "demo-util-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 863900,
  "status": "passed"
});
formatter.before({
  "duration": 585900,
  "status": "passed"
});
formatter.before({
  "duration": 1903300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "test setup for sample rest service",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "request base url \u0027https://18.208.137.81:5001\u0027",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 78,
  "name": "Demo Util methods in demo feature",
  "description": "",
  "id": "demo-util-tests;demo-util-methods-in-demo-feature",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 77,
      "name": "@runnow"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 79,
      "value": "#    Given user get api first"
    }
  ],
  "line": 80,
  "name": "user post method one",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "user post method two",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "user put to change a data",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "user patch to change a data",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1338300,
  "status": "passed"
});
formatter.after({
  "duration": 1016900,
  "status": "passed"
});
formatter.after({
  "duration": 370900,
  "status": "passed"
});
formatter.before({
  "duration": 384400,
  "status": "passed"
});
formatter.before({
  "duration": 307700,
  "status": "passed"
});
formatter.before({
  "duration": 3816100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "test setup for sample rest service",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "request base url \u0027https://18.208.137.81:5001\u0027",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 86,
  "name": "Demo Util methods patch in demo feature",
  "description": "",
  "id": "demo-util-tests;demo-util-methods-patch-in-demo-feature",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 85,
      "name": "@runnow"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "user patch to change a data",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "create new payload.json file",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "post from payload file",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 430700,
  "status": "passed"
});
formatter.after({
  "duration": 757000,
  "status": "passed"
});
formatter.after({
  "duration": 503000,
  "status": "passed"
});
});