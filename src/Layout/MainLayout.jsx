import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="font-lora">
            <Navbar></Navbar>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <div><Toaster/></div>
        </div>
    );
};

export default MainLayout;