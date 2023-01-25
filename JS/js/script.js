// Object creation
let company = new Object();

company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "Blue";

console.log(company["name"]);
console.log("Company CEO name is: " + company.ceo.firstName);
