import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {

    const {signInUser, googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      AOS.init({duration:"1000", delay:"500"});
    
    }, []);

    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log( email, password);

        signInUser(email, password)
        .then(() => {
            // console.log(res.user);
            e.target.reset();
            navigate(location?.state ? location.state : '/');
            return toast.success('Logged in success');
            
        })
        .catch((error) =>{
            // console.log(error.message);
            return toast.error(error.message);
            
        })
        
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(() =>{
            navigate(location?.state ? location.state : '/');
            return toast.success('Logged in success');
        })
        .catch(error =>{
            return toast.error(error.message);
        })
    }


    return (
        <div className="hero min-h-screen">
      <div data-aos="fade-down" className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold px-12 mb-4 text-blue-500">Login now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black ">
          <form onSubmit={handleLogin} className="card-body">
           
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-white">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>

            <div>
                <p className="text-xl text-center mt-3 text-white">Sign in with <Link onClick={handleGoogleLogin} className="text-blue-600 font-bold">Google</Link></p>
            </div>
             
            </div>
          </form>
          <p className="text-center mb-5 text-white">New to this website? Please <Link className="text-blue-600 font-bold text-lg" to='/register'>Register</Link></p>
        </div>
      </div>
     
    </div>
    );
};

export default Login;