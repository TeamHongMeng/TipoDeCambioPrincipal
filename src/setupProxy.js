const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api',
        proxy(
        { 
            target: "https://hongmengteam-tipodecambio-scra.herokuapp.com/insertarTipoCambio",
            changeOrigin: true
        }));
};