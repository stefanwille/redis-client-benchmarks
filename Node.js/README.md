# Node.js / io.js with ioredis

## Note

The Node.js benchmark derives from the others because I could only run 100,000 commands in one pipeline, not 1,000,000. With more than 100,000, the Node.js client would just hang. I just have to hope that this lower number of commands gives enough precision.


## Runtime: Node.js vs io.js

I tried both Node.js 0.12.2 and io.js 2.0.1.


## Install


This code needs the [ioredis](https://github.com/luin/ioredis) client library.

```
$ npm install ioredis
```



## Build

```
$ gcc -Wall -O2 c_hiredis_performance.c -lhiredis -o c_hiredis_performance
```


## Run

```
$ iojs ./nodejs_ioredis_performance.js
```


## My Results

### Node.js

```
$ node ./nodejs_ioredis_performance.js
Elapsed time: 1169ms
Commands per second: 85543
```

=> 88,000 cps


### io.js

```
$ iojs ./nodejs_ioredis_performance.js
Elapsed time: 1075ms
Commands per second: 93023
```

=> 93,000 cps

