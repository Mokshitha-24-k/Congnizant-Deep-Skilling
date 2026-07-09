package exercise2;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class ExternalApi {

    public String getData() {
        return "Real Data";
    }
}

class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void fetchData() {
        api.getData();
    }
}

public class Exercise2Test {

    @Test
    public void testVerifyInteraction() {

        ExternalApi mockApi = mock(ExternalApi.class);

        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }
}