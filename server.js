const express = require('express');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { about, aPropos } = require('./routes/about');
const { blog, blogFr } = require('./routes/blog');
const { contact, contactFr } = require('./routes/contact');

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

  about(server, app);
  aPropos(server, app);
  blog(server, app);
  blogFr(server, app);
  contact(server, app);
  contactFr(server, app);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3001, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001')
  });
});