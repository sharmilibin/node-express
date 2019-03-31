const express = require('express'),
    http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routers/dishRouter');
const leaderRouter = require('./routers/leaderRouter');
const promotionRouter = require('./routers/promotionRouter');

const hostname = 'localhost';
const port = 3000;
const app = express();
app.use('/dishes',dishRouter);
app.use('/leaders',leaderRouter);
app.use('/promotions',promotionRouter);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body><h1> This is Server Express </h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});