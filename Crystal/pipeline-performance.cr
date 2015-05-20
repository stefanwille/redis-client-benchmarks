require "redis"

N = 1_000_000

redis = Redis.new
redis.pipelined do |pipeline|
  N.times do |i|
    pipeline.set("foo", "bar")
  end
end
