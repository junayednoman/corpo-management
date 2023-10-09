import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../others sections/navbar/Navbar";
import RegisterForm from "../../others sections/register form/RegisterForm";
import Service from "../../others sections/services/Service";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Footer from "../../others sections/footer/Footer";
import CounterSection from "../../additional sections/counter section/CounterSection";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const Home = () => {
    const onBeforeSlide = (detail) => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

    const services = useLoaderData();
    const styles = {
        bgColor: 'bg-transparent',
        textColor: 'text-white'
    };
    return (
        <div>
            <div className="banner">
                <div className=" overlay">
                    <Navbar styles={styles}></Navbar>
                    <div className="max-w-6xl mx-3 md:mx-8 xl:mx-auto lg:grid grid-rows-1 lg:grid-cols-5 items-center gap-7 md:pt-14 pb-9 md:pb-24">
                        <div className="col-span-3">
                            <div className="font-bold text-3xl md:text-6xl text-white leading-[50px] md:leading-[80px] mb-8">
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
            {/* banner end */}


            <div>
                <CounterSection></CounterSection>
            </div>



            <div className="max-w-6xl xl:mx-auto gap-10 md:py-20 py-12 lg:py-32 lg:grid items-center lg:grid-cols-5 xl:px-0 px-0 lg:px-20">
                <div className="col-span-2 md:block hidden lg:w-full md:mx-auto md:w-[55%] w-[50%] mx-auto lg:mb-0 md:mb-14 mb-8">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    // spaceBetween={20}
                    >

                        {services.map(service => <SwiperSlide className="bg-[#A5D7E8] p-3 md:p-5 rounded-md lg:w-full w-1/4" key={service.id}>
                            <img className="rounded-md" src={service.image} alt="" />
                            <div className="p-1 md:p-3">
                                <h2 className="font-semibold text-xl md:text-3xl my-3">{service.name}</h2>
                                {
                                    service.short_description.length <= 200 ? <p className="md:text-base text-sm">{service.short_description.slice(0, 200)}</p> :
                                        <>
                                            <p className="md:text-base text-sm">{service.short_description.split('.')[0]}.</p>
                                        </>

                                }
                                <div>
                                    <p className='mt-2'><span className='font-medium'>Price</span>: {service.price}</p>
                                </div>
                                <Link to={`/service/${service.id}`} className='btn text-[12px] bg-[#0B2447] border-none mt-4 text-white hover:bg-[#0B2447]'>View Details</Link>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
                <div className="col-span-3 xl:ml-36 lg:ml-20 lg:mx-0 md:mx-8 mx-3">
                    <h2 className="text-2xl md:text-5xl font-semibold mb-4 text-[#0B2447]">Our Services</h2>
                    <p className="text-base md:text-lg font-semibold text-gray-500">Welcome to <span className="font-medium">CORPO</span> - Crafting Unforgettable Corporate Experiences</p>
                    <p className="mt-5 mb-3 md:text-base text-[14px]">At <span className="font-medium">CORPO</span>, we believe that exceptional events are not just gatherings; they are experiences that leave a lasting impact. With a passion for creativity and a commitment to excellence, we specialize in curating and executing corporate events that go beyond the ordinary.</p>
                    <p className=" md:text-base text-[14px]">Our comprehensive suite of services is designed to transform your vision into a remarkable reality. Whether you are hosting a product launch, a conference, a gala, or a team-building retreat, we are your trusted partner in orchestrating an event that resonates with your audience, strengthens your brand, and achieves your objectives.</p>
                </div>

                <div className="block md:hidden mx-3 mt-8">
                    {services?.map(service => <Service key={service.id} service={service}></Service>)}
                </div>

                {/* {services.map(service => <Service key={service.id} service={service}></Service>)} */}
            </div>

            <div className="py-8 md:py-24 bg-[#a5d7e81e]">
                <div className="max-w-6xl xl:mx-auto mx-3 md:mx-9">
                    <h2 className="text-2xl md:text-5xl font-semibold text-[#0B2447] text-center mb-5 md:mb-12">Photo Gallery</h2>
                    <LightGallery
                        elementClassNames="custom-wrapper-class grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5"
                        onBeforeSlide={onBeforeSlide}
                        plugins={[lgThumbnail, lgZoom]}
                    // speed={500}
                    >
                        <a href="https://i.postimg.cc/SK57xhD2/business-executives-participating-business-meeting.jpg">
                            <img alt="img1" src="https://i.postimg.cc/SK57xhD2/business-executives-participating-business-meeting.jpg" />
                        </a>
                        <a href="https://i.postimg.cc/D0XVxfbh/venue.jpg">
                            <img alt="img1" src="https://i.postimg.cc/D0XVxfbh/venue.jpg" />
                        </a>
                        <a href="https://i.postimg.cc/FFLsWhv1/branding-advertisment-copyright-value-profile-concept.jpg">
                            <img alt="img1" src="https://i.postimg.cc/FFLsWhv1/branding-advertisment-copyright-value-profile-concept.jpg" />
                        </a>
                        <a href="https://i.postimg.cc/VkDYr6qZ/male-business-executive-giving-speech.jpg">
                            <img alt="img1" src="https://i.postimg.cc/VkDYr6qZ/male-business-executive-giving-speech.jpg" />
                        </a>
                        <a href="https://i.postimg.cc/D0kFkbh0/businessman-showing-changes-report.jpg">
                            <img alt="img1" src="https://i.postimg.cc/D0kFkbh0/businessman-showing-changes-report.jpg" />
                        </a>
                        <a href="https://i.postimg.cc/7ZY4kkF3/workplace-results-professional-report-accounting-during.jpg">
                            <img alt="img1" src="https://i.postimg.cc/7ZY4kkF3/workplace-results-professional-report-accounting-during.jpg" />
                        </a>
                    </LightGallery>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;