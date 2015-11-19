var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/guionimnotdb',
  idAttribute: '_id',
  defaults: {
    cover: "http://img1.wikia.nocookie.net/__cb20140522210002/spellbook/images/5/56/Insert-Photo-Here.jpg",
    title: "Title",
    release: "Year",
    rating: "Rating",
    plot: "Plot",
  },
  initialize: function () {

  }
});
