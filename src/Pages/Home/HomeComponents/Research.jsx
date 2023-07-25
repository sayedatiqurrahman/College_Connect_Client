import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';

const Research = () => {
    const [researchPaper, setResearchPaper] = useState([]);
    useEffect(() => {
        fetch('https://collegeconnect-orpin.vercel.appresearch-paper')
            .then(res => res.json())
            .then(data => setResearchPaper(data));
    }, []);

    return (
        <div className='my-[150px]'>
            <SectionTitle title={"Research Paper"} subTitle="Exploring Cutting-Edge Discoveries" />
            <div className='grid md:grid-cols-2 gap-5 justify-center items-center lg:grid-cols-3'>
                {researchPaper.map((paper) => (
                    <div
                        className="card w-96 bg-base-100 shadow-xl relative group "
                        key={paper.id}
                    >
                        <img
                            src={paper.research_paper_image}
                            alt={paper.college + " Research Paper"}
                            className="group-hover:opacity-60 transition-opacity h-full"
                        />
                        <div className="card-body opacity-0   group-hover:opacity-100 transition-opacity">
                            <div className="card-actions  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center border border-[#ff6f26] flex justify-center items-center p-4 rounded-2xl"

                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,

                                }}
                            >
                                <h2 className="card-title text-[#ff6f26]">{paper.student_name}</h2>
                                <p className='text-white'>{paper.college}</p>

                                <a href={paper.research_paper_image} target="_blank" className="btn w-40 mt-4 border border-[#ff6f26] text-[#ff6f26] bg-transparent hover:bg-[#ff6f26] hover:text-white">Explore</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div></div>
    );
};

export default Research;
