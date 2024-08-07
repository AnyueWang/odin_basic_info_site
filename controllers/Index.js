const getHome = (req, res) => {
  res.render('index', { title: 'Home' })
}

const getAbout = (req, res) => {
  res.render('index', { title: 'About' })
}

const getContact = (req, res) => {
  res.render('index', { title: 'Contact Me' })
}

module.exports = {
  getHome,
  getAbout,
  getContact,
}