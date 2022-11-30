import React from "react";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";

function App() {
  document.title = "Smartbus";
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </QueryClientProvider>
  );
}

export default App;
