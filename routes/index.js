var express = require('express');
var router = express.Router();
 
var bloodBank = require('../models/userModels');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET doner
router.get('/doner',(req,res)=>{
  res.render('doner')
})

router.post('/doner',(req,res)=>{
  var post = new bloodBank({
    name : req.body.name,
    age : req.body.age,
    state : req.body.state,
    bloodgroup : req.body.bloodgroup,
    phonenumber : req.body.phonenumber
  })
  let promise = post.save();
  promise.then((doc)=>{
    console.log(doc)
  });
  promise.catch((err)=>{
    console.log(err)
  })
  res.redirect('/')
 })

 
router.get('/view', function(req, res, next) {

  var promise =  bloodBank.find();
  promise.then((result)=>{
    res.render('view',{result : result});
  });
  promise.catch((error)=>{
    console.log(error)
  })
});


//GET needer
router.get('/needer',(req,res)=>{
  res.render('needer')
})

router.post('/needer',(req,res)=>{
  bloodBank.find({'state': req.body.state, 'bloodgroup': req.body.bloodgroup})
  .then((data)=>{
    res.render('view',{result : data})
  })
  })
module.exports = router;
