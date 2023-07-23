import { MdOutlineLocationOn } from "react-icons/md";



const CollegeCard = ({ college }) => {

    const { image, name, location, description } = college
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl text-start">
            <figure><img src={image} className="h-52 w-full" alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className="font-medium flex gap-1">
                    <MdOutlineLocationOn size={20} className="text-[#ff6f26]" /> {location}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm  text-[#ff6f26] border-[#ff6f26] hover:text-white hover:bg-[#ff6f26] ">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;