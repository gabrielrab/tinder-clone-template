import React from "react";
import { Layout } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import IndexPage from "./pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
