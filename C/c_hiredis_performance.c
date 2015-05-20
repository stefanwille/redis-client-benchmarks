#include <stdio.h>
#include <hiredis/hiredis.h>

const int N = 1000000;

int main () {
  printf("Connecting...\n");
  redisContext *redis = redisConnect("localhost", 6379);
  if(redis->err) {
    puts(redis->errstr);
    char *p = redis->errstr;
    while(*p) {
      printf("%x ", (int) (*p++));
    }
    printf("\n");
  } else {
    puts("Connected!");
    // void *redisCommand(redisContext *c, const char *format, ...);

    for(int i = 0; i < N; i++) {
      redisAppendCommand(redis,"SET foo bar");
    }

    for(int i = 0; i < N; i++) {
      redisReply *reply;
      redisGetReply(redis, (void**) &reply); // reply for SET
      freeReplyObject(reply);
    }

    puts("Done");
  }
}

