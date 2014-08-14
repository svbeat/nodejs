/*
* GET users listing.
*/
exports.list = function(req, res){
		req.getConnection(function(err,connection){
			var query = connection.query('SELECT * FROM wishlist order by id desc ',
							function(err,rows) {
								if(err)
									console.log("Error Selecting : %s ",err );
								res.json(rows);
							});

			});
	};

	
/*Save the wishlist*/
exports.create = function(req,res){
		var input = req.body.text;
		console.log("exports.create input: %s", input);
		if (input == undefined) {
			res.redirect('/api/wishlist');
		} else {
			req.getConnection(function (err, connection) {
				var data = {
						wish : input
					};
				var query = connection.query("INSERT INTO wishlist set ? ",data, 
						function(err, rows) {
							if (err)
								console.log("Error inserting : %s ",err );
							res.redirect('/api/wishlist');
						});
			});
		}
	};
	
exports.delete = function(req,res){
		var id = req.params.id;
		console.log(" export.deleting : %s ",id );
		req.getConnection(function (err, connection) {
				connection.query("DELETE FROM wishlist WHERE id = ? and id != 1 ",[id], function(err, rows)
					{
						if(err)
							console.log("Error deleting : %s ",err );
						
						
							var query2 = connection.query('SELECT * FROM wishlist',
								function(err,rows) {
									if(err)
										console.log("Error Selecting : %s ",err );
									res.json(rows);
								});
					});
		});
	};