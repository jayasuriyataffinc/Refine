import React from "react";
import {
  Refine,
  AuthProvider,
  AuthActionResponse,
  CheckResponse,
  OnErrorResponse,
} from "@refinedev/core";
import "@refinedev/antd/dist/reset.css";
import Login from "./pages/Login/Login";
import { BrowserRouter, redirect, Routes, Route } from "react-router-dom";
import Home from "./pages/Login/Home";
import routerProvider from "@refinedev/react-router-v6";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./pages/Login/SignUp";



const authProvider: AuthProvider = {
  login: async ({ username, password }: any): Promise<AuthActionResponse> => {
    if (username === "jayasuriya@gmail.com" && password === " ") {
      localStorage.setItem("auth", "true");

      if (localStorage.getItem("auth")) {
        return {
          success : true,
          redirectTo: "/home",
        };
      }
    }
    
    alert("Login failed");
    return {
        success: false,
        error: {
            message: "Login failed",
            name: "Invalid username or password",
        },
    };
  },

  logout: async (): Promise<AuthActionResponse> => {
    localStorage.removeItem("auth");
    return Promise.resolve({ success: true });
  },

  getPermissions: async () => Promise.resolve(),
  check: function (val?: any): Promise<CheckResponse> {
    throw new Error("Function not implemented.");
  },
  onError: function (error: any): Promise<OnErrorResponse> {
    throw new Error("Function not implemented.");
  },
};

const App: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <>
      <BrowserRouter>
        <Refine authProvider={authProvider} routerProvider={routerProvider}>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>

            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </Refine>
      </BrowserRouter>
    </>
  );
};

export default App;
