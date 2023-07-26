import React, { useContext, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Lottie from 'react-lottie';
import AniData from "../../../public/signin.json";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const { user, loginWithEmailAndPassword, loginWithGoogle, loginWithGitHub, resetPassword } = useContext(AuthContext)
    const navigate = useNavigate();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AniData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const googleSign = () => {
        loginWithGoogle()
            .then(() => {
                toast.success("Sign in Successfully");
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    const GitHubSign = () => {
        loginWithGitHub()
            .then(() => {
                toast.success("Sign in Successfully");
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }
    const emailRef = useRef()
    const ResetYourPass = () => {
        const email = emailRef.current.value
        console.log(email);



        if (!email) {
            toast.error("Please Give your email into Email Field")
        } else {
            resetPassword(email).then(() => toast.success("Please Check Your Mail to reset your password")).catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
        }
    }


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        loginWithEmailAndPassword(email, password).then(() => {
            toast.success("Sign in Successfully")
            navigate("/")
        }).catch((error) => {
            toast.error(error.message)
        })
    };

    return (
        <div className="MyContainer flex flex-col md:flex-row gap-5 justify-center items-center mt-[150px]">
            <div className="h-[400px] w-full">
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="w-full max-w-xl card border border-[#545454] p-4">
                <div className="flex justify-center items-center my-10 gap-5">
                    <div
                        onClick={googleSign}
                        className="border-2 font-semibold border-[#ff6f26]  rounded-lg hover:bg-[#545454] btn px-5 py-2 ">
                        <FcGoogle size={25} />
                    </div>
                    <div
                        onClick={GitHubSign}
                        className="border-2 font-semibold border-[#ff6f26]  rounded-lg hover:bg-[#545454] btn px-5 py-2">
                        <FaGithub size={25} />
                    </div>

                </div>

                <div className="divider ">OR</div>

                <form method="dialog" className="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col gap-3">
                        <input type="email"

                            placeholder="Enter Your Email"  {...register("email", { required: true })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input type="password" placeholder="Your Name" {...register("password", { required: true })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input className="btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2 w-40 rounded-lg hover:bg-[#ff6f26] hover:text-white mx-auto" type="submit" value="Sign In" />
                    </div>

                </form>

                <div className="divider "></div>
                <p onClick={() => window.my_modal_2.showModal()} className="text-[#ff6f26] hover:underline text-center cursor-pointer">Forget Password ?</p>

                <p>If you new Here ? Please <Link to={"/signUp"} className="text-[#ff6f26] hover:underline">Sign up</Link> </p>

            </div>


            {/* modal reset */}
            {/* Open the modal using ID.showModal() method */}

            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box ">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>

                    <div className="flex flex-col gap-3">
                        <input type="email"
                            ref={emailRef}
                            placeholder="Enter Your Email"
                            className="input input-bordered border-[#ff6f26] w-full "
                        />
                        <input onClick={ResetYourPass} className="btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2 w-40 rounded-lg hover:bg-[#ff6f26] mt-2 hover:text-white mx-auto" value={"Sent Email"} />
                    </div>

                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Login;
