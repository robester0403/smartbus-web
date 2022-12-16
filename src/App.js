import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import NavHome from "./pages/NavHome/NavHome";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import RouteDetails from "./pages/RouteDetails/RouteDetails";
import SetupPage from "./pages/SetupPage/SetupPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import IntroPage from "./pages/IntroPage/IntroPage";
import { LayoutContainer, TempPhoneContainer } from "./AppStyle";

function App() {
  document.title = "Smartbus";
  const queryClient = new QueryClient();
  return (
    <HelmetProvider>
      <TempPhoneContainer>
        <LayoutContainer>
          <QueryClientProvider client={queryClient}>
            <Helmet>
              <title>Learning React Helmet!</title>
              <meta name='SmartBus' content='The only bus app you will need.' />
            </Helmet>
            <>
              <CssBaseline />
              <Routes>
                <Route path='/' element={<IntroPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/navhome' element={<NavHome />} />
                <Route path='/routedetails' element={<RouteDetails />} />
                <Route path='/setuppage  ' element={<SetupPage />} />
                <Route path='/errorpage' element={<ErrorPage />} />
                <Route path='*' element={<ErrorPage />} />
              </Routes>
            </>
          </QueryClientProvider>
        </LayoutContainer>
      </TempPhoneContainer>
    </HelmetProvider>
  );
}

export default App;
