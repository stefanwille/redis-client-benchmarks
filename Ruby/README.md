# Ruby 2.2.1 with redis-rb

## Install

This code needs the [redis-rb](https://github.com/redis/redis-rb) and [hiredisrb](https://github.com/redis/hiredis-rb) client libraries.

I have measured redis-rb with the pure Ruby and the Hiredis driver.

Install via

```
$ bundle install
```


## Run

```
$ ruby ruby_redisrb_performance.rb
```

and

```
$ ruby_redisrb_hiredis_performance.rb
```


## My Results

```
$ ruby ruby_redisrb_performance.rb
Elapsed time: 26.786492s
Done
```

=> 37,000 cps


```
$ ruby ruby_redisrb_hiredis_performance.rb
Elapsed time: 6.518653s
Done
```

=> 153,000 cps
