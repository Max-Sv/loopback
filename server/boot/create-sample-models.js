module.exports = function(app) {
  app.dataSources.db.automigrate('Shop', function(err) {
    if (err) throw err;

    app.models.Shop.create([{
      name: 'Bel Cafe',
      adress: 'Vancouver'
    }, {
      name: 'Three Bees Coffee House',
      adress: 'San Mateo'
    }, {
      name: 'Caffe Artigiano',
      adress: 'Vancouver'
    }], function(err, Shops) {
      if (err) throw err;

      console.log('Models created: \n', Shops);
    });
  });
};
