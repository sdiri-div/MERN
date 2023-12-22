const express = require ("express");

const app = express();
// console.log(app)

const PORT = 5002;


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api",(requestObj,responseObj) => {
//  console.log("hello from /api")
//  console.log(requestObj)
 responseObj.send("hello from the server")
})

const users =[
    {firstName: "Reimu", LesttName: "Haakurei"},
    {firstName: "Maries", LesttName: "Kirisame"},
    {firstName: "Sanae", LesttName: "Kochiya"},
    {firstName: "Sakuya", LesttName: "Izayoi"},
    {firstName: "Momiji", LesttName: "Inobachiri"},
];

app.get("/api/users", (req,res) =>{
      res.json(users)
})

app.get("/api/users/:id", (req,res) =>{
      console.log(req.params.id)
      res.json(users[req.params.id])
      
})

app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
     // we can push it into the users array for now...
    // later on this will be inserted into a database

    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
});


app.listen(PORT,()=>{
    console.log(`>>>>>>the server  is working  smothly in PART ${PORT}`)});