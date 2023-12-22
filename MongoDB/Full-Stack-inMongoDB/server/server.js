const express = require("express")
const cors = require ("cors")
const app = express()
const PORT = 5001



// --- MIDDLEWARE --

app.use(express.json(), express.urlencoded({ extended: true }))
app.use(cors())


require("./Config/mongoose.config")
require("./routes/spotify.routes")(app)






app.listen(PORT, () => {
    console.log(`>>>>> Server is running on Prot ${PORT}`)
})
