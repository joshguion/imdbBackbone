
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'filmArticle',
  template: _.template($('#filmTmpl').html()),
  events: {
    'click .delete': 'deleteMovie'
  },

  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.append(markup);
    return this;
  },
  deleteMovie : function() {
   console.log();
   var _id = this.model.attributes._id;
   console.log(_id);
   this.model.destroy(_id);
 },
  initialize: function () {}

});
