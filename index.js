const express = require('express'),
    http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.all('/dishes',(req,res,next) => {
  res.statusCode = 200;
  res.setHeader('content-type','text/plain');
  next();
});
app.get('/dishes',(req,res,next) => {
  res.end('get the dishes');
});
app.post('/dishes',(req,res,next) => {
  res.end('dihes posted ',+req.body.name+ ' dishes are', +req.body.description);

});
app.put('/dishes',(req,res,next) => {
  res.statusCode = 403;
  res.end('put not supported');
});
app.delete('/dishes',(req,res,next) => {
  res.end('deleting dishes');

});
app.get('/dishes/:dishId',(req,res,next) => {
  res.end('Get  the dishes ' +req.params.dishId );
});
app.post('/dishes/:dishId',(req,res,next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});
app.put('/dishes/:dishId',(req,res,next) => {
  res.write('will update the dishes ' +req.params.dishId );
  res.end('dishes updating : '+req.body.name+ 'details: ' +req.body.description);
});
app.delete('/dishes/:dishId',(req,res,next) => {
  res.end('deleting dish with ID: ' +req.params.dishId );

});



app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body><h1> This is Server Express </h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});