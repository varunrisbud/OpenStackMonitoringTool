import java.io.BufferedReader;
import java.io.InputStreamReader;

public class MemoryUsage {

	public static void main(String[] args) {

		MemoryUsage obj = new MemoryUsage();
		
		String command = "free -m";
		
		String output = obj.executeCommand(command);

		String[] outputLines = output.split("\n");
		String[] memoryUtilizations = outputLines[2].split(" +");

		System.out.print(memoryUtilizations[3]);

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
