const path = require('path')
const express = require('express')
require('dotenv').config
const app = express()

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  const filePath = './index.html'
  res.sendFile(path.resolve(__dirname, filePath))
})

app.get('/about', (req, res) => {
  const filePath = './about.html'
  res.sendFile(path.resolve(__dirname, filePath))
})

app.get('/contact-me', (req, res) => {
  const filePath = './contact-me.html'
  res.sendFile(path.resolve(__dirname, filePath))
})

app.use((req, res) => {
  const filePath = './404.html'
  res.status(404).sendFile(path.resolve(__dirname, filePath))
})

app.listen(PORT, ()=>console.log(`The server is running on port ${PORT}!`))
