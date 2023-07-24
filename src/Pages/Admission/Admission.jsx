import { Link } from "react-router-dom";
import CollegesData from "../../DataHouse/CollegesData";
import SectionTitle from "../../components/SectionTitle";
import { useState } from "react";


const Admission = () => {

    const [, Colleges] = CollegesData()
    const [show, setShow] = useState(false)
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
                                onClick={() => window.my_modal_5.showModal()}
                            >Apply Now</button>
                        </div>
                    </div>
                </div>)}
            </div>
            {/* the modal code */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>

        </div>
    );
};

export default Admission;