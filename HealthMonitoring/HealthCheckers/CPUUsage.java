import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.RandomAccessFile;
import java.text.DecimalFormat;

public class CPUUsage {

	public static void main(String[] args) {

		CPUUsage obj = new CPUUsage();
		
		String command = "mpstat";
		
		String output = obj.executeCommand(command);

		String[] outputLines = output.split("\n");
		String[] utilizations = outputLines[3].split(" +");
		Double cpuUtilization = Double.parseDouble(utilizations[3]) + Double.parseDouble(utilizations[4]) + Double.parseDouble(utilizations[5]);

		DecimalFormat df = new DecimalFormat("#.##");      

		Double finalValue = Double.valueOf(df.format(cpuUtilization));
		
		RandomAccessFile file;
		try {
			file = new RandomAccessFile("/var/log/CPUUsage.log", "rws");
			 byte[] text = new byte[(int) file.length()];
			    file.readFully(text);
			    file.seek(0);
			    file.writeBytes(finalValue.toString() + " ");
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
