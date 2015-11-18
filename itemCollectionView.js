var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var itemView = require('./itemModelView');
var itemModel = require('./itemModel');


module.exports = Backbone.View.extend({
  el: '.wrapper',
  events: {
    'click .submitfilms': 'submitFilm',

  },
  // render: function () {
  //   var stuff = this.template(this.model.toJSON());
  //   this.$el.html(stuff);
  //   return this;
  // },
  submitMovie : function(event){
    var newfilm = {
        title: this.$el.find('input[class="title"]').val(),
        release: this.$el.find('input[class="release"]').val(),
        cover: this.$el.find('input[class="cover"]').val(),
        plot: this.$el.find('input[class="plot"]').val(),
        rating: this.$el.find('input[class="rating"]').val(),
      };
      console.log(newFilm);
      var newFilmToSubmit = new itemModel(newFilm);
          newFilmToSubmit.save();
          this.collection.add(newFilmToSubmit);
          this.addFilm(newFilmToSubmit);
//           setTimeout(function(){
//       //this.render();
// }, 500);
   },
  initialize: function (){
    this.addAllFilms();
  },
  addFilm: function (itemModel) {
    console.log(itemModel);
    var ItemView = new itemView({model: itemModel});
    this.$el.append(ItemView.render().el);
  },
  addAllFilms: function(){
    _.each(this.collection.models, this.addFilm, this);

  }

});
