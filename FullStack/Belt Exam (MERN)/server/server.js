const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5001;

app.use(cors())
app.use(express.json(), express.urlencoded({ extends: true }))


require("./config/mongoose.config")

require("./routes/Book.route")(app)





app.listen(PORT,()=> console.log(`You server is running smoothly at ${PORT}`))