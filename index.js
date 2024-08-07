const express = require('express')
require('dotenv').config
const app = express()
const path = require('path')

const indexRouter = require('./routers/Index')
const errorRouter = require('./routers/Errors')

const PORT = process.env.PORT || 8080

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use(errorRouter)

app.listen(PORT, ()=>console.log(`The server is running on port ${PORT}!`))
