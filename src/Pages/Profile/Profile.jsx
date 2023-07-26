import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import useAppliedData from '../../DataHouse/useAppliedData';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useContext, useState } from 'react';
import axios from 'axios';
import { getAuth, updateProfile } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';
import { AuthContext } from '../../provider/AuthProvider';

const Profile = () => {
    const auth = getAuth(app)
    const [myCollege, applied, user, updatePer, setUpdatePer] = useAppliedData();
    const navigate = useNavigate();
    const [up, setUp] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const name = data.name;
        const image = data.image[0];
        const allData = data;
        if (!image) {
            alert("please upload the image");
            return;
        } else {
            const apiKey = import.meta.env.VITE_IMGBB;
            const formData = new FormData();
            formData.append('image', image);

            axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData)
                .then((response) => {
                    // Handle the API response here

                    const url = response.data.data.display_url;
                    if (url) {
                        // Using the `user` variable instead of `result`
                        if (user) {
                            updateProfile(auth.currentUser, {
                                displayName: name,
                                photoURL: url
                            }).then(() => {
                                const { name, email, url, date_of_birth, mobile_number } = allData;
                                const updateData = {
                                    name,
                                    email,
                                    image: url,
                                    date_of_birth,
                                    mobile_number
                                };
                                console.log(updateData);
                                fetch('https://collegeconnect-orpin.vercel.app/updateData', {
                                    method: 'PATCH',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(updateData)
                                }).then(response => response.json()).then(data => {
                                    console.log(data);
                                    if (data.modifiedCount > 0) {
                                        toast.success('Info Updated Successfully');
                                    }
                                });

                            }).catch((error) => {
                                toast.error(error.message);
                            });
                        }
                    }
                }).catch((error) => {
                    toast.error(error.message);
                });
        }
    };


    return (
        <div className='h-screen relative MyContainer'>
            <SectionTitle className="absolute top-0 left-1/2 -translate-x-1/2 " title={"Profile"} />
            <div className='flex justify-center items-center gap-5'>
                <button
                    onClick={() => {
                        window.my_modal_5.showModal()
                        setUp(!up)
                    }
                    }
                    className='btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-lg hover:bg-[#ff6f26] hover:text-white'>Edit Info</button>
                <button
                    onClick={() => {
                        setUpdatePer(true)
                        navigate("/admission")
                    }} className='btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-lg hover:bg-[#ff6f26] hover:text-white'>Update College</button>
            </div>


            <div className='flex flex-wrap gap-5 justify-center items-center'>
                <div className='w-full mt-10 max-w-xl p-10 border border-[#ff6f26] rounded-2xl '>
                    <img className='rounded-full border border-[#ff6f26] h-20 w-20 mb-10 mx-auto' src={applied?.image || user.photoURL} />
                    <h2 className='text-4xl font-bold text-[#ff6f26] '>{applied?.name || user.displayName}</h2>
                    <p><b>Email: </b>{user?.email}</p>
                    <p><b>Phone: </b>{applied?.mobile_number}</p>
                    <p><b>Date Of Birth: </b>{applied?.date_of_birth}</p>
                    <p><b>Subject: </b>{applied?.subject}</p>
                </div>

                <div className='w-full mt-10 max-w-xl p-10 border border-[#ff6f26] rounded-2xl '
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${myCollege?.image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >
                    <img className='rounded-full border border-[#ff6f26] h-20 w-20 mb-10 mx-auto' src={myCollege?.image} />
                    <h2 className='text-4xl font-bold text-[#ff6f26] '>{myCollege?.name}</h2>
                    <p><b>Location: </b>{myCollege?.location}</p>
                    <p><b>Email: </b>{myCollege?.contact_info.email}</p>
                    <p><b>Phone: </b>{myCollege?.contact_info.phone}</p>
                    <p><b>Web: </b>{myCollege?.contact_info.website}</p>
                </div>



            </div>

            {/* Modal for update info */}
            {(up || !up) && <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                {/* Remove the inner <form> element */}
                <form method="dialog" className="modal-box" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">Hello! {user?.displayName}</h3>
                    <p className="py-4 text-red-500 text-center">Press ESC or Click Outside of Modal to close</p>
                    <div className="flex flex-col gap-3">
                        {/* <input type="text" value={id} {...register("applied_id")}
                            className="opacity-0  "

                        /> */}

                        <input type="file" {...register("image", { required: true })}
                            className="file-input file-input-bordered  border-[#ff6f26] w-full" />

                        <input type="text" defaultValue={applied?.name || user?.displayName} placeholder="Your Name" {...register("name")}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input type="date"   {...register("date_of_birth")}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input type="email" value={user?.email} placeholder="Enter Your Email" {...register("email")}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input type="tel" placeholder="Enter Your Mobile Number" {...register("mobile_number")}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />





                        <input className="btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-lg hover:bg-[#ff6f26] hover:text-white w-40 mx-auto" type="submit" value={"Update"} />
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
        </div >
    );
};

export default Profile;