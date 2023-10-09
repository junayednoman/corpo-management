import { useContext } from "react";
import { AuthContext } from "../../auth provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    const path = location.pathname;
    const message = 'Please, login to visit the private page';
    const stateInfo = { path, message }

    if (loading) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={stateInfo} to='/login'></Navigate>

};

PrivateRoute.propTypes={
    children: PropTypes
}

export default PrivateRoute;