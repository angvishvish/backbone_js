BackboneApp.htmlRenderView = Backbone.View.extend({
  render: function () {
    $(this.el).html('<a href="#">Click here</a>')
  },
  events: {
    'click a': 'someFunction'
  },
  someFunction: function () {
    console.log('I am here to learn Backbonejs')
  }
});