import { useContext } from "react";
import { AuthContext } from "../../auth provider/AuthProvider";
import Navbar from "../../others sections/navbar/Navbar";
import Footer from "../../others sections/footer/Footer";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const styles = {
        bgColor: 'bg-transparent',
        textColor: 'text-[#0B2447]',
    };
    return (
        <div>
            <Navbar styles={styles}></Navbar>
            <div className="max-w-4xl lg:mx-auto md:mx-9 mx-3 py-10 md:py-14">
                <h2 className="md:text-4xl font-bold text-2xl text-center">Your Profile</h2>
                <div className="py-9 border mt-12 text-center">
                    <div>
                        <img className="mx-auto" src={user.photoURL} alt="" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-2xl mt-3 mb-2">{user.displayName}</h3>
                        <p>{user.email}</p>
                        <p className="mt-2">Email verified: {user.emailVerified ? 'Verified' : 'Unverified'}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;