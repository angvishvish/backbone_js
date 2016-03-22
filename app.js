BackboneApp = {
  init: function () {
    // var app = new BackboneApp.htmlRenderView({el: '#element'});
    // app.render();

    var appList = new BackboneApp.databaseListView();
    appList.render();
  }
}
