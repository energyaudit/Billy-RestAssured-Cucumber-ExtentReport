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
  "duration": 3307101,
  "status": "passed"
});
formatter.before({
  "duration": 383600,
  "status": "passed"
});
formatter.before({
  "duration": 1619399,
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
  "duration": 84357499,
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
  "duration": 2073400,
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
  "duration": 2908246501,
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
  "duration": 1859700,
  "status": "passed"
});
formatter.after({
  "duration": 2122299,
  "status": "passed"
});
formatter.after({
  "duration": 415701,
  "status": "passed"
});
formatter.after({
  "duration": 539300,
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
  "duration": 2183499,
  "status": "passed"
});
formatter.before({
  "duration": 311500,
  "status": "passed"
});
formatter.before({
  "duration": 876500,
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
  "duration": 533000,
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
  "duration": 343029800,
  "status": "passed"
});
formatter.after({
  "duration": 442100,
  "status": "passed"
});
formatter.after({
  "duration": 193500,
  "status": "passed"
});
formatter.after({
  "duration": 242900,
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
  "duration": 275000,
  "status": "passed"
});
formatter.before({
  "duration": 219301,
  "status": "passed"
});
formatter.before({
  "duration": 719900,
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
  "duration": 681299,
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
  "duration": 473401,
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
  "duration": 395779400,
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
  "duration": 1244700,
  "status": "passed"
});
formatter.after({
  "duration": 1599500,
  "status": "passed"
});
formatter.after({
  "duration": 758100,
  "status": "passed"
});
formatter.after({
  "duration": 805500,
  "status": "passed"
});
});