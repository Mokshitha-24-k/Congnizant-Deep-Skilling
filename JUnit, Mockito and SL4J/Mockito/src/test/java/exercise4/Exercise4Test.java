package exercise4;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class ExternalApi {

    public void saveData() {
        System.out.println("Saving Data...");
    }
}

class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void save() {
        api.saveData();
    }
}

public class Exercise4Test {

    @Test
    public void testVoidMethod() {

        
        ExternalApi mockApi = mock(ExternalApi.class);

        
        doNothing().when(mockApi).saveData();

        
        MyService service = new MyService(mockApi);

      
        service.save();

        
        verify(mockApi).saveData();
    }
}
