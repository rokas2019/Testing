
// Testing API GET method => https://a404cb5b-fc3a-46d1-a8cc-6f72f08d71db.mock.pstmn.io/employees/
// From Collection PayrollAPI / Employees / Get an employee detail 


pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

const response = pm.response.json();
const deductions = response.deductions;

console.log(response);

pm.test("Returns an employee1 object with valid structure", () => {
    const expectedKeys = ["id", "name", "email", "jobTitle", "salary", "deductions"];
    expectedKeys.forEach(key => {
        pm.expect(response).to.have.property(key);
    });

    pm.expect(response.id).to.be.a("string");
    pm.expect(response.name).to.be.a("string");
    pm.expect(response.email).to.be.a("string");
    pm.expect(response.jobTitle).to.be.a("string");
    pm.expect(response.salary).to.be.a("number");
    pm.expect(response.deductions).to.be.an("array").that.has.lengthOf.at.least(2);

    deductions.forEach(d => {
        pm.expect(d).to.have.property("deductionId").that.is.a("string");
        pm.expect(d).to.have.property("name").that.is.a("string");
        pm.expect(d).to.have.property("amount").that.is.a("number");
    });
});

pm.test("Return correct details for Employee1", () => {
    pm.expect(response.id).to.equal("employee1");
    pm.expect(response.name).to.equal("John Doe");
    pm.expect(response.email).to.equal("johndoe@example.com");
    pm.expect(response.jobTitle).to.equal("Software Engineer");
    pm.expect(response.salary).to.equal(5000);
    pm.expect(deductions[0].deductionId).to.equal("deduction1");
    pm.expect(deductions[0].name).to.equal("Tax");
    pm.expect(deductions[0].amount).to.equal(1000);
    pm.expect(deductions[1].deductionId).to.equal("deduction2");
    pm.expect(deductions[1].name).to.equal("Insurance");
    pm.expect(deductions[1].amount).to.equal(500);
});

pm.test("Response time is less than 1000ms", () => {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
