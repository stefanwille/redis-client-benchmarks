# Node.js (io.js) with Ioredis

## Install


This code needs the [ioredis](https://github.com/luin/ioredis) client library.

```
$ npm install ioredis
```

I used io.js 2.0.1 instead of Node.js.


## Build

```
$ gcc -Wall -O2 c_hiredis_performance.c -lhiredis -o c_hiredis_performance
```


## Run

```
$ iojs ./nodejs_ioredis_performance.js
```


## My Result

```
$ iojs ./nodejs_ioredis_performance.js
Elapsed time: 1075ms
Commands per second: 93023
```

=> 93,000 cps

