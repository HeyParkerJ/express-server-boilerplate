"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _papaparse = _interopRequireDefault(require("papaparse"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json({
  limit: '50mb'
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '50mb',
  extended: true,
  paremeterLimit: 50000
}));
app.use((0, _cors["default"])());
app.get('/healthcheck', function (req, res) {
  res.send(200, "Healthy");
});
app.get('/csv', function (req, res) {
  var filePath = _path["default"].resolve(process.cwd(), 'data/strong.csv');

  _fs["default"].stat(filePath, function (error) {
    if (error) {
      console.error('we got an error with the file path:', filePath, 'Error:', error);
      res.status(404).send(error);
    } else {
      _fs["default"].readFile(filePath, 'utf8', function (error, file) {
        if (error) {
          console.error('Error reading file ' + filePath, error);
          res.status(500).send(error);
        } else {
          _papaparse["default"].parse(file, {
            complete: function complete(results) {
              console.log('finished', results.data);
              res.status(200).send(results);
            }
          });
        }
      });
    }
  });
});
var port = 1337;
app.listen(port, function () {
  console.log('App listening on port ' + port + '.');
});