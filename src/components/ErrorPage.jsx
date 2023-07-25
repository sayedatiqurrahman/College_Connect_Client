import React from 'react';

import animationData2 from '../../public/error.json';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'react-lottie';
const ErrorPage = () => {
    const { data, status, statusText } = useRouteError()
    return (
        <div>
            <div className='text-center '>

                <div className='h-[400px]'><Lottie className="h-full"
                    options={{
                        animationData: animationData2,
                        loop: true,
                        autoplay: true,
                    }}
                /></div>

                <h1 className='text-8xl fontB -mt-8 text-[#ff6f26]'>{status}</h1>
                <h4 className='fontA '>{data || statusText}</h4>
                <hr className='max-w-[450px] w-[90%] border-[#ff6f26] mx-auto my-4' />
                {/* Button */}

                <Link to={'/'} className='btn btn-outline text-[#ff6f26] border-[#ff6f26] hover:bg-[#ff6f26] hover:text-white rounded-full px-10 text-xl font-semibold uppercase'>BACK TO HOME</Link>
            </div >
        </div >
    );
};

export default ErrorPage;