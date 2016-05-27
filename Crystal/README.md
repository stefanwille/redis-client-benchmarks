# Crystal

I used version Crystal 0.17.4, installed via Homebrew.


## Install

Download the library into this project:

```
$ shards install
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

This is my old result, from Crystal 0.7.2:

```
$ time ./crystal_redis_performance

real  0m1.458s
user  0m0.338s
sys   0m0.086s
```

=> 685,000 cps
