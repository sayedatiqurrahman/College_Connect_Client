
import React from 'react';

import logo from '../../public/logo.png'
const Footer = () => {

    return (
        <div className='text-center mt-[130px] pt-[50px]'>
            <hr className='border-[#ff6f26]' />
            {/* Heading Started */}
            <h1 className='pt-[50px] text-[#ff6f26] text-5xl mb-16 fontB '>Newsletter
            </h1>
            <div className='relative mb-10'>
                <hr className='w-72 -mt-12 border border-[#ff6f26] mx-auto ' />
                <p className='absolute -top-3 text-[#ff6f26] left-1/2 -translate-x-1/2 text-7xl font-thin rotate-12'>"</p>
            </div>
            <p className='fontA -mt-6 text-lg mb-7'>Subscribe to our mailing list</p>
            {/* Heading Finish */}

            <div className='relative mx-auto mb-20 w-full sm:w-96 md:w-[500px]'>
                {/* Subscribe Email */}
                <input required className='pl-4 h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 border-[#ff6f26] input rounded-full' type="email" placeholder='Enter Your Email' />
                {/* Subscribe button */}
                <button className='absolute -top-4  right-0 drop-shadow-md transition-all duration-200 border-2 border-[#ff6f26] px-4 text-white sm:px-10 rounded-full text-lg font-bold py-1 mt-4 bg-[#e04f00] hover:bg-[#da5006] hover:text-base-300' type="submit">Subscribe</button>
            </div>


            <div className='pb-[50px] MyContainer gap-5 max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4'>
                <ul >
                    <li className='text-xl text-semibold underline fontB'>Popular Colleges</li>
                    <li>Amherst College</li>
                    <li>Williams College</li>
                    <li>Harmony University</li>
                    <li>Evergreen College</li>
                    <li>Swarthmore College</li>
                    <li>Global Academy</li>

                </ul>
                <ul >
                    <li className='text-xl text-semibold underline fontB'>Popular Locations </li>
                    <li>Greendale, USA</li>
                    <li>Concordia, USA</li>
                    <li>Cultural City, USA</li>
                    <li>Amherst, Massachusetts</li>
                    <li>Swarthmore, Pennsylvania</li>
                    <li>Williamstown, Massachusetts</li>
                </ul>
                <ul>
                    <li className='text-xl text-semibold underline fontB'>Contacts</li>
                    <li>1122 Potter Rd, Antelope</li>
                    <li>info@example.com</li>
                    <li>18881234567</li>

                </ul>
                <ul>
                    <li className='text-xl text-semibold underline fontB'>Social</li>
                    <li>Facebook</li>
                    <li>Behance</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <hr className='border-[#ff6f26]' />

            <img
                className='h-10 mt-2 mx-auto' src={logo} />

            <p className=' mb-4 textShadow '>Copyright © 2023 College Connect: Country's Top Colleges </p>
        </div>
    );
};

export default Footer;