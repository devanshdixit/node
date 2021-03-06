'use strict';

const common = require('../common');

if (!common.hasCrypto)
  common.skip('missing crypto');

if (!common.enoughTestMem)
  common.skip('Insufficient memory for async_hooks benchmark test');

const runBenchmark = require('../common/benchmark');

runBenchmark('async_hooks',
             [
               'asyncHooks=all',
               'connections=50',
               'method=trackingDisabled',
               'n=10',
               'type=async-resource',
               'asyncMethod=async'
             ],
             {});
