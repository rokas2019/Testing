const expectedSchema = 
    {
  "type": "object",
  "properties": {
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    },
    "total": {
      "type": "integer"
    },
    "total_pages": {
      "type": "integer"
    },
    "data": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "email": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "email",
            "first_name",
            "last_name",
            "avatar"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "email": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "email",
            "first_name",
            "last_name",
            "avatar"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "email": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "email",
            "first_name",
            "last_name",
            "avatar"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "email": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "email",
            "first_name",
            "last_name",
            "avatar"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "email": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "email",
            "first_name",
            "last_name",
            "avatar"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "email": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "email",
            "first_name",
            "last_name",
            "avatar"
          ]
        }
      ]
    },
    "support": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string"
        },
        "text": {
          "type": "string"
        }
      },
      "required": [
        "url",
        "text"
      ]
    }
  },
  "required": [
    "page",
    "per_page",
    "total",
    "total_pages",
    "data",
    "support"
  ]
}
const responseBody = pm.response.json();

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Returns users page 2 object with valid structure", () =>{
    const expectedKeys = ["page", "per_page", "total", "total_pages", "data", "support"];
    pm.expect(Object.keys(responseBody)).to.have.members(expectedKeys);
})
// Verify the data returned is as expected
pm.test("Verify the data returned is as expected", function () {
    pm.expect(responseBody.page).to.equal(2);
    pm.expect(responseBody.per_page).to.equal(6);
    pm.expect(responseBody.total).to.equal(12);
    pm.expect(responseBody.total_pages).to.equal(2);
    pm.expect(responseBody.data).to.be.an('array').with.lengthOf(6);
    pm.expect(responseBody.support).to.have.property('url');
    pm.expect(responseBody.support).to.have.property('text');

    // Verify the structure of the first user in the data array
    pm.expect(responseBody.data[0]).to.have.property('id');
    pm.expect(responseBody.data[0]).to.have.property('email');
    pm.expect(responseBody.data[0]).to.have.property('first_name');
    pm.expect(responseBody.data[0]).to.have.property('last_name');
    pm.expect(responseBody.data[0]).to.have.property('avatar');
    pm.expect(responseBody.data[0].id).to.equal(7);
    pm.expect(responseBody.data[0].email).to.equal("michael.lawson@reqres.in");
    pm.expect(responseBody.data[0].first_name).to.equal("Michael");
    pm.expect(responseBody.data[0].last_name).to.equal("Lawson");
    pm.expect(responseBody.data[0].avatar).to.equal("https://reqres.in/img/faces/7-image.jpg");

    // Verify the structure of the second user in the data array
    pm.expect(responseBody.data[1]).to.have.property('id');
    pm.expect(responseBody.data[1]).to.have.property('email');
    pm.expect(responseBody.data[1]).to.have.property('first_name');
    pm.expect(responseBody.data[1]).to.have.property('last_name');
    pm.expect(responseBody.data[1]).to.have.property('avatar');
    pm.expect(responseBody.data[1].id).to.equal(8);
    pm.expect(responseBody.data[1].email).to.equal("lindsay.ferguson@reqres.in");
    pm.expect(responseBody.data[1].first_name).to.equal("Lindsay");
    pm.expect(responseBody.data[1].last_name).to.equal("Ferguson");
    pm.expect(responseBody.data[1].avatar).to.equal("https://reqres.in/img/faces/8-image.jpg");

    //Verify the last user in the data array
    pm.expect(responseBody.data[5]).to.have.property('id');
    pm.expect(responseBody.data[5]).to.have.property('email');
    pm.expect(responseBody.data[5]).to.have.property('first_name');
    pm.expect(responseBody.data[5]).to.have.property('last_name');
    pm.expect(responseBody.data[5]).to.have.property('avatar');
    pm.expect(responseBody.data[5].id).to.equal(12);
    pm.expect(responseBody.data[5].email).to.equal("rachel.howell@reqres.in");
    pm.expect(responseBody.data[5].first_name).to.equal("Rachel");
    pm.expect(responseBody.data[5].last_name).to.equal("Howell");
    pm.expect(responseBody.data[5].avatar).to.equal("https://reqres.in/img/faces/12-image.jpg");

    // Verify the structure of the support object
    pm.expect(responseBody.support).to.have.property('url');
    pm.expect(responseBody.support).to.have.property('text');
    pm.expect(responseBody.support.url).to.equal("https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral");
    pm.expect(responseBody.support.text).to.equal("Tired of writing endless social media content? Let Content Caddy generate it for you.");
})
// Verify JSON schema
pm.test("response matches JSON schema", () => {
    pm.response.to.have.jsonSchema(expectedSchema);
}) 


