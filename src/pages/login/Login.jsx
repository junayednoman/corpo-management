import { Link } from "react-router-dom";
import Footer from "../../others sections/footer/Footer";
import Navbar from "../../others sections/navbar/Navbar";

const Login = () => {
    const styles = {
        bgColor: 'bg-transparent',
        textColor: 'text-[#0B2447]',
    };
    return (
        <div className="flex flex-col">
            <div>
                <Navbar styles={styles}></Navbar>
            </div>

            <form className="card-body flex-grow mt-0 mb-5 md:mb-24 md:mt-14 xl:w-1/2 md:w-2/3 w-full px-3 md:p-0 md:mx-auto">
                <h2 className="text-center text-3xl font-semibold">Login Now!</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#A5D7E8]">Login</button>
                </div>
            <p className="mt-5">Do not have and account? Please, <Link className="text-[#A5D7E8] font-medium" to='/register'>register</Link></p>
            </form>

            <div className="align-bottom justify-end">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Login;