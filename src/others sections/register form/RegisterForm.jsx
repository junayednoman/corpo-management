import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../auth provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const RegisterForm = ({ styles }) => {
    const { signUp, setUserNameAndImageURL, googleLogIn, setLoading } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const img_url = e.target.img_url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            toast('Password should be at least 6 characters')
            return;
        }
        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).+$/.test(password)) {
            toast('Password must contain at least a capital letter and a special character')
            return;
        }
        signUp(email, password, name, img_url)
            .then(result => {
                setLoading(true)
                toast('User has created successfully');

                setUserNameAndImageURL(name, img_url, result.user)
                    .then(result => { })
                    .catch(error => {
                        toast(error.message);
                    })

                e.target.reset();
            })
            .catch(error => {
                toast(error.message)
            })
    }

    const handleGoogleLogin = () =>{
        googleLogIn()
        .then(result=>{
            toast('Logged in successfully')
        })
        .catch(error=>{
            toast(error.message)
        })
    }

    return (
        <div>
            <form className="card-body p-0" onSubmit={handleSignUp}>
                <div className="form-control">
                    <label className={`label ${styles.textColor}`}>
                        <span className={`label-text ${styles.textColor}`}>Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className={`label ${styles.textColor}`}>
                        <span className={`label-text ${styles.textColor}`}>Image URL</span>
                    </label>
                    <input type="text" placeholder="Image URL" name="img_url" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className={`label ${styles.textColor}`}>
                        <span className={`label-text ${styles.textColor}`}>Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className={`label ${styles.textColor}`}>
                        <span className={`label-text ${styles.textColor}`}>Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#A5D7E8] text-white border-none">Register</button>
                </div>
                <ToastContainer />
                <button onClick={handleGoogleLogin} className='btn bg-green-500 border-none'>Login with Google</button>
                <p className={`mt-5 ${styles.textColor}`}>Already have and account? Please, <Link className="text-[#A5D7E8] font-medium" to='/login'>login</Link></p>
            </form>
        </div>
    );
};

RegisterForm.propTypes = {
    styles: PropTypes.object
}

export default RegisterForm;