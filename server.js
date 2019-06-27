var express = require('express'); //we have just installed
var http = require('http'); //This comes with Node.js
var bodyParser=require('body-parser');

const fileUpload = require('express-fileupload');
var https = require('https');
var fs = require('fs');

var path = require('path');

/*
var appDir = path.dirname(require.main.filename);
global.appRoot=appDir;
console.log("appDir = "+appDir);
*/

var app = express(); //Instantiating Express
app.set('port', process.env.PORT || 4000);

//To allow access of this data from different domain
//Access to XMLHttpRequest at 'http://localhost:4000/v3/profiles' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,user-access-token");
    res.header("Access-Control-Allow-Credentials", "*");
    //res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "x-access-token");
    next();
  });	

//To read data from incoming html form
//do not forget this
app.use(bodyParser.urlencoded({ extended: false }));

//to read json data from request body 
app.use(express.json());

//profile-mapping file contains function definition 
var endPoint = express.Router();
//Filter 

/*
endPoint.use(function (err, req, res, next) {

	console.log("endPoint error:");
    console.log(err);

    if (req.app.get('env') !== 'development') {
        delete err.stack;
    }

    var  data={status:"fail",message:"Sorry, request could not process successfully."};
    res.status(err.statusCode || 500).json(data);
});
*/

require('./rest-api/utils/mongodb-utils')();


app.get('/about', function (req, res) {
  res.send('about')
})

var ProductController=require('./rest-api/controller/admin/product-controller')
app.get('/admin/products', ProductController.findProducts);

//endPoint.get("/admin/slider",SliderController.findSlider);
//require('./rest-api/router/product-router')(endPoint); // BUGGY
//require('./rest-api/router/slider-router')(endPoint);


//Hey create one http server using app setting on which 
//port number define inside express!
http.createServer(app).listen(app.get('port'), function(){
    console.log('...........NodeJS server listening on port.......... ' + app.get('port'));
    console.log('...........NodeJS server listening on port.......... ' + app.get('port'));
    console.log('...........NodeJS server listening on port.......... ' + app.get('port'));
    console.log('...........NodeJS server listening on port.......... ' + app.get('port'));
   
});


