import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Lottie from 'react-lottie';
import AniData from "../../../public/signin.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {

    const { loginWithEmailAndPassword, loginWithGoogle, loginWithGitHub } = useContext(AuthContext)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AniData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const googleSign = () => {
        loginWithGoogle().then(() => toast.success(`Sign in Successfully`))
    }

    const GitHubSign = () => {
        loginWithGitHub().then(() => toast.success("Sign in Successfully"))
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        loginWithEmailAndPassword(email, password).then(() => toast.success(user.displayName, "Sign in Successfully")).catch((error) => {
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
                        <input type="email" placeholder="Enter Your Email"  {...register("email", { required: true })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input type="password" placeholder="Your Name" {...register("password", { required: true })}
                            className="input input-bordered border-[#ff6f26] w-full "
                        />

                        <input className="btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2 w-40 rounded-lg hover:bg-[#ff6f26] hover:text-white mx-auto" type="submit" value="Sign In" />
                    </div>

                </form>

                <div className="divider "></div>
                <p className="text-[#ff6f26] hover:underline text-center cursor-pointer">Forget Password ?</p>

                <p>If you new Here ? Please <Link to={"/signUp"} className="text-[#ff6f26] hover:underline">Sign up</Link> </p>

            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Login;
