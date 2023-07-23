import CollegesData from "../../DataHouse/CollegesData";
import CollegeCard from "../../components/CollegeCard";
import SectionTitle from "../../components/SectionTitle";

const CollegesSection = () => {
    const [TopColleges, Colleges] = CollegesData()
    console.log(Colleges);
    return (
        <div className="my-[130px] text-center">
            <SectionTitle title={"Top Colleges"} subTitle={"Find Your Favourite College"} />
            <input type="text"
                className="input max-w-md w-full border-2 border-[#ff6f26]" name="searchCollege" id="searchCollege"
                placeholder="Please Search Your Desire College"
            />

            {/* All top College Card Shown */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center mt-[50px]">
                {
                    TopColleges.map((college, idx) => <CollegeCard
                        key={idx}
                        college={college}
                    />)
                }
            </div>

        </div>
    );
};

export default CollegesSection;