import CollegesSection from "./HomeComponents/CollegesSection";
import Banner from "./HomeComponents/Banner";
import GraduateGroup from "./HomeComponents/GraduateGroup";


const Home = () => {
    return (
        <div className="MyContainer">
            <Banner />
            <CollegesSection />
            <GraduateGroup />
        </div>
    );
};

export default Home;