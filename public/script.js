
//Read%from%PostgreSQL%with%Node.js//include the node postgres libraryvar 



var express = require('express'),
 pg = require('pg'),
 app= express();
 bodyParser= require('body-parser');
app.use(bodyParser());
app.use(express.static("public"));
 
 // app.engine ('ejs',cons.ejs);

 // app.set('view enigne','ejs');
 // app.set('views',__dirname +'/public');
// app.use(express.static(path.join(__dirname + '/public'));
// 	app.use(bodyParser.json());
// 	app.use(bodyParser urlencoded({extended:false}));






app.get('/myblog.ejs',function(request,response){
	  pg.connect('postgres://hafeez:88649@localhost/blog', function(err, client, done) {
	client.query(`select * from blogs`, function(err, result) {console.log(result.rows);
	response.render('myblog.ejs',{
		blogs:result.rows
  });
		done();

		pg.end();
		});
});
	});

app.get('/addition.ejs',function(request,response){
   // pg.connect('postgres://hafeez:88649@localhost/blog', function(err, client, done) {
  // client.query(`select * from blogs`, function(err, result) {console.log(result.rows);
  response.render('addition.ejs')
    // blogs:result.rows
  // });
    // done();

    // pg.end();
    // });
// });
  });
// app.get('/myblog.ejs',function(request,response){
//    // pg.connect('postgres://hafeez:88649@localhost/blog', function(err, client, done) {
//   // client.query(`select * from blogs`, function(err, result) {console.log(result.rows);
//   response.render('myblog.ejs',{"blogs":[]})


// });
// 	app.post('/myblog', function (req, res, next) {
//   const user = req.body

 
// })
// app.get('/myblog.ejs',function(request,response){
// 	response.render('myblog.ejs',{
// 		groceries:[
// 		'bananas',
// 		'milk',
// 		'lettuce']
// 	});
// });
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
//
//connect to a database
//pg.connect('postgres://prostges:@localhost/cars', function(err, client, done) {//request all of the hats  
//let pg know we're done with this client
//close the pg pool entirely.//this is done so our node process will exit.    
pg.end();  });

app.post('/newpost',function (req,res){
  console.log("it is me");
  pg.connect('postgres://hafeez:88649@localhost/blog', function(err, client, done) {
  client.query(`INSERT INTO blogs(id,name,article) VALUES(DEFAULT,$1,$2)`,[req.body.title,req.body.body]);
   res.end('{success:"updated successfully","status":200}');
  });
});


    