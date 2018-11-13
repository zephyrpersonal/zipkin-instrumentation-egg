# egg-simple-zipkin

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-simple-zipkin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-simple-zipkin
[travis-image]: https://img.shields.io/travis/eggjs/egg-simple-zipkin.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-simple-zipkin
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-simple-zipkin.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-simple-zipkin?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-simple-zipkin.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-simple-zipkin
[snyk-image]: https://snyk.io/test/npm/egg-simple-zipkin/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-simple-zipkin
[download-image]: https://img.shields.io/npm/dm/egg-simple-zipkin.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-simple-zipkin

<!--
Description here.
-->

This plugin will apply a global middleware just behind bodyParser

and extend context with a global zipkin tracer

You could get the Tracer by `ctx.zipkinTracer` and share traceId among the request context

## Install

```bash
$ npm i egg-simple-zipkin --save
# or
$ yarn add egg-simple-zipkin
```

## Usage

```js
// {app_root}/config/plugin.js
exports.simpleZipkin = {
  enable: true,
  package: 'egg-simple-zipkin'
}
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.simpleZipkin = {
  ignorePaths: [],  // the middleware will ignore path in this array
  tracer: Tracer // you could pass in your CustomTracerInstance, and thus config below will be ignored
  recorder: 'console', // accept value ['console','batch']
  // if you choose consoleRecorder config below will be ignored
  httpRecorderOptions: {
    jsonEncoderVersion: 'V2', // accept value ['V1','V2']
    endpoint: 'localhost:1314/api/v2/spans', // zipkin endpoint
    httpInterval: 1000 // how often to sync spans. optional, defaults to 1000
  }
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
