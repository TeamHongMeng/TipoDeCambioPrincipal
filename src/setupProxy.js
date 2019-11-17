const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('https://hongmengteam-tipodecambio-scra.herokuapp.com', { target: 'https://hongmengteam-principal.herokuapp.com' }));
};