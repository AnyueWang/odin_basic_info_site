const get404 = (req, res) => {
  res.status(404).send('<h1>404</h1>')
}

module.exports = {
  get404,
}