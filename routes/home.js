const { parse } = require('url');

exports.home = (server, app) => {
  server.get('/', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    if(query.lang === 'fr') {
      app.render(req, res, '/index', query);
    } else {
      app.render(req, res, '/index', query);
    }
  });
};