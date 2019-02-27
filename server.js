var express = require('express');
var path = require('path')
var serveStatic = require('serve-static');
var expressStaticGzip = require('express-static-gzip');

app = express();
app.use("/", expressStaticGzip(path.join(__dirname + "/dist"), {
    enableBrotli: true
}))

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);
