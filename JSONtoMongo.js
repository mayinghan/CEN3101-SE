'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

/* Connect to your database */
mongoose.connect(config.db.uri);


/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
var myListing = fs.readFile('./listings.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    var dataListing = JSON.parse(data).entries;

    dataListing.forEach(item => {
      let newList = new Listing(item);
      newList.save(err => {
        if (err) {
          console.log(err);
        } 
      });
    });
  }
})

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */