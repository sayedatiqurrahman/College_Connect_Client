
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import CollegesData from '../../../DataHouse/CollegesData';
const Banner = () => {
    const [TopColleges] = CollegesData()

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
                className="mySwiper MyContainer rounded-2xl mt-10 border border-[#ff6f26]"
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
                        className='bg-opacity-5  relative'
                    >


                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <h2 className='text-5xl font-bold text-[#ff6f26]'>{college.name}</h2>

                            <p className='text-xl text-[#c0bfbf] font-semibold'>{college.location}</p>
                            <p className='text-lg mt-5 max-w-md mb-4 text-[#c0bfbf]'>{college.description}</p>

                            {/* TODO: link dynamically */}
                            <Link to={`collegeDetails/${college._id}`} className='text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-full'>Learn More</Link>

                        </div>
                        <p className='bg-[#ff6f26] text-gray-800  font-semibold border-white absolute top-2 right-2 px-4 rounded-full'>Graduation Rate : <span className='text-green-900'>{college.student_success.graduation_rate}%</span></p>
                    </SwiperSlide>
                ))}
            </Swiper >
        </>
    );
};

export default Banner;