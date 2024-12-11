// Dependencias
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Componentes
import App from "./App";
import ErrorPage from "./components/error/ErrorPage";
import Home from "./components/Home";
import Detail from "./components/Detail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <Home />
        },
        {
          path: "detail",
          element: <Detail />
        },
      ],
    } 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} /> 
  </React.StrictMode>
);

reportWebVitals();


/**
 *<React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
  No caso de precisarmos de context;
 */