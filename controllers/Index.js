const path = require('path')

const getHome = (req, res) => {
  const filePath = '../views/index.html'
  res.sendFile(path.resolve(__dirname, filePath))
}

const getAbout = (req, res) => {
  const filePath = '../views/about.html'
  res.sendFile(path.resolve(__dirname, filePath))
}

const getContact = (req, res) => {
  const filePath = '../views/contact-me.html'
  res.sendFile(path.resolve(__dirname, filePath))
}

module.exports = {
  getHome,
  getAbout,
  getContact,
}