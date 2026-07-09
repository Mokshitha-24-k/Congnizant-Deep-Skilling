package exercise7;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class ExternalApi {

    public void deleteData() {
    }
}

class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void delete() {
        api.deleteData();
    }
}

public class Exercise7Test {

    @Test
    public void testVoidMethodException() {

        ExternalApi mockApi = mock(ExternalApi.class);

        doThrow(new RuntimeException("Delete Failed"))
                .when(mockApi)
                .deleteData();

        MyService service = new MyService(mockApi);

        assertThrows(RuntimeException.class, () -> service.delete());

        verify(mockApi).deleteData();
    }
}
