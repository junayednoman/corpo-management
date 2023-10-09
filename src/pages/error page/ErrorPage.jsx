import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex-col flex justify-center items-center mx-3">
            <h2 className="md:text-5xl text-2xl text-center font-bold">Oops 404! Not found the page!</h2>
            <br />
            <Link className="font-medium underline" to='/'>Go to home</Link>
        </div>
    );
};

export default ErrorPage;