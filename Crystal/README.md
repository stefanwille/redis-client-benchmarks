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

real  0m1.691s
user  0m1.572s
sys 0m0.103s
```

=> 590,000 cps

