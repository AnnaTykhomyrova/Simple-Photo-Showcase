const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(express.json());

app.set('port', 8080);
app.set('view engine', 'html');
app.enable('trust proxy');

app.use(
    createProxyMiddleware(['/api'],
    {
      target: "https://api.500px.com/v1/",
      changeOrigin: true
    })
  );

app.use(express.static(path.join(__dirname, '/build')));

// for any other route not available in /build, send the index.html page
app.use((req, res, next) => {
  // disable cache in response
  res.sendFile(`${__dirname}/build/index.html`);
});

// start the server
app.listen(app.get('port'), () => {
  console.log(`Server start on port ${app.get('port')}...`);
});

module.exports = app;