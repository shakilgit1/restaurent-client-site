import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span><span className="loading loading-spinner loading-lg mx-auto text-center flex mt-8"></span></span>
    }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoutes;

PrivetRoutes.propTypes = {
    children: PropTypes.node
  }