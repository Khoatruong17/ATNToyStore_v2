var mongoose = require('mongoose');
var BrandSchema = mongoose.Schema(
    {
        name: String 
    });
var CountryModel = mongoose.model('countries', BrandSchema); 
module.exports = CountryModel;