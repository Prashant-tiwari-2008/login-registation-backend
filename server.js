const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const PORT = 3000;
const api = require('./routes/api')
app.use(bodyParser.json())


app.use('/api', api)
app.get("/", (req, res) => {
    res.send("Hello from server")
})



//server listening
app.listen(PORT, () => {
    console.log(`server is running at ${PORT} number`)
})