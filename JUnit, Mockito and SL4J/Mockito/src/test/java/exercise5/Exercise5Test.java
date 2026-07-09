package exercise5;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
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

    public String fetchData() {
        return api.getData();
    }
}

public class Exercise5Test {

    @Test
    public void testMultipleReturns() {

        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        
        when(mockApi.getData())
                .thenReturn("First Call")
                .thenReturn("Second Call")
                .thenReturn("Third Call");

       
        MyService service = new MyService(mockApi);

        
        assertEquals("First Call", service.fetchData());
        assertEquals("Second Call", service.fetchData());
        assertEquals("Third Call", service.fetchData());
    }
}