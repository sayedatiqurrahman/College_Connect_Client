import CollegesData from "../../DataHouse/CollegesData";
import CollegeCard from "../../components/CollegeCard";
import SectionTitle from "../../components/SectionTitle";

const CollegesSection = () => {
    const [TopColleges, Colleges, setSearchQ, searchQ] = CollegesData()
    console.log(TopColleges);

    const handleSearchQ = (e) => {
        setSearchQ(e.target.value)
    }
    return (
        <div className="my-[130px] text-center">
            <SectionTitle title={"Top Colleges"} subTitle={"Find Your Favourite College"} />
            <input
                onChange={handleSearchQ}
                type="text"
                className="input max-w-md w-full border-2 border-[#ff6f26]" name="searchCollege" id="searchCollege"
                placeholder="Please Search Your Desire College"
            />

            {/* All top College Card Shown */}
            <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-3 justify-center items-center mt-[50px]">
                {searchQ ? Colleges.map((college) => <CollegeCard
                    key={college._id}
                    college={college} />)
                    : TopColleges.map((college) => <CollegeCard
                        key={college._id}
                        college={college}
                    />)
                }
            </div>

        </div>
    );
};

export default CollegesSection;