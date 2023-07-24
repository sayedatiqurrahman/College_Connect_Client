
import { Link } from 'react-router-dom';
import CollegesData from '../../../DataHouse/CollegesData';
import SectionTitle from '../../../components/SectionTitle';



const GraduateGroup = () => {
    const [, , , , graduate] = CollegesData()
    console.log(graduate);
    return (
        <>
            <SectionTitle title="Graduate Gallery" subTitle="Shining Bright: Graduate Achievements" />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
                {graduate?.map((college) => (<div
                    key={college._id} className="card w-96 bg-base-100 shadow-xl image-full"

                >
                    <figure><img src={college?.graduate_group} alt={college.name} /></figure>
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title text-3xl font-semibold text-white">{college.name}</h2>

                        <div className="card-actions">
                            <Link to={`collegeDetails/${college._id}`} className='text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-lg hover:bg-[#ff6f26] hover:text-white'>Learn More</Link>
                        </div>
                    </div>
                </div>


                ))
                }



            </div >
        </>);
};

export default GraduateGroup;