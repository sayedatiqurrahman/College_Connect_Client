import { Link } from "react-router-dom";
import CollegesData from "../../DataHouse/CollegesData";
import SectionTitle from "../../components/SectionTitle";
import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Admission = () => {
    const { user } = useContext(AuthContext)

    // Use Hook Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (data.subject === "Your Subject" || data.mobile_number === "" || data.image === "" || data.name === "") {
            toast.error("Please Fill up all input fields")
        } else {
            fetch('https://collegeconnect-orpin.vercel.appapply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)

            }).then(response => response.json()).then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Toys Added Successfully')
                }
            });
            reset()
        }

    };
    const [, Colleges] = CollegesData()
    const [id, setId] = useState("");
    const [cName, setCName] = useState("");
    const admissionApply = () => {
        if (!user) {
            toast.error("Login first to apply")
        }
    }
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
                            <button className='btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-lg hover:bg-[#ff6f26] hover:text-white'
                                onClick={() => {
                                    admissionApply()
                                    if (user) {
                                        window.my_modal_5.showModal()
                                        setId(college._id)
                                        setCName(college.name)
                                    }
                                }}
                            >Apply Now</button>
                        </div>
                    </div>
                </div>)}
            </div>
            {/* the modal code */}
            {user && <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                {/* Remove the inner <form> element */}
                <form method="dialog" className="modal-box" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4 text-red-500 text-center">Press ESC or Click Outside of Modal to close</p>
                    <div className="flex flex-col gap-3">
                        <input type="text" value={id} {...register("applied_id")}
                            className="opacity-0  "

                        />

                        <input type="url" defaultValue={user?.photoURL} placeholder="Your Photo URL" {...register("image", { required: true })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />
                        <input type="text" defaultValue={user?.displayName} placeholder="Your Name" {...register("name")}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />
                        <input type="email" value={user?.email} placeholder="Email" {...register("email")}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />
                        <input type="tel" placeholder="mobile_number" {...register("mobile_number")} className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input type="text" value={cName} placeholder="College Name" {...register("college_name")}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <select required {...register("subject")}
                            className="select input-bordered border-[#ff6f26] w-full " defaultValue="Your Subject">
                            <option value="Your Subject" disabled>Your Subject</option>
                            <option value=" Arts and Humanities"> Arts and Humanities</option>
                            <option value="Science"> Science</option>
                            <option value="Law">Law</option>
                            <option value="Business and Management">Business and Management</option>
                            <option value=" Health and Medical Sciences"> Health and Medical Sciences</option>
                        </select>

                        <input className="btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-lg hover:bg-[#ff6f26] hover:text-white w-40 mx-auto" type="submit" value={"Apply"} />
                    </div>

                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Admission;