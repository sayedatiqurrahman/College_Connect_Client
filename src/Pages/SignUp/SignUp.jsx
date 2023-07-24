import React, { useContext, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Lottie from 'react-lottie';
import AniData from "../../../public/signUp.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';


// import { AuthContext } from '../Provider/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from '../../provider/AuthProvider';
import { app } from '../../Firebase/firebase.config';


const SignUp = () => {
    const auth = getAuth(app)
    const { registerUser } = useContext(AuthContext);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AniData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const image = data.image[0]
        const email = data.email
        const password = data.password
        const name = data.name

        if (!image) {
            alert("please upload the image")
            return
        } else {
            const apiKey = import.meta.env.VITE_IMGBB;
            const formData = new FormData();
            formData.append('image', image);

            axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData)
                .then((response) => {
                    // Handle the API response here
                    console.log(response.data.data);
                    const url = response.data.data.display_url
                    if (url) {
                        registerUser(email, password).then(result => {
                            const user = result.user;
                            if (user) {
                                updateProfile(auth.currentUser, {
                                    displayName: name, photoURL: url
                                }).then(() => {
                                    toast.success('Account Created Successfully')
                                }).catch((error) => {
                                    toast.error(error.message)
                                })
                            }
                        }).catch((error) => {
                            toast.error(error.message)
                        })
                    }
                }).catch((error) => {
                    toast.error(error.message)
                })
        }
    };

    return (
        <div className="MyContainer flex flex-col md:flex-row gap-5 justify-center items-center mt-[150px]">
            <div className="h-[400px] w-full">
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="w-full max-w-xl card border border-[#545454] p-4">


                <form method="dialog" className="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col gap-3">

                        <input type="file" {...register("image", { required: true })}
                            className="file-input file-input-bordered  border-[#ff6f26] w-full" />

                        <input type="name" placeholder="Enter Your Name"  {...register("name", { required: true })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input type="email" placeholder="Enter Your Email"  {...register("email", { required: true })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input type="password" placeholder="Enter Your Password" {...register("password", { required: true })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input className="btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2 w-40 rounded-lg hover:bg-[#ff6f26] hover:text-white mx-auto" type="submit" value="Sign Up" />


                    </div>

                </form>

                <div className="divider "></div>

                <p>If you have already an account ? Please <Link to={"/login"} className="text-[#ff6f26] hover:underline">Login</Link> </p>

            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default SignUp;