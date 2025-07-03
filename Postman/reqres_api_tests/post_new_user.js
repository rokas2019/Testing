// Body => raw
// {
//     "name": "{{$randomFirstName}}",
//     "job": "leader"
// }


//  Tests
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("Response body contains the correct data", function () {
    var jsonData = pm.response.json();
    pm.collectionVariables.set("id", jsonData.id);
    pm.expect(jsonData.job).to.be.a("string")
    pm.expect(jsonData.job).to.eql("leader");
    pm.expect(jsonData.id).to.not.be.empty;
});