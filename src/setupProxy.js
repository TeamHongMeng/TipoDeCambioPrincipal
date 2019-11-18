const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/api', 
        { 
            target: 'https://hongmengteam-principal.herokuapp.com',
            secure: false,
            changeOrigin: true
        }));
};