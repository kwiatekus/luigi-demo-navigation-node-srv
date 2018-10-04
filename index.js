const express = require('express');
const app = express();
const router = express.Router();
const port = 8080;
const url = require('url');


// url: http://localhost:8080/
app.get('/', (request, response) => response.send('OK'));

// all routes prefixed with /api
app.use('/api', router);

  // this array is used for identification of allowed origins in CORS
  const originWhitelist = [
    'http://localhost:4200',
    'https://tractors-and-more.us-east.stage.cf.yaas.io',
    'https://tractors.us-east.stage.cf.yaas.io'
  ];

  // middleware CORS handling route that all requests pass through
  router.use((request, response, next) => {
    let origin = request.headers.origin;
    
    if (originWhitelist.indexOf(origin) > -1) {
      response.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    response.setHeader('Access-Control-Allow-Methods', 'GET');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

router.get('/navigation', (request, response) => {
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var email = parameters.email;
    
    var nodes = [{
        label: 'Catalog Manager',
        pathSegment: 'catmanager',
        viewUrl: '/assets/dummy.html'
    },{
        label: 'Product Variants',
        pathSegment: 'variants',
        viewUrl: '/assets/dummy.html'
    },{
        label: 'Units',
        pathSegment: 'units',
        viewUrl: '/assets/dummy.html'
    }];
    response.json(nodes);
  });




// set the server to listen on port 8080
app.listen(port, () => console.log(`Listening on port ${port}`));