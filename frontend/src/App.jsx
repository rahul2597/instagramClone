import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddPost from "./components/AddPost";
import AllPosts from "./components/AllPosts";
import Dash from "./components/Dash";
import IndividualPost from "./components/IndividualPost";
import UpdatePost from "./components/UpdatePost";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dash />, // Default route
    },
    {
      path: "/add-post",
      element: <AddPost />,
    },
    {
      path: "/all-posts",
      element: <AllPosts />,
    },
    {
      path: "/post/:id", // Dynamic route for individual post
      element: <IndividualPost />,
    },
    {
      path: "/update-post/:id", // Dynamic route for updating a post
      element: <UpdatePost />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
