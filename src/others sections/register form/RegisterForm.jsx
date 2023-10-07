import PropTypes from 'prop-types';
const RegisterForm = ({styles}) => {
    return (
        <div>
            <form className="card-body p-0">
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
                    <input type="text" placeholder="Image URL" name="img_url" className="input input-bordered" required />
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
            </form>
        </div>
    );
};

RegisterForm.propTypes ={
    styles: PropTypes.object
}

export default RegisterForm;