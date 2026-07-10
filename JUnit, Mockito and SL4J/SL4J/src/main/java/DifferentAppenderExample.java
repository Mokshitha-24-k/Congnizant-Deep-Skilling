import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DifferentAppenderExample {

    private static final Logger logger =
            LoggerFactory.getLogger(DifferentAppenderExample.class);

    public static void main(String[] args) {

        logger.trace("This is a TRACE message");
        logger.debug("This is a DEBUG message");
        logger.info("This is an INFO message");
        logger.warn("This is a WARNING message");
        logger.error("This is an ERROR message");

    }
}