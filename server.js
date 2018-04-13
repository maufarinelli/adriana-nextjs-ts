const express = require('express');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

//const { about } = require('./routes/about');

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    if(query.lang === 'fr') {
      app.render(req, res, '/index', query);
    } else {
      app.render(req, res, '/index', query);
    }
  });

  //about(server, app);

  server.get('/a-propos', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    if(query.lang === 'fr') {
      app.render(req, res, '/about', query);
    } else {
      app.render(req, res, '/about', query);
    }
  });

  server.listen(3001, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001')
  });
});