import { MdOutlineLocationOn } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const CollegeDetails = () => {
    const collegeData = useLoaderData();
    const { name, image, location, description, student_success, events, contact_info, admission_process, sports_categories, research_works
    } = collegeData
    console.log(collegeData);
    return (
        <div className="MyContainer">

            <SectionTitle title={"College Details"} subTitle={"Explore the World of Education"} />

            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${image})`,

                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
                className='bg-opacity-5 h-[600px] mt-5 rounded-xl border-2 border-[#ff6f26] '>


                {/* Internal Content */}


                <div className='flex flex-wrap gap-3  justify-center items-center mt-40 place-items-center'>

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



            {/* Admission */}
            <div className="mt-[130px]">
                <SectionTitle title={"Admission"} subTitle={"Admission Requirements"} />

                <div className="mt-[50px] text-center">
                    {admission_process}
                    <a href={contact_info.website} target="_blank" className="btn w-40 mt-4 flex justify-center mx-auto border border-[#ff6f26] text-[#ff6f26] hover:bg-[#ff6f26] hover:text-white">Admission web </a>
                </div>

            </div>

            {/* Toppers */}
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


            {/* Research */}

            <div className="mt-[130px]">
                <SectionTitle title={"Research Work"} subTitle={"Exploring Knowledge Frontiers"} />

                <div className="mt-[50px] text-center">
                    {research_works}
                    <a href={contact_info.website} target="_blank" className="btn w-40 mt-4 flex justify-center mx-auto border border-[#ff6f26] text-[#ff6f26] hover:bg-[#ff6f26] hover:text-white">Explore More </a>
                </div>

            </div>


            {/* Sports */}

            <div className="mt-[130px]">
                <SectionTitle title={"Sports Categories"} subTitle={"Diverse Sports and Athletic Programs"} />

                <div className="mt-[50px] text-center">
                    {sports_categories}
                    <a href={contact_info.website} target="_blank" className="btn w-40 mt-4 flex justify-center mx-auto border border-[#ff6f26] text-[#ff6f26] hover:bg-[#ff6f26] hover:text-white">Explore More </a>
                </div>

            </div>

            {/* Contact */}

            <div className="mt-[130px]">
                <SectionTitle title={"Contact info"} subTitle={"Get in Touch: Contact Information and Inquiries"} />

                <div className="mt-[50px] text-center flex justify-center place-content-center flex-wrap items-center">
                    <div className="card mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-[#ff6f26] text-center">Info of {name}</h2>
                            <div className="text-left">
                                <p>email: {contact_info.email}</p>
                                <p>phone: {contact_info.phone}</p>
                                <p>address: {contact_info.address}</p>
                                <p>website: {contact_info.website}</p>
                            </div>

                        </div>
                    </div>
                    <a href={contact_info.website} target="_blank" className="btn w-40 mt-4 flex justify-center mx-auto border border-[#ff6f26] text-[#ff6f26] hover:bg-[#ff6f26] hover:text-white">Explore More </a>
                </div>

            </div>

        </div >



    );
};

export default CollegeDetails;