BackboneApp.databaseView = Backbone.View.extend({
  tagName: 'tr',
  render: function () {
    var htmlTemplate = $('#database-list-template').html();
    var compiled = _.template(htmlTemplate, {name: 'template name'});
    $(this.el).html(compiled);
    return this;
  },
  events: {
    'click a' : 'someFunction'
  },
  someFunction: function () {
    console.log('I am here');
  }
});

BackboneApp.databaseListView = Backbone.View.extend({
  tagName     : 'table',
  className   : 'table table-striped table-hover',
  render: function () {
    var elemArray = []
    for (let i = 0; i < 5; i++) {
      var itemView = new BackboneApp.databaseView();
      elemArray.push(itemView.render().el);
    } 
    // var renderHtml = $(); 
    $(this.el).html(elemArray);
    $('#database-list').html(this.el);
    // return render;
  }
});
