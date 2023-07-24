import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "react-rating"


const CollegeCard = ({ college, collegePage }) => {

    const { _id, image, name, location, description, admission_date, research_count
        , rating } = college
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl text-start">
            <figure><img src={image} className="h-52 w-full" alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl flex items-center flex-wrap w-full">{name} <span className="text-base">  ({rating})
                    <Rating className="mt-2 text-amber-600 ml-2"
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                    /></span></h2>
                <p className="font-medium flex gap-1">
                    <MdOutlineLocationOn size={20} className="text-[#ff6f26]" /> {location}</p>
                <p>{description}</p>
                <div>
                    <p><b>Events:</b> Explore to See events</p>
                    <p><b>Research History:</b> Explore to see research history</p>

                    {collegePage && <div className="mt-2">
                        <p><b>Research Quantity:</b> <span className='text-[#ff6f26]'>{research_count}</span></p>

                    </div>

                    }

                </div>
                <p className="badge badge-outline mx-auto">Deadline: {admission_date}</p>

                <div className="card-actions justify-end">
                    <Link to={`/collegeDetails/${_id}`} className="btn btn-sm  text-[#ff6f26] border-[#ff6f26] hover:text-white hover:bg-[#ff6f26] ">Explore Now</Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;