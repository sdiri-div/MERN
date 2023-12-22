const express = require('express');

const app = express();
const PORT = 5005;
const DB='review'

app.use(express.json(), express.urlencoded({ extended: true }));
// app.use(cors());

require('./config/mongoose.config')(DB)


app.listen(PORT,()=>{console.log(`SERVER IS RUNNING AND LISTENING ON PORT ${PORT} 🚀🚀🚀`);})