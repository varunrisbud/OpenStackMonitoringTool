package main;

import checksum.remotecommandexecution.CommandExecutor;
import database.connection.glance.Images;
import htmlscrapper.ImageCheckSumExtractor;

import java.util.List;

/**
 * Created by alcohol on 3/10/16.
 */
public class VerifyCheckSum {

    private void verifyImage(String imageID) {
        try {
            Images images = new Images();
            String imageLocation = images.getLocationByID(imageID);
            String imageName = images.getNameByID(imageID);
            //System.out.println("Image Name: " + imageName + "\nImage Location" + imageLocation);

            CommandExecutor commandExecutor = new CommandExecutor("student", "Cmpe86754231!", "130.65.159.58");
            final List<String> sha256sum = commandExecutor.executeCommandWithSudo("sha256sum", "Cmpe86754231!", imageLocation);
            if(sha256sum != null && sha256sum.size() > 0) {
                String checkSum = sha256sum.get(0).split("\\s")[0];
               // System.out.println("CheckSum: " + checkSum);

                ImageCheckSumExtractor checkSumExtractor = new ImageCheckSumExtractor();
                checkSumExtractor.verifyCheckSum(imageName, checkSum);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args) {
        VerifyCheckSum verifyCheckSum = new VerifyCheckSum();
        try {
            verifyCheckSum.verifyAllImages();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void verifyAllImages() throws Exception {
        Images glanceImages = new Images();
        List<String> idList = glanceImages.getAllImageIds();
        for (String imageId : idList) this.verifyImage(imageId);
    }

    public String getImageIDFromMessage(String message) {
        String[] splits = message.split("\\s");
        return splits[splits.length - 1];
    }
}
