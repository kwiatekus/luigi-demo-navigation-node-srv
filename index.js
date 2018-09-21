const express = require('express');
const app = express();
const router = express.Router();
const port = 8080;
const url = require('url');

// url: http://localhost:8080/
app.get('/', (request, response) => response.send('OK'));

// all routes prefixed with /api
app.use('/api', router);

router.get('/stuff', (request, response) => {
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var myParam = parameters.myParam;
    // e.g. myVenues = 12;
    
    var myResponse = `I multiplied the number you gave me (${myParam}) by 5 and got: ${myParam * 5}`;
    
    response.json({message: myResponse});
  });

// set the server to listen on port 8080
app.listen(port, () => console.log(`Listening on port ${port}`));