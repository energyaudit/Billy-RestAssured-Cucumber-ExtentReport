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
  "duration": 5458500,
  "status": "passed"
});
formatter.before({
  "duration": 406100,
  "status": "passed"
});
formatter.before({
  "duration": 1947200,
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
  "duration": 110701100,
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
  "duration": 1897200,
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
  "duration": 3254748800,
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
  "duration": 1886400,
  "status": "passed"
});
formatter.after({
  "duration": 804500,
  "status": "passed"
});
formatter.after({
  "duration": 526800,
  "status": "passed"
});
formatter.after({
  "duration": 347500,
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
  "duration": 367400,
  "status": "passed"
});
formatter.before({
  "duration": 270000,
  "status": "passed"
});
formatter.before({
  "duration": 6121500,
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
  "duration": 578000,
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
  "duration": 290457700,
  "status": "passed"
});
formatter.after({
  "duration": 542500,
  "status": "passed"
});
formatter.after({
  "duration": 290900,
  "status": "passed"
});
formatter.after({
  "duration": 249000,
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
  "duration": 317700,
  "status": "passed"
});
formatter.before({
  "duration": 258300,
  "status": "passed"
});
formatter.before({
  "duration": 817100,
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
  "duration": 869100,
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
  "duration": 950200,
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
  "duration": 229707000,
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
  "duration": 838100,
  "status": "passed"
});
formatter.after({
  "duration": 1066700,
  "status": "passed"
});
formatter.after({
  "duration": 430100,
  "status": "passed"
});
formatter.after({
  "duration": 431800,
  "status": "passed"
});
});