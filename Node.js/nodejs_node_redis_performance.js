'use strict';

var Redis = require('redis');

var N = 1000 * 1000;

var redis = Redis.createClient({
    parser: 'javascript' // Pur javascript, no C involved
});

var count = 0;

// Fireing up javascript code needs some startup time and execution of code before
// it runs in a performant way. First the code is lazy compiled and then executed with
// average code. While running the code the jit optimizes that code again.
// The first run should not be looked at, even though it should not take take to long
// to compile everything. Instead, lots of runs should be done and a average should
// be build excluding the first run (force optimization before the first run).
function execute () {
    var start = Date.now();
    var pipeline = redis.batch();
    for (var i = 0; i < N; i++) {
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

        if (count++ < 3) {
            execute();
        } else {
            redis.quit();
        }
    });
}

// Only check the raw pipeline performance from the moment on redis is ready
redis.on('ready', execute);
