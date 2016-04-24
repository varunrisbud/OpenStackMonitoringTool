import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.HttpURLConnection;
import java.lang.StringBuilder;
import java.net.ConnectException;
import java.net.MalformedURLException;
import java.io.IOException;
import java.net.ProtocolException;
import java.io.FileReader;

public class GetGlanceAPIStatus {
	public static void main(String[] args) {
		try {
			GetGlanceAPIStatus ob = new GetGlanceAPIStatus();
			String authenticationToken = ob.getAuthenticationToken();
			URL url = new URL("http://130.65.159.58:9292/");
  			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-Type", "application/json");
			conn.setRequestProperty("X-Auth-Token", authenticationToken);
  			if (conn.getResponseCode() != 300) {
    				throw new RuntimeException();
  			}
  			conn.disconnect();
  			System.out.print("\"Glance\":\"Up\"");
		}
		catch(ConnectException e) {
			System.out.print("\"Glance\":\"Down\"");
		}
		catch(MalformedURLException e) {
			System.out.print("\"Glance\":\"Down\"");
		}
		catch(IOException e) {
			System.out.print("\"Glance\":\"Down\"");
		}
	}

	public String getAuthenticationToken() {
		BufferedReader br = null;
		int counter = 0;
		try {
			String sCurrentLine;
			br = new BufferedReader(new FileReader("/var/log/AuthenticationToken.log"));
			while ((sCurrentLine = br.readLine()) != null) {
				counter++;
				if(counter==6) {
					String[] tempAuthToken = sCurrentLine.split(":");
					String AuthToken = tempAuthToken[1].replaceAll("\\s+","").replaceAll("\"","");
					return AuthToken;
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}

