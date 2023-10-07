import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar = ({ styles }) => {
    const menu = <>
        <li className="text-black lg:text-white font-medium text-base"><NavLink to='/'>Home</NavLink></li>
        <li className="text-black lg:text-white font-medium text-base"><NavLink to='/ab'>About</NavLink></li>
        <li className="text-black lg:text-white font-medium text-base"><NavLink to='/ser'>Service</NavLink></li>
    </>
    return (
        <div className="max-w-6xl mx-3 md:mx-8 xl:mx-auto py-9">
            <div className={`navbar ${styles.bgColor}`}>
                <div className="navbar-start lg:justify-start justify-between">
                    <div className="dropdown text-white">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black`}>
                            {menu}
                        </ul>
                    </div>
                    <a className={`btn font-bold btn-ghost normal-case lg:pr-3 pr-0 text-xl md:text-3xl ${styles.textColor}`}>CORPO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-none bg-[#A5D7E8]">Button</a>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    styles: PropTypes.object
}

export default Navbar;