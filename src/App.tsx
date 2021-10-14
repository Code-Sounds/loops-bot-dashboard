import Routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { globalStyles } from "./styles/stitches";

const queryClient = new QueryClient();

function App() {
  globalStyles();

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
