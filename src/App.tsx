import Routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { globalStyles } from "./styles/stitches";
import { useEffect } from "react";
import { socket } from "./services/socket";

const queryClient = new QueryClient();

function App() {
  globalStyles();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to socket");
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          zIndex: 99999,
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
