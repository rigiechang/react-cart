var express = require('express'); //we have just installed

var ProductController=require('../controller/admin/product-controller')
module.exports=function(endPoint){

    //Mapping for add profile
    //@RequestMapping(value="profiles",method=RequestMethod.POST)

	console.log("router");

	// BUGGY 
	/*
    endPoint.get("/admin/products",ProductController.findProducts);\
	*/
	
	/*
    endPoint.get("/admin/products/:pid",ProductController.getProduct);
    endPoint.get("/admin/products/image/:imageUrl",ProductController.getImage);
    endPoint.post("/admin/products",ProductController.postProducts);
	endPoint.post("/admin/productsbyids",ProductController.findProductsByIds);
	
	
    endPoint.get("/admin/products/:pid/review",ProductController.getProductReviews);
    endPoint.post("/admin/products/review",ProductController.postProductReview);
    endPoint.get("/admin/products/:pid/rating",ProductController.getProductRating);

    endPoint.get("/review",ProductController.getAllProductReviews);
    */
    
};
