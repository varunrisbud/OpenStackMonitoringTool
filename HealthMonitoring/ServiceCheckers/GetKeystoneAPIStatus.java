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

public class GetKeystoneAPIStatus {
	public static void main(String[] args) {
		try {
			GetKeystoneAPIStatus ob = new GetKeystoneAPIStatus();
			String authenticationToken = ob.getAuthenticationToken();
			URL url = new URL("http://130.65.159.58:5000/v3/services");
  			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-Type", "application/json");
			conn.setRequestProperty("X-Auth-Token", authenticationToken);
  			if ((conn.getResponseCode() != 200) && (conn.getResponseCode() != 401) ) {
				System.out.println(conn.getResponseCode()+ " "+ authenticationToken);
    				throw new RuntimeException();
  			}
  			conn.disconnect();
  			System.out.print("\"Keystone\":\"Up\"");
		}
		catch(ConnectException e) {
			System.out.print("\"Keystone\":\"Down\"");
		}
		catch(MalformedURLException e) {
			System.out.print("\"Keystone\":\"Down\"");
		}
		catch(IOException e) {
			System.out.print("\"Keystone\":\"Down\"");
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

