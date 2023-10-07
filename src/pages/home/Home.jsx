import { useLoaderData } from "react-router-dom";
import Navbar from "../../others sections/navbar/Navbar";
import RegisterForm from "../../others sections/register form/RegisterForm";
import Service from "../../others sections/services/Service";

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    const styles = {
        bgColor: 'bg-transparent',
        textColor: 'text-white',
    };
    return (
        <div>
            <div className="banner">
                <div className=" overlay">
                    <Navbar styles={styles}></Navbar>
                    <div className="max-w-6xl mx-3 md:mx-8 xl:mx-auto lg:grid grid-rows-1 lg:grid-cols-5 items-center gap-7 md:pt-14 pb-9 md:pb-24">
                        <div className="col-span-3">
                            <div className="font-bold text-4xl md:text-6xl text-white leading-[50px] md:leading-[80px] mb-8">
                                <h1>CORPO:</h1>
                                <h1>Your Premier Corporate Event Architects</h1>
                            </div>
                            <p className="text-white text-base md:text-lg mb-8">Elevate Your Corporate Events with <span className="font-semibold">Corpo</span>: Where Vision Meets Execution. We Create Memorable Experiences Tailored to Your Business Goals.</p>
                            <button className="btn bg-[#A5D7E8] border-none px-7">Elevate Your Event</button>
                        </div>
                        <div className="col-span-2 bg-[#0B2447] p-5 md:p-7 rounded-lg lg:mt-0 mt-10">
                            <RegisterForm styles={styles}></RegisterForm>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h2>Our Services</h2>
                <p>Tailored Excellence for Every Corporate Occasion</p>

                {services.map(service => <Service key={service.id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Home;