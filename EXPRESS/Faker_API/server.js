const express=require('express');
const {faker}=require('@faker-js/faker');
const app= express();
const port=8007;
const creatUser=()=>
{
    const user={
        _id: faker.database.mongodbObjectId(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName()
    }
  return user;
}
const createCompany=()=>{
    const company={
        _id: faker.database.mongodbObjectId(),
        name:faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
        
    }
    return company
}
app.get("/api",(req,res)=>{
    res.json({message:"Hello World"});
});

app.get("/api/users/new",(req,res)=>
{
    const newUser=creatUser()
    res.json(newUser)});
    app.get("/api/companies/new",(req,res)=>
{
    const newCompany=createCompany()
    res.json(newCompany)});

app.get("/api/user/company",(req,res)=>
{
    
    const  newCompany=createCompany()
    const  newUser=creatUser()
    
    res.json(`User First Name:${newUser.firstName} Company name: ${newCompany.name}`)
})



 
app.listen(port,()=>console.log(`Listenting on port :${port}`));

