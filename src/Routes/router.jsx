import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Home/ErrorPage";
import Home from "../Pages/Home/Home";
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import MyAddedFoods from "../Pages/MyAddedFoods/MyAddedFoods";
import MyOrderedFoods from "../Pages/MyOrderedFoods/MyOrderedFoods";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";
import SingleFoodPage from "../Pages/SingleFoodPage/SingleFoodPage";
import MyPurchasePage from "../Pages/PurchasePage/MyPurchasePage";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import Menus from "../Pages/Menus/Menus";

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
          path:'/all-foods',
          element: <AllFoodItems></AllFoodItems>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/my-added-food',
          element: <MyAddedFoods></MyAddedFoods>
        },
        {
          path:'/add-food',
          element: <AddFoodItem></AddFoodItem>
        },
        {
          path:'/my-ordered-foods',
          element: <PrivetRoutes><MyOrderedFoods></MyOrderedFoods></PrivetRoutes>
        },
        {
          path:'/single-item/:id',
          element: <SingleFoodPage></SingleFoodPage>
        },
        {
          path:'/purchase/:id',
          element: <PrivetRoutes><MyPurchasePage></MyPurchasePage></PrivetRoutes>
        },
        {
          path:'/update/:id',
          element: <PrivetRoutes><UpdatePage></UpdatePage></PrivetRoutes>,
          loader: ({params}) => fetch(`https://restaurent-server-site.vercel.app/foods/${params.id}`)
        },
        {
          path: '/menu',
          element: <Menus></Menus>
        }
    ]
  },
]);

export default router;