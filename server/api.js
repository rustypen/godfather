const express = require('express');
const router = express.Router();
const Employees = require('./schema');

router.post('/', function (req, res) {
  if(req.body.action==="users"){
    Employees
      .find({})
      .select('name popularity -_id')
      .then((data) => {
        res.json(data)
      })
      .catch((err)=>{
        res.statusCode = 404;
        res.send();
      });
  }

  else if(req.body.action==="user"){
    Employees
      .findOne({name: req.body.username})
      .select('-_id')
      .then((data) => {
        res.json(data)
      })
      .catch((err)=>{
        res.statusCode = 404;
        res.send();
      });
  }
  
  else{
    res.statusCode = 404;
    res.send();
  }
})

module.exports = router;
