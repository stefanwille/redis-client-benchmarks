
import redis.clients.jedis.HostAndPort;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.Pipeline;
import redis.clients.jedis.Response;
import redis.clients.jedis.Tuple;
import redis.clients.jedis.exceptions.JedisDataException;
import redis.clients.util.SafeEncoder;
import java.util.List;

public class JavaJedisPerformance {
  public static final int N = 1000000;

  public static void main(String[] args) {

    System.out.println("Hello");
    long startTime = System.currentTimeMillis();
    Jedis jedis = new Jedis("localhost");
    Pipeline p = jedis.pipelined();
    for(int i= 0; i < N; i++) {
      p.set("foo", "" + i);
    }
    List<Object> results = p.syncAndReturnAll();
    long endTime = System.currentTimeMillis();
    System.out.println("Total execution time: " + (endTime-startTime) + "ms");
  }
}

