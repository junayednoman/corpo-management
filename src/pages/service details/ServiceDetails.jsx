import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../others sections/navbar/Navbar";
import Footer from "../../others sections/footer/Footer";

const ServiceDetails = () => {
    const { id } = useParams();
    const services = useLoaderData();

    const styles = {
        bgColor: 'bg-transparent',
        textColor: 'text-[#0B2447]',
    };

    const matchedService = services.find(service => service.id === parseInt(id));

    const { image, name, short_description, price } = matchedService;
    return (
        <div>
            <div>
                <Navbar styles={styles}></Navbar>
            </div>

            <div className="lg:w-2/3 w-full lg:px-0 md:px-9 px-3 lg:mx-auto md:mt-0 mt-3 mb-14">
                <div className="w-full md:h-[400px] h-[200px] lg:h-[500px]" style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                </div>
                <h3 className="text-2xl md:text-5xl font-semibold mb-4 text-[#0B2447] mt-10">{name}</h3>
                <p>{short_description}</p>
                <div className="px-5 mt-3 py-2 border inline-block">
                    <p><span className="font-medium">Price</span>: {price}</p>
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ServiceDetails;