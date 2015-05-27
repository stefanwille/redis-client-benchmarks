# Crystal

I used a Crystal 0.7.2 prerelease version.


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

real  0m1.458s
user  0m0.338s
sys   0m0.086s
```

=> 685,000 cps

