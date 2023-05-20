import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout.jsx";

import Blog from "./components/Blog/Blog.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";

import AuthProvider from "./components/AuthProvider/AuthProvider";
import Home from "./components/Home/Home";
import AddToys from "./components/AddToys/AddToys";
import MyToys from "./components/MyToys/MyToys";
import AllToys from "./components/AllToys/AllToys";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UpdateToyDetails from "./components/UpdateToyDetails/UpdateToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/editToys",
        element: (
          <PrivateRoute>
            <UpdateToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/toys"),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
