# Ruby 2.2.1 with redis-rb

## Install

This code needs the [redis-rb](https://github.com/redis/redis-rb) client library.

On MacOs X, install via

```
$ gem install redis
```

I used version 3.2.1 at the time of this writing.


## Run

```
$ ruby ruby_redisrb_performance.rb
```


## My Result

```
$ $ ruby ruby_redisrb_performance.rb
Elapsed time: 26.786492s
Done
```

=> 37,000 cps

