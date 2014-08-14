
var wishlist = require('./models/wishlist');

module.exports = function(app) {
	// api ---------------------------------------------------------------------
	// get all wishlist
	app.get('/api/wishlist', wishlist.list);
	
	// create todo and send back all wishlist after creation
	app.post('/api/wishlist', wishlist.create);
	
	// delete a todo
	app.delete('/api/wishlist/:id', wishlist.delete);

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
		});
};