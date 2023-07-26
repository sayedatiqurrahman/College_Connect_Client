import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import useAppliedData from '../../DataHouse/useAppliedData';

const Profile = () => {
    const [myCollege, applied, user, updatePer, setUpdatePer] = useAppliedData()
    const navigate = useNavigate()
    console.log("MyColl", myCollege);
    console.log("apply", applied);
    console.log(updatePer);
    return (
        <div className='h-screen relative MyContainer'>
            <SectionTitle className="absolute top-0 left-1/2 -translate-x-1/2 " title={"Profile"} />
            <div className='flex justify-center items-center gap-5'>
                <button className='btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-lg hover:bg-[#ff6f26] hover:text-white'>Edit Info</button>
                <button
                    onClick={() => {
                        setUpdatePer(true)
                        navigate("/admission")
                    }} className='btn text-[#ff6f26] border-2 font-semibold border-[#ff6f26] px-4 py-2  rounded-lg hover:bg-[#ff6f26] hover:text-white'>Update College</button>
            </div>


            <div className='flex flex-wrap gap-5 justify-center items-center'>
                <div className='w-full mt-10 max-w-xl p-10 border border-[#ff6f26] rounded-2xl '>
                    <img className='rounded-full border border-[#ff6f26] h-20 w-20 mb-10 mx-auto' src={user.photoURL} />
                    <h2 className='text-4xl font-bold text-[#ff6f26] '>{user.displayName}</h2>
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
        </div>
    );
};

export default Profile;