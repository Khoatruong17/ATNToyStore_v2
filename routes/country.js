var express = require('express');
var router = express.Router();
var CountryModel = require('../models/CountryModel');


router.get('/', async (req, res) => {
    try {
        var countries = await CountryModel.find({});
        res.render('admin/country/index', { title: 'Admin - List of Country', countries });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/add', (req, res) => {
  res.render('admin/country/add');
})

router.post('/add', async (req, res) => {
    var country = req.body;
    try {
      await CountryModel.create(country);
      console.log('added country successfully')
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
    res.redirect('/country');
  })
  
module.exports = router;