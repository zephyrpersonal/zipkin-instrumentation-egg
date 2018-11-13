'use strict';

const { KoaInstrumentation } = require('zipkin-instrumentation-koa-slim');
const assert = require('assert');

module.exports = (options, app) => {
  const ignorePaths = options.ignorePaths || [];

  assert(Array.isArray(ignorePaths), 'ignorePaths should be Array[String]');

  return async (ctx, next) => {
    if (ignorePaths.indexOf(ctx.path) > -1) {
      next();
      return;
    }
    await KoaInstrumentation.middleware({ tracer: ctx.zipkinTracer, serviceName: app.name })(ctx, next);
  };
};
