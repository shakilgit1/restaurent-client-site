import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosMethod = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
  });

const useAxios = () => {
  const {logOut} = useAuth();

   const navigate = useNavigate();

   useEffect(() => {
    axiosMethod.interceptors.response.use( res => {
        return res;
     }, error =>{
        if(error.response.status === 401 || error.response.status === 403){
            console.log('logout the user');
            logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            })
        }
     })
   }, [logOut, navigate])
    return axiosMethod;
};

export default useAxios;