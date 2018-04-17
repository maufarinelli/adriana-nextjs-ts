const { parse } = require('url');

exports.blog = (server, app) => {
  server.get('/blog', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    if(query.lang === 'fr') {
      app.render(req, res, '/blog', query);
    } else {
      app.render(req, res, '/blog', query);
    }
  });
};

exports.blogFr = (server, app) => {
  server.get('/blog-fr', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    if(query.lang === 'fr') {
      app.render(req, res, '/blog', query);
    } else {
      app.render(req, res, '/blog', query);
    }
  });
};