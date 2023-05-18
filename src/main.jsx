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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () =>
        //   fetch(
        //     "https://kitchen-house-server-side-tanvir27.vercel.app/chefDetails"
        //   ),
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
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      // {
      //   path: "/recipe/:id",
      //   element: (
      //     <PrivateRoute>
      //       <Recipe></Recipe>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://kitchen-house-server-side-tanvir27.vercel.app/chefDetails/${params.id}`
      //     ),
      // },
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
