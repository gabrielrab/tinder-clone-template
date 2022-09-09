import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import IndexPage from "./pages";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import MatchPage from "./pages/matchs";
import ConfigPage from "./pages/config";
import { isAuthenticated } from "./services/auth";
import { AccountProvider } from "./services/context";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default function Router() {
  return (
    <BrowserRouter>
      <AccountProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <IndexPage />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/match"
            element={
              <PrivateRoute>
                <MatchPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/config"
            element={
              // <PrivateRoute>
              <ConfigPage />
              // </PrivateRoute>
            }
          />
        </Routes>
      </AccountProvider>
    </BrowserRouter>
  );
}
