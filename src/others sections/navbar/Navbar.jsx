import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../auth provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import avatar from '../../../src/assets/avatar.png'


const Navbar = ({ styles }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const menu = <>
        <li className={`${styles.textColor} font-medium text-base`}><NavLink to='/'>Home</NavLink></li>
        <li className={`${styles.textColor} font-medium text-base`}><NavLink to='/profile'>Profile</NavLink></li>
        <li className={`${styles.textColor} font-medium text-base`}><NavLink to='/register'>Register</NavLink></li>
        {
            user && <li className={`${styles.textColor} font-medium text-base`}><NavLink to='/login-success'>Login Reward</NavLink></li>
        }
    </>
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
        toast('Logged out successfully')
    }
    return (
        <div className="max-w-6xl mx-3 md:mx-8 xl:mx-auto py-9">
            <div className={`navbar ${styles.bgColor}`}>
                <div className="navbar-start lg:justify-start justify-between">
                    <div className={`dropdown ${styles.textColor}`}>
                        <label tabIndex={0} className="btn btn-ghost pl-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black`}>
                            {menu}
                        </ul>
                    </div>
                    <button className={`btn font-bold btn-ghost normal-case lg:pr-3 pr-0 text-xl md:text-3xl ${styles.textColor}`}>CORPO</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">

                    {loading ? <span className="loading loading-spinner text-error"></span>
                        :
                        <>
                            {
                                user ? <div className="flex gap-3 items-center">
                                    <div className="border rounded-md border-[#A5D7E8] px-3 py-2 flex gap-2 items-center">
                                        {/* <img src="https://lh3.googleusercontent.com/a/ACg8ocI7z_G19mivfrFGVrta0Cvm5IaupjX9Jopwjbnh4UohLQ=s96-c" alt="" /> */}
                                        {
                                            user.photoURL === null ? <img className="w-8 h-8 rounded-full" src={avatar} alt="" /> : <img className="w-8 h-8 rounded-full" src={user.photoURL} alt="" />
                                        }
                                        <p className={`font-medium ${styles.textColor}`}>{user.displayName}</p>
                                    </div>
                                    <Link onClick={handleLogOut} className="btn border-none bg-[#A5D7E8]">LogOut</Link>
                                </div>
                                    :
                                    <Link className="btn border-none bg-[#A5D7E8]" to='/login'>Login</Link>
                            }
                        </>
                    }
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    styles: PropTypes.object
}

export default Navbar;