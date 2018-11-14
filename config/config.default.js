'use strict';

/**
 * egg-simple-zipkin default config
 * @member Config#simpleZipkin
 * @property {String} SOME_KEY - some description
 */

exports.simpleZipkin = {
  ignorePaths: [],
  // tracer: CustomTracerInstance
  recorder: 'console', // console or http
  httpRecorderOptions: {
    jsonEncoderVersion: 'V2', // V1 or V2
    endpoint: 'localhost:1314/api/v2/spans', // zipkin endpoint
    httpInterval: 1000, // how often to sync spans. optional, defaults to 1000
  },
};
