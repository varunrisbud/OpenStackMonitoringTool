package htmlscrapper;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by alcohol on 3/9/16.
 */
public class ImageCheckSumExtractor {
    public void verifyCheckSum(String imageName, String calculatedCheckSum) throws Exception {

        String url = "http://checksums.remo-ribeli.ch/sitemap.html";
        //print("Fetching %s...", url);
        String nextUrl = this.getUrlWithName(url, imageName);
        //System.out.println("Next URL: " + nextUrl);
        String result;
        if(!nextUrl.equals("Not Found") && isContentPresent(nextUrl, calculatedCheckSum)) result = imageName + " Image is Verified";
        else {
            result = "Warning " + imageName+ " Image is Unverified";
            this.writeToLog(result);
        }
    }

    public String getUrlWithName(String urlToCrawl, String matchString) throws IOException {
        Document doc = Jsoup.connect(urlToCrawl).get();
        Elements links = doc.select("a[href]");
        String imageLink = "Not Found";

        //print("\nLinks: (%d)", links.size());
        for (Element link : links) {
            //print(" * a: <%s>  (%s)", link.attr("abs:href"), link.text());
            if(link.text().equals(matchString)) {
                imageLink = link.attr("abs:href");
                break;
            }
        }

        //print("\nBody: (%s)", doc.body().toString().contains("d942fd8a056f635062899b58e9e875eb89eaec9be09a0fefa713f4e162bb647e") ? "yes":"no");
        return imageLink;
    }

    private boolean isContentPresent(String urlToCrawl, String matchString) throws IOException {
        Document doc = Jsoup.connect(urlToCrawl).get();
        //System.out.println("Match String " + matchString);
        //System.out.println(doc.select("meta[name]").toString());
        return doc.select("meta[name]").toString().contains(" " + matchString + ",");
    }

    private void print(String msg, Object... args) {
        System.out.println(String.format(msg, args));
    }

    private String trim(String s, int width) {
        if (s.length() > width)
            return s.substring(0, width-1) + ".";
        else
            return s;
    }

    private void writeToLog(String input) {
        FileWriter fw = null;
        BufferedWriter bw = null;
        PrintWriter out = null;
        try {
            fw = new FileWriter("/var/log/imageCheckSum/imagesCheckSum.log", true);
            bw = new BufferedWriter(fw);
            out = new PrintWriter(bw);
            out.println(input);
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        finally {
            if(out != null)
                out.close();
            try {
                if(bw != null)
                    bw.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if(fw != null)
                    fw.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
