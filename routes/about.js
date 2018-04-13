const { parse } = require('url');

exports.about = (server, app) => {
  server.get('/about', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    if(query.lang === 'fr') {
      app.render(req, res, '/about', query);
    } else {
      app.render(req, res, '/about', query);
    }
  });
};