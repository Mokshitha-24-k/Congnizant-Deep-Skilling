package exercise3;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class ExternalApi {

    public String getData(int id) {
        return "Real Data";
    }
}

class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void fetchData(int id) {
        api.getData(id);
    }
}

public class Exercise3Test {

    @Test
    public void testArgumentMatching() {

        ExternalApi mockApi = mock(ExternalApi.class);

       
        MyService service = new MyService(mockApi);

       
        service.fetchData(101);

       
        verify(mockApi).getData(eq(101));

        
        verify(mockApi).getData(anyInt());
    }

    
}
