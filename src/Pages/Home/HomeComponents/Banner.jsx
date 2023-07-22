
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
const Banner = () => {
    const [Colleges, setTopCollege] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000").then(res => res.json()).then(data => setTopCollege(data))
    }, [])
    const TopColleges = Colleges.filter((college) => college.student_success?.graduation_rate >= 90)
    console.log(TopColleges);
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper MyContainer rounded-2xl border border-[#441700]"
            >
                {TopColleges?.map((college, idx) => (
                    <SwiperSlide
                        key={idx}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${college.image})`,
                            height: '600px',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                        className='bg-opacity-5 flex justify-center items-center relative'
                    >
                        <div >
                            <h2 className='text-5xl font-bold text-[#ff6f26]'>{college.name}</h2>

                            <p className='text-xl text-[#c0bfbf] font-semibold'>{college.location}</p>
                            <p className='text-lg mt-5 max-w-md text-[#c0bfbf]'>{college.description}</p>
                            <p className='bg-[#ff6f26] text-black border-white border absolute top-2 right-2 px-4 rounded-full'>Graduation Rate : {college.student_success.graduation_rate}%</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >
        </>
    );
};

export default Banner;