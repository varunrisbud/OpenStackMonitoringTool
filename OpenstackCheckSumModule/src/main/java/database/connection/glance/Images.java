package database.connection.glance;

/**
 * Created by alcohol on 3/8/16.
 */

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class Images extends ConnectionClass{

        public Images() throws Exception {
            super();
        }

        public String getNameByID(String imageID) {
            StringBuilder query = new StringBuilder();
            query.append("Select Name, disk_format from images where ID=").append("'").append(imageID).append("'");
            String imageName = "not found";
            try {
                ResultSet resultSet = super.executeQuery(query.toString());
                while (resultSet.next()) {
                    imageName = resultSet.getString("Name") + "." + resultSet.getString("disk_format");
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return imageName;
        }

        public String getLocationByID(String imageID) {
            StringBuilder query = new StringBuilder();
            query.append("Select value from image_locations where image_id=").append("'").append(imageID).append("'");
            String location = "not found";
            try {
                ResultSet resultSet = super.executeQuery(query.toString());
                while (resultSet.next()) {
                    location = resultSet.getString("value").substring(7);

                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return location;
        }

        public List<String> getAllImageIds () {
            List<String> idList = new ArrayList<String>();
            String query = "Select id, disk_format from images";
            try {
                ResultSet resultSet = super.executeQuery(query.toString());
                while (resultSet.next()) {
                    String id = resultSet.getString("id");
                    String diskFormat = resultSet.getString("disk_format");
                    //System.out.println("ID: " + id + "\t Disk Format: " + diskFormat);
                    if(diskFormat.equals("iso")) idList.add(id);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return idList;
        }
}
