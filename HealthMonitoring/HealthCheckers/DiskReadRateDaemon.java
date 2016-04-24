import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;


public class DiskReadRateDaemon {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new FileReader("/var/log/TempDiskReadRate.log"));
 
		String line = null;
		int lineCount = 0;
		while ((line = br.readLine()) != null) {
			lineCount++;
			if(lineCount==3) {
				String[] outputLine = line.split(",");
				String[] finalDiskReadRate = outputLine[2].split(" +");
				PrintWriter writer = new PrintWriter("/var/log/DiskReadRate.log", "UTF-8");
				writer.print(finalDiskReadRate[1]);
				writer.close();
			}
		}
	br.close();
	}

}
