import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLogging {

    private static final Logger logger =
            LoggerFactory.getLogger(ParameterizedLogging.class);

    public static void main(String[] args) {

        String name = "Mokshitha";
        int age = 20;
        double cgpa = 9.1;

        logger.info("Student Name: {}", name);
        logger.info("Age: {}", age);
        logger.info("CGPA: {}", cgpa);

        logger.info("Student {} has CGPA {}", name, cgpa);
    }
}