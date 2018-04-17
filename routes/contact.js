const { parse } = require('url');

exports.contact = (server, app) => {
  server.get('/contact', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    if(query.lang === 'fr') {
      app.render(req, res, '/contact', query);
    } else {
      app.render(req, res, '/contact', query);
    }
  });
};

exports.contactFr = (server, app) => {
  server.get('/contact-fr', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    if(query.lang === 'fr') {
      app.render(req, res, '/contact', query);
    } else {
      app.render(req, res, '/contact', query);
    }
  });
};