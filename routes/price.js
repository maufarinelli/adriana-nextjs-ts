const { parse } = require('url');

exports.price = (server, app) => {
  server.get('/price', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    if(query.lang === 'fr') {
      app.render(req, res, '/price', query);
    } else {
      app.render(req, res, '/price', query);
    }
  });
};

exports.prix = (server, app) => {
  server.get('/prix', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    if(query.lang === 'fr') {
      app.render(req, res, '/price', query);
    } else {
      app.render(req, res, '/price', query);
    }
  });
};