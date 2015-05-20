# Crystal

## Install

Download the library into this project:

```
$ crystal deps
```

## Build

```
$ crystal build crystal_redis_performance.cr --release
```

## Run

```
$ time ./crystal_redis_performance
```

## My Result

```
$ time ./crystal_redis_performance

real  0m2.434s
user  0m1.403s
sys 0m0.075s
```

=> 411,000 cps

