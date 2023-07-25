import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// import required modules


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch("https://collegeconnect-orpin.vercel.apptestimonials").then(res => res.json()).then(data => setTestimonials(data))
    }, [])
    console.log("inside tes:", testimonials)
    return (
        <div>
            <SectionTitle title={"Testimonials"} subTitle="Educational Triumphs: Voices of Success" />

            <Swiper

                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    }
                }}
                modules={[Pagination]}
                className="mySwiper shadow-2xl md:border-x-2  border-[#ff6f26]"
            >
                {
                    testimonials.map((testimonial) => <SwiperSlide

                        style={{ height: '350px' }} key={testimonial._id}
                        className="bg-gray-200 shadow-2xl border-2 border-[#ff6f26] py-3 px-2 rounded-lg group h-[300px] text-center"
                    >
                        <div className="h-32 w-32 rounded-full relative overflow-hidden border-2 border-[#ff6f26] mx-auto flex justify-center items-center ">

                            <FaQuoteLeft className=" transition-all duration-200 group-hover:scale-150 text-[#ff6f26] " size={50} />
                        </div>

                        <h1 className="text-2xl mt-4 font-semibold text-[#ff6f26]">{testimonial.name}</h1>
                        <p className="text-gray-600">{testimonial.testimonial}</p>


                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Testimonials;