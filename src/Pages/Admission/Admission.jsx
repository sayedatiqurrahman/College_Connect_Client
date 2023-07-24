import { Link } from "react-router-dom";
import CollegesData from "../../DataHouse/CollegesData";
import SectionTitle from "../../components/SectionTitle";
import { useState } from "react";
import { useForm } from 'react-hook-form';

const Admission = () => {

    // Use Hook Form
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [, Colleges] = CollegesData()
    const [id, setId] = useState("");
    const [cName, setCName] = useState("");

    return (
        <div className="MyContainer">
            <SectionTitle title={"Admission Page"} subTitle={"Unlocking Your Potential: Your Journey Starts Here!"} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center  gap-5">
                {Colleges.map(college => <div
                    key={college._id} className="card w-full bg-base-100 shadow-xl image-full"

                >
                    <figure><img src={college?.image} alt={college.name} /></figure>
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title text-3xl font-semibold text-white">{college.name}</h2>

                        <div className="card-actions">
                            <button className='text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-lg hover:bg-[#ff6f26] hover:text-white'
                                onClick={() => {
                                    window.my_modal_5.showModal()
                                    setId(college._id)
                                    setCName(college.name)
                                }}
                            >Apply Now</button>
                        </div>
                    </div>
                </div>)}
            </div>
            {/* the modal code */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                {/* Remove the inner <form> element */}
                <form method="dialog" className="modal-box" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4 text-red-500 text-center">Press ESC to close</p>
                    <div className="flex flex-col gap-3">
                        <input type="text" placeholder="Your Name" value={id} {...register("id", { required: true })}
                            className="hidden "
                        />

                        <input type="text" placeholder="Your Name" {...register("name", { required: true })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />
                        <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />
                        <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 10, maxLength: 13 })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input type="text" value={cName} placeholder="College Name" {...register("college_name", { required: true })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <select required {...register("Subject", { required: true })}
                            className="select input-bordered border-[#ff6f26] w-full ">
                            <option value="Your Subject" disabled selected>Your Subject</option>
                            <option value=" Arts and Humanities"> Arts and Humanities</option>
                            <option value="Science"> Science</option>
                            <option value="Law">Law</option>
                            <option value="Business and Management">Business and Management</option>
                            <option value=" Health and Medical Sciences"> Health and Medical Sciences</option>
                        </select>

                        <input className="text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-lg hover:bg-[#ff6f26] hover:text-white" type="submit" />
                    </div>

                </form>

            </dialog>
        </div>
    );
};

export default Admission;