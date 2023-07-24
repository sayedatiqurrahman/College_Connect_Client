import CollegesData from "../../DataHouse/CollegesData";
import CollegeCard from "../../components/CollegeCard";
import SectionTitle from "../../components/SectionTitle";

const Colleges = () => {
    const [, Colleges] = CollegesData()
    const collegePage = true;
    return (
        <div className="MyContainer flex justify-center">
            <div>
                <SectionTitle title={"Colleges Page"} subTitle={"Chart Your Course: Explore Colleges & Universities"} />

                <div className="grid lg:grid-cols-3 gap-5 justify-center items-center">
                    {
                        Colleges.map((college) => <CollegeCard
                            key={college._id}
                            college={college} collegePage={collegePage} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Colleges;