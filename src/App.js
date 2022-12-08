import React from "react";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import NavHome from "./pages/NavHome/NavHome";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { LayoutContainer, TempPhoneContainer } from "./AppStyle";

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
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/NavHome" element={<NavHome />} />
            </Routes>
          </>
        </QueryClientProvider>
      </LayoutContainer>
    </TempPhoneContainer>
  );
}

export default App;
