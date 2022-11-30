import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  document.title = "Smartbus";
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <CssBaseline />
        <div className="App">routes here</div>
      </>
    </QueryClientProvider>
  );
}

export default App;
