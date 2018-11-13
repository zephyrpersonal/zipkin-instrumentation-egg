'use strict';

const { Tracer, BatchRecorder, ConsoleRecorder, jsonEncoder } = require('zipkin');
const CLSContext = require('zipkin-context-cls');
const { HttpLogger } = require('zipkin-transport-http');

module.exports = (config, app) => {
  const { recorder = 'console', httpRecorderOptions = {}, tracer } = config;

  if (tracer) return tracer;

  const ctxImpl = new CLSContext();
  const _recorder =
    recorder === 'console'
      ? new ConsoleRecorder(message => app.coreLogger.info(`[egg-simple-zipkin] ${message}`))
      : new BatchRecorder({
        logger: new HttpLogger({
          jsonEncoder: jsonEncoder[`JSON_${httpRecorderOptions.jsonEncoderVersion}`],
          endpoint: httpRecorderOptions.endpoint,
          httpInterval: httpRecorderOptions.httpInterval, // how often to sync spans. optional, defaults to 1000
        }),
      });

  return new Tracer({ ctxImpl, recorder: _recorder });
};
