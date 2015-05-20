# C with Hiredis

## Install

This code needs the [Hiredis](https://github.com/redis/hiredis) client library.

On MacOs X, install via

```
$ brew install hiredis
```


## Build

```
$ gcc -Wall -O2 c_hiredis_performance.c -lhiredis -o c_hiredis_performance
```


## Run

```
$ time ./c_hiredis_performance
```


## My Result

```
$ time ./c_hiredis_performance
Connecting...
Connected!
Done

real  0m2.959s
user  0m1.831s
sys 0m0.034s
```

=> 338,000 cps

