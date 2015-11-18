var $ = require('jquery');
var ItemCollection = require('./itemCollection');
var ItemCollectionView = require('./itemCollectionView');

$(function () {
  var films = new ItemCollection();

  films.fetch().then(function (data) {
    console.log("these are the films: ", films);
    new ItemCollectionView({collection: films});

  });
})
