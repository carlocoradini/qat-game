import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../components/error/ErrorPage";
import Home from "../components/Home";
import Detail from "../components/Detail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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

export default router;