/*var express = require('express');
 var router = express.Router();
 var User=require('../models/get_from_voucher_mosel');

router.get('/:id',function(req,res,next){
    if(req.params.id)
{
     User.addCustomer_seller(req.params.id,function(err,rows){
 
if(err) 
  { 
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
} 

}); 
 module.exports=router;*/