import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import ErrorPage from "./error-page";
import Root from './root';
import HomePage from './HomePage';
import CarDetailsPage from './CarDetailsPage';

const router = createBrowserRouter([
  {
    path: "/WAD_Project/",
    element: <Root />,  
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/WAD_Project/Car-Details/",
            element: <CarDetailsPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);