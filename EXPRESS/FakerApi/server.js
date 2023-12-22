const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const PORT = 8000;


const createUserObj = () => {
   const user={
    _id: faker.datatbase.uuid(),
    passsword: faker.internet.password(),
     email: faker.internet.email(),
     phoneNumber: faker.phone.phoneNumber(),
     lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
   }
   return user;
  };

  const createCompanyObject = () => {
    const company= {
    _id: faker.database.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country(),
    }
    }
    return company;
  }

  app.get("/api",(req,res)=>{
    res.send("Hello World"); //message in front-end
    console.log("hello from/api") ///message in back-end
  })

  
app.get("/api/users/new", (req, res) => {
    const newUser = createUserObj()
    res.json(newUser)});
  
  app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompanyObject();
    res.json(newCompany)});
  
  app.get("/api/user/company", (req, res) => {
    const newUser = createUserObj()
    const newCompany = createCompanyObject()
   
    
    res.json(`User First Name:${newUser.firstName} Company name:${newCompany.name}`)
  })
  
  app.listen(PORT, () => console.log(`express server running on port ${PORT}`));