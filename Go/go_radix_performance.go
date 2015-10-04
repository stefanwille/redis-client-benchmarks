package main

import (
	"fmt"
	"github.com/fzzy/radix/redis"
	"time"
)

const N = 1000000

func main() {
	c, err := redis.DialTimeout("tcp", "127.0.0.1:6379", time.Duration(10)*time.Second)
	if err != nil {
		panic(fmt.Sprintln("error:", err))
	}
	defer c.Close()

	for i := 0; i < N; i++ {
		c.Append("set", "foo", "bar")
	}
	for i := 0; i < N; i++ {
		c.GetReply()
	}
	fmt.Println("Done")
}
