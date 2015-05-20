# Go

## Install

```
$ go get github.com/fzzy/radix/redis
$ github.com/garyburd/redigo/redis
```


## Build

```
$ go build go_radix_performance.go
$ go build go_redigo_performance.go
```


## Run

```
$ time ./go_radix_performance
$ time ./go_redigo_performance
```


## My Results

```
$ time ./go_radix_performance
Done

real  0m10.829s
user  0m3.855s
sys 0m6.790s
```

=> 92,000 cps


```
$ time ./go_redigo_performance
Connected!
Done

real  0m2.016s
user  0m1.002s
sys 0m0.138s
```

=> 497,000 cps




