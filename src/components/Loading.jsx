import React from 'react';
import animationData2 from '../../public/loading.json';
import Lottie from 'react-lottie';
const Loading = () => {
    return (
        <div className='h-[400px] my-20 flex justify-center items-center'>
            <div>
                <Lottie className="h-full"
                    options={{
                        animationData: animationData2,
                        loop: true,
                        autoplay: true,
                    }}
                />
            </div>
        </div>
    );
};

export default Loading;