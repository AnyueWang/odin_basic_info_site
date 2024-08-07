const express = require('express')
const router = express.Router()
const indexController = require('../controllers/Index')

router.get('/', indexController.getHome)

router.get('/about', indexController.getAbout )

router.get('/contact-me', indexController.getContact)

module.exports = router