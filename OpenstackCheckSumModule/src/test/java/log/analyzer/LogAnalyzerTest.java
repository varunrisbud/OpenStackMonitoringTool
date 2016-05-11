package log.analyzer;

/**
 * Created by alcohol on 3/17/16.
 */
import org.junit.Test;

import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

import static org.junit.Assert.*;

public class LogAnalyzerTest {
   /* String path = "/media/alcohol/Study/CMPE295B/neutron-0317/neutron/neutron-server.log.1";
    LogAnalyzer logAnalyzer = new LogAnalyzer(path);

    @Test
    public void getUniqueMessagesTest() {
        Map<String, Integer> uniqueMessage = logAnalyzer.getUniqueMessages();
        System.out.println(uniqueMessage.size() + " Unique Messages");
        for(Map.Entry<String, Integer> pair: uniqueMessage.entrySet()) {
            System.out.println(pair.getKey() + "\t" + pair.getValue());
        }

        Map<String, Integer> uniqueIPs = logAnalyzer.getUniqueIPAddresses();
        System.out.println(uniqueIPs.size() + " Unique IPs");
        for(Map.Entry<String, Integer> pair: uniqueIPs.entrySet()) {
            System.out.println(pair.getKey() + "\t" + pair.getValue());
        }
    }

    @Test
    public void getIpAddressTest() {
        String line = "2016-03-13 08:59:49.603 10043 INFO neutron.wsgi [req-17972706-3319-450c-b49c-8de5cdeeb3ce 9780dc13ec6e4cde88f40cef6b5380c2 6ba97f5b6b47468d831af65bceabdbcb - - -] 130.65.159.59 - - [13/Mar/2016 08:59:49] \"GET /v2.0/networks.json?id=27e5c557-afeb-4be7-99aa-3211db80e25a HTTP/1.1\" 200 626 0.151034";
        assertEquals("130.65.159.59", logAnalyzer.getIPAddress(line));
    }*/
}
