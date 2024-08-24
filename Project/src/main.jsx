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
    path: "/",
    element: <Root />,  
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "car-details",
        element: <CarDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);