import React from "react";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import NavHome from "./pages/NavHome/NavHome";
import { LayoutContainer, TempPhoneContainer } from "./styles/styled";

function App() {
  document.title = "Smartbus";
  const queryClient = new QueryClient();
  return (
    <TempPhoneContainer>
      <LayoutContainer>
        <QueryClientProvider client={queryClient}>
          <>
            <CssBaseline />
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/NavHome' element={<NavHome />} />
            </Routes>
          </>
        </QueryClientProvider>
      </LayoutContainer>
    </TempPhoneContainer>
  );
}

export default App;
