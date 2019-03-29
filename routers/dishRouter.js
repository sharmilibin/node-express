const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
  })
.get((req,res,next) => {
    res.end('get the dishes');
  })
  .post((req,res,next) => {
    res.end('dihes posted ',+req.body.name+ ' dishes are', +req.body.description);
  
  })
  .put((req,res,next) => {
    res.statusCode = 403;
    res.end('put not supported');
  })
  .delete((req,res,next) => {
    res.end('deleting dishes');
  
  });
  module.exports =dishRouter;
