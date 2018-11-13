'use strict';

const assert = require('assert');

module.exports = app => {
  const index = app.config.coreMiddleware.indexOf('bodyParser');
  assert(index >= 0, 'bodyParser 中间件必须存在');

  app.config.coreMiddleware.splice(index, 0, 'zipkin');
};
