import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../others sections/footer/Footer";
import Navbar from "../../others sections/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../auth provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { signIn, googleLogIn } = useContext(AuthContext);

    const styles = {
        bgColor: 'bg-transparent',
        textColor: 'text-[#0B2447]',
    };

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result);
                toast('User logged in successfully');
                navigate(`${location?.state?.path ? location.state.path : '/login-success'}`)
                e.target.reset();
            })
            .catch(error => {
                console.log(error);
                toast(error.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                toast('User logged in successfully');
                navigate(`${location?.state?.path ? location.state.path : '/login-success'}`)
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className="flex flex-col">
            <div>
                <Navbar styles={styles}></Navbar>
            </div>

            <form onSubmit={handleLogin} className="card-body flex-grow mt-0 mb-5 md:mb-24 md:mt-14 xl:w-1/2 md:w-2/3 w-full px-3 md:p-0 md:mx-auto">
                <h2 className="text-center text-3xl font-semibold">{location?.state?.path ? location.state.message : 'Login Now!'}</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#A5D7E8]">Login</button>
                </div>

                <button className="btn bg-green-500 border-0" onClick={handleGoogleLogin}>Login with Google</button>

                <p>Do not have and account? Please, <Link className="text-[#A5D7E8] font-medium" to='/register'>register</Link></p>
                <ToastContainer />
            </form>

            <div className="align-bottom justify-end">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Login;