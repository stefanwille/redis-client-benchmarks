# Java with Jedis

## Install

This code needs the [Jedis](https://github.com/xetorthio/jedis) client library.

On MacOs X, install via

```
$ wget https://github.com/xetorthio/jedis/archive/jedis-2.7.2.tar.gz
$ tar xvzf jedis-2.7.2.tar.gz
$ cd jedis-jedis-2.7.2
$ mvn compile
$ cd ..
```


## Build

```
$ javac -classpath jedis-jedis-2.7.2/target/classes/ JavaJedisPerformance.java
```


## Run

```
$ java -classpath .:jedis-jedis-2.7.2/target/classes/ JavaJedisPerformance
```


## My Result

```
$ $ java -classpath .:jedis-jedis-2.7.2/target/classes/ JavaJedisPerformance
Total execution time: 1748ms
```

=> 572,000 cps

