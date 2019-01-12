var notice=require('../models/notice_model');
var express=require('express');
var router=express.Router();

router.post('',function(req,res,next){
    notice.AddNotice(req.body,function(err,rows){
        if(err)
        {
           res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});



router.get('',function(req,res,next){
    notice.getNotice(function(err,rows){
        if(err)
        {
           res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;