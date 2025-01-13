// Dependencias
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/scss/bootstrap.scss';


// Componentes
import App from "./App";
import ErrorPage from "./components/error/ErrorPage";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Game from "./components/Game";

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
        {
          path: "game",
          element: <Game />
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