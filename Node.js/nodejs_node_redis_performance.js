'use strict';

var Redis = require('redis');

function benchmark () {
  var start = new Date();
  var pipeline = redis.batch();
  for(var i = 0; i < N; i++) {
    pipeline.set('foo', 'bar');
  }
  pipeline.exec(function (err, results) {
    // `err` is always null, and `results` is an array of responses
    // corresponding the sequence the commands where queued.
    // Each response is either a error or a result

    var end = Date.now();
    var elapsedTime = end - start;
    console.log('Elapsed time: ' + elapsedTime + 'ms');
    console.log('Commands per second: ' + Math.round(N * 1000 / elapsedTime));

    redis.quit();
  });
}

var N = 1000 * 1000;

var redis = Redis.createClient({
    parser: 'javascript' // Pur javascript, no C involved
});

// Only check the raw pipeline performance from the moment on redis is ready
redis.on('ready', benchmark);
