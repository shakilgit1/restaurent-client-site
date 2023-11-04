import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Home/ErrorPage";
import Home from "../Pages/Home/Home";
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/allfoods',
          element: <AllFoodItems></AllFoodItems>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        }
    ]
  },
]);

export default router;