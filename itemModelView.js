
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  events: {
    'click .delete': 'deleteMovie',
  },
  tagName: 'article',
  model: null, // just here as placeholder, but need a model up on instantiation
  initialize: function () {},
  template: _.template(tmpl.film),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // in order to call .el off of render we need to return this
    // bookViewInstance.render().el - yields all markup and data from model
    return this;
  },
  deleteMovie : function() {
   console.log();
   var _id = this.model.attributes._id;
   console.log(_id);
   this.model.destroy(_id);
 },

});
