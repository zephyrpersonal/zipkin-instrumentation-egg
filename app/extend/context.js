'use strict';
const generateTracer = require('../../lib/tracer');
const TRACER_SYMBOL = Symbol('context#zipkinTracer');

module.exports = {
  get zipkinTracer() {
    if (!this[TRACER_SYMBOL]) {
      this[TRACER_SYMBOL] = generateTracer(this.app.config.simpleZipkin, this.app);
    }
    return this[TRACER_SYMBOL];
  },
};
