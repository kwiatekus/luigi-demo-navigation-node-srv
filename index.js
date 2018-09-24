const express = require('express');
const app = express();
const router = express.Router();
const port = 8080;
const url = require('url');


// url: http://localhost:8080/
app.get('/', (request, response) => response.send('OK'));

// all routes prefixed with /api
app.use('/api', router);

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
    },{
        label: 'Administration',
        pathSegment: 'administration',
        viewUrl: '/assets/dummy.html'
    }];
    
    response.json(nodes);
  });

// set the server to listen on port 8080
app.listen(port, () => console.log(`Listening on port ${port}`));