import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Lottie from 'react-lottie';
import AniData from "../../../public/signin.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AniData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>

        </div>
    );
};

export default SignUp;