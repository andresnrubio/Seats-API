require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

//Routes call 
  
app.use("/api",require("./routes/index"))


app.listen(port,() => {
    console.log("App lista en http://localhost:"+port)
})

dbConnect()