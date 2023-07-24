import { MdOutlineLocationOn } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const CollegeDetails = () => {
    const collegeData = useLoaderData();
    const { name, image, location, description, student_success, events } = collegeData
    console.log(collegeData);
    return (
        <div className="MyContainer">

            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${image})`,

                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
                className='bg-opacity-5 h-[600px] mt-5 rounded-xl border-2 border-[#ff6f26] '>


                {/* Internal Content */}
                <h2 className='text-4xl text-center mt-4 font-bold underline'>College Details Page</h2>

                <div className='flex flex-wrap gap-3  justify-center items-center mt-32 place-items-center'>

                    <div>
                        <h2 className='text-5xl max-w-md font-bold text-[#ff6f26]'>{name}</h2>

                        <p className="font-medium flex gap-1">
                            <MdOutlineLocationOn size={20} className="text-[#ff6f26]" /> {location}</p>
                        <p className='text-lg mt-5 max-w-md mb-4 text-[#c0bfbf]'>{description}</p>


                    </div>
                    <div
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,
                            maxWidth: "300px",
                            width: "90%"
                        }}
                        className="border border-[#ff6f26] rounded-lg p-4">
                        <h2 className='text-2xl font-bold  mb-3'>Student Success:</h2>
                        <p className='font-semibold  rounded-full'>Graduate Rate : <span className='text-[#ff6f26]'>{student_success.graduation_rate}%</span></p>

                        <p className='font-semibold  rounded-full'>Student To Faculty Ratio : <span className='text-[#ff6f26]'>{student_success.student_to_faculty_ratio
                        }%</span></p>

                        <p className='font-semibold  rounded-full'>Prosperity
                            : <span className='text-[#ff6f26]'>{student_success.average_salary_after_graduation}</span></p>

                    </div>



                </div>



            </div>
            <div className="mt-[130px]">
                <SectionTitle title={"Toppers"} subTitle={"Notable Alumni to this College"} />

                <div className="mt-[50px] flex flex-wrap justify-center items-center gap-5 ">
                    {
                        student_success.notable_alumni?.map((topper, idx) => <div
                            key={idx}
                            className="border border-[#ff6f26] p-4 rounded-2xl max-w-xs"
                        >
                            <FaUserGraduate size={28} />
                            <h2 className="text-3xl font-semibold">{topper}</h2>
                        </div>)
                    }
                </div>

            </div>

            {/* Events */}

            <div className="mt-[130px]">
                <SectionTitle title={"Events"} subTitle={"Events of the Collage"} />

                <div className="mt-[50px] flex flex-wrap justify-center items-center gap-5 ">
                    {
                        events?.map(({ name, date, description }, idx) => <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-[#ff6f26]">{name}</h2>
                                <p>{description}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline text-[#ff6f26] outline-[#ff6f26]">{date}</div>

                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div >

    );
};

export default CollegeDetails;