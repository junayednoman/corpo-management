import { Link } from "react-router-dom";

const LoginSuccess = () => {
    return (
        <div>
            <div className="h-screen flex-col flex justify-center items-center mx-3">
            <h2 className="md:text-5xl text-2xl text-center font-bold"><span className="text-[#A5D7E8]">Whooa!</span> You have logged in successfully. 😎</h2>
            <p className="mt-8 text-center">Now you can visit all the private routes seamlessly.</p>
            <br />
            <Link className="font-medium underline" to='/profile'>Go to your profile</Link>
        </div>
        </div>
    );
};

export default LoginSuccess;