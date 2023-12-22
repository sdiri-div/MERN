const express = require("express")
const  cors = require("cors")

const app = express()
const PORT = 8000;

app.use(cors())
app.use(express.json(),express.urlencoded({extends: true}));



require("./config/mongoose.config")
require("./routes/book.routes")(app)

app.listen(PORT, ()=> console.log(`>>>>>> your server is runningn smothlly at ${PORT} `))