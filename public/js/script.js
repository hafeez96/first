
//Read%from%PostgreSQL%with%Node.js//include the node postgres libraryvar 



var express = require('express'),
 pg = require('pg'),
 app= express();

 var connect = "prostges://hafeez:886479@localhost/blog";
 app.engine ('ejs',cons.ejs);

 app.set('view enigne','ejs');
 app.set('views',__dirname +'/public');
app.use(express.static(path.join(__dirname + '/public'));
	app.use(bodyParser.json());
	app.use(bodyParser urlencoded({extended:false}));
	







app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
app.get('/index',function(request,response){
	response.render('index.ejs',{
		groceries:[
		'bananas',
		'milk',
		'lettuce']
});
});
app.get('/myblog.ejs',function(request,response){
	response.render('myblog.ejs',{
		groceries:[
		'bananas',
		'milk',
		'lettuce']
	});
});
//
//connect to a database
//pg.connect('postgres://prostges:@localhost/cars', function(err, client, done) {//request all of the hats  
client.query(`select * from cars`, function(err, result) {console.log(result.rows);//let pg know we're done with this client
done();//close the pg pool entirely.//this is done so our node process will exit.    
pg.end();  });});