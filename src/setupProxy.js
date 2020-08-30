/* eslint-disable */
const proxy = require('http-proxy-middleware');
const ssoHost = 'http://ws.audioscrobbler.com/';

function onProxyReq(proxyReq, req, res) {
  proxyReq.removeHeader('Origin');
}

module.exports = function(app) {
  app.use(proxy('/2.0', {
    target: ssoHost,
    logLevel: 'debug',
    onProxyReq: onProxyReq,
    changeOrigin: true,
  }));
};
