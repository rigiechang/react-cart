 fs = require('fs')
 var ProductEntity=require('../../model/product-entity')
 
 module.exports.findProducts=(req,res)=> {
   console.log("@@@@@@@@@@@product@@@@@@@@@@@@@@");
   
   ProductEntity.find({},function(err,data){
          console.log(data);
          res.status(200).json(data); 
   });

}