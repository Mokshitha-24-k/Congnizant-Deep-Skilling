package exercise6;

import org.junit.jupiter.api.Test;
import org.mockito.InOrder;

import static org.mockito.Mockito.*;

class ExternalApi {

    public void connect() {
    }

    public void getData() {
    }

    public void disconnect() {
    }
}

class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void process() {
        api.connect();
        api.getData();
        api.disconnect();
    }
}

public class Exercise6Test {

    @Test
    public void testInteractionOrder() {

        ExternalApi mockApi = mock(ExternalApi.class);

        MyService service = new MyService(mockApi);

        service.process();

        InOrder inOrder = inOrder(mockApi);

        inOrder.verify(mockApi).connect();
        inOrder.verify(mockApi).getData();
        inOrder.verify(mockApi).disconnect();
    }
}