const path = require('path')

const get404 = (req, res) => {
  const filePath = '../views/404.html'
  res.status(404).sendFile(path.resolve(__dirname, filePath))
}

module.exports = {
  get404,
}