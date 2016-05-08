import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.RandomAccessFile;


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
				RandomAccessFile file;
				try {
					file = new RandomAccessFile("/var/log/DiskReadRate.log", "rws");
					 byte[] text = new byte[(int) file.length()];
					    file.readFully(text);
					    file.seek(0);
					    file.writeBytes(finalDiskReadRate[1]+ " ");
					    file.write(text);
					    file.close();
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	br.close();
	}

}
