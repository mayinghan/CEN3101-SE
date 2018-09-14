'use strict';
/* Fill out these functions using Mongoose queries*/

var config = require('./config.js'),
  mongoose = require('mongoose'),
  Listing = require('./ListingSchema.js');

//connect to db
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({ 'name': 'Library West' }, (err, doc) => {
    if (err) {
      throw err;
    }
    console.log('\n\nLW founded!!\n\n', doc);
    
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.remove({ 'code': 'CABL' }, err => {
    if (err) {
      throw err;
    }
    console.log('\n\nCABL deleted!\n\n')
    retrieveAllListings();
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.update({ 'name': 'Phelps Laboratory' }, { 'address': '1953 Museum Rd, Gainesville, FL 32603' }, { multi: true }, (err, raw) => {
    if (err) {
      console.log(err);
    } else {
      console.log('\n\nAddress updated!\n\n');
      retrieveAllListings();
    }
  });
  

};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
