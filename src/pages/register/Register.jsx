import Footer from "../../others sections/footer/Footer";
import Navbar from "../../others sections/navbar/Navbar";
import RegisterForm from "../../others sections/register form/RegisterForm";

const Register = () => {


    const styles = {
        bgColor: 'bg-transparent',
        textColor: 'text-[#0B2447]',
    };


    return (
        <div>
            <div>
                <Navbar styles={styles}></Navbar>
            </div>
            <h2 className="text-center font-semibold text-3xl">Register Now!</h2>
            <div className="mt-7 mb-10 md:mb-24 md:mt-14 xl:w-1/2 md:w-2/3 w-full px-3 md:p-0 md:mx-auto ">
                <RegisterForm styles={styles}></RegisterForm>
                
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Register;