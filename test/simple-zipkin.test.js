'use strict';

const mock = require('egg-mock');
const assert = require('assert');
const { Tracer } = require('zipkin');

describe('test/simple-zipkin.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/simple-zipkin-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should reponse proper header', () => {
    return app
      .httpRequest()
      .get('/')
      .expect('hi, simpleZipkin')
      .expect(200)
      .expect(
        'Access-Control-Allow-Headers',
        [
          'Origin',
          'Accept',
          'X-Requested-With',
          'X-B3-TraceId',
          'X-B3-ParentSpanId',
          'X-B3-SpanId',
          'X-B3-Sampled',
        ].join(', ')
      );
  });

  it('should get tracer from ctx', () => {
    const ctx = app.mockContext();
    assert(ctx.zipkinTracer instanceof Tracer);
  });

});
