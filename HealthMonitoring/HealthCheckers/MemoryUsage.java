import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.RandomAccessFile;
import java.text.DecimalFormat;

public class MemoryUsage {

	public static void main(String[] args) {

		MemoryUsage obj = new MemoryUsage();
		
		String command = "free -m";
		
		String output = obj.executeCommand(command);

		String[] outputLines = output.split("\n");
		String[] memoryUtilizations = outputLines[2].split(" +");
		String[] totalMemory = outputLines[1].split(" +");
		int memory = Integer.parseInt(totalMemory[1]);
		int freeMemory = Integer.parseInt(memoryUtilizations[3]);
		int usedMemory = memory - freeMemory;
		double percentage = (usedMemory/(double) memory) * 100.00;		
		DecimalFormat df = new DecimalFormat("#.##");
		Double finalValue = Double.valueOf(df.format(percentage));				

		RandomAccessFile file;
		try {
			file = new RandomAccessFile("/var/log/MemoryUsage.log", "rws");
			 byte[] text = new byte[(int) file.length()];
			    file.readFully(text);
			    file.seek(0);
			    file.writeBytes(Double.toString(finalValue)+ " ");
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

	private String executeCommand(String command) {

		StringBuffer output = new StringBuffer();

		Process p;
		try {
			p = Runtime.getRuntime().exec(command);
			p.waitFor();
			BufferedReader reader = 
                            new BufferedReader(new InputStreamReader(p.getInputStream()));

                        String line = "";			
			while ((line = reader.readLine())!= null) {
				output.append(line + "\n");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return output.toString();

	}

}
