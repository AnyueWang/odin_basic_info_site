const express = require('express')
require('dotenv').config
const app = express()

const indexRouter = require('./routers/Index')
const errorRouter = require('./routers/Errors')

const PORT = process.env.PORT || 8080

app.use('/', indexRouter)
app.use(errorRouter)

app.listen(PORT, ()=>console.log(`The server is running on port ${PORT}!`))
