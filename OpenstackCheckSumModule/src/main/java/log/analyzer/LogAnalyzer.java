package log.analyzer;

import java.io.*;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by alcohol on 3/17/16.
 */
public class LogAnalyzer {
    File logFile;
    Map<String, Integer> uniqueMessage = new HashMap<String, Integer>();
    Map<String, Integer> uniqueIPAddresses = new HashMap<String, Integer>();

    public LogAnalyzer(String path) {
        this.logFile = new File(path);
    }

    public Map<String, Integer> getUniqueIPAddresses() {
        return uniqueIPAddresses;
    }

    public Map<String, Integer> getUniqueMessage() {
        return uniqueMessage;
    }

    public Map<String, Integer> getUniqueMessages() {
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(logFile)));
            String line = null;
            while((line = br.readLine()) != null) {
                String message = this.getMessage(line);
                String ipAddr = this.getIPAddress(line);
                if(uniqueMessage.containsKey(message)) {
                    int frequency = uniqueMessage.get(message);
                    uniqueMessage.put(message, ++frequency);
                }
                else uniqueMessage.put(message, 1);

                if(uniqueIPAddresses.containsKey(ipAddr)) {
                    int frequency = uniqueIPAddresses.get(ipAddr);
                    uniqueIPAddresses.put(ipAddr, ++frequency);
                }
                else uniqueIPAddresses.put(ipAddr, 1);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return uniqueMessage;
    }

    public String getIPAddress(String line) {
        String ipAddressPattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
        Pattern pattern = Pattern.compile(ipAddressPattern);
        Matcher matcher = pattern.matcher(line);
        if (matcher.find()) return matcher.group();
        else return "0.0.0.0";
    }

    private String getMessage(String line) {
        int startQuote = line.indexOf("\"") + 1;
        int endQuote = line.lastIndexOf("\"");
        if(startQuote < endQuote && startQuote > -1 && endQuote > -1) return line.substring(startQuote, endQuote);
        return line;
    }
}
