import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import Landing from "./pages/landing";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("token");
  return auth ? children : <Navigate to="/" />;
}

function HasLoginRoute({ children }) {
  const auth = localStorage.getItem("token");
  return auth ? <Navigate to="/home" /> : children;
}

const Routers = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <BrowserRouter>
        <div className="flex-1 flex">
          <Routes>
            <Route
              path="/"
              element={
                <HasLoginRoute>
                  <Landing />
                </HasLoginRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
