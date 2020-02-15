"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

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
var port = 1337;
app.listen(port, function () {
  console.log('App listening on port ' + port + '.');
});