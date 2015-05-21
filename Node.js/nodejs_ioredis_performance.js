"use strict";

var Redis = require('ioredis');

var start = new Date();

// I can't get to 1,000,000 commands in one pipeline, not even to 120,000, because ioredis would just hang.
// Therefore I use 100,000 and hope that this is precise enough.
var N = 100*1000;

var redis = new Redis();

redis.del("foo");

var pipeline = redis.pipeline();
for(var i = 0; i < N; i++) {
  pipeline.set('foo', 'bar');
}
pipeline.exec(function (err, results) {
  // `err` is always null, and `results` is an array of responses
  // corresponding the sequence the commands where queued.
  // Each response follows the format `[err, result]`.

  var end = new Date();
  var elapsedTime = end - start;
  console.log("Elapsed time: " + elapsedTime + "ms");
  console.log("Commands per second: " + Math.round(N * 1000 / elapsedTime));

  redis.disconnect();
});

