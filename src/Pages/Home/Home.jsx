import CollegesSection from "./HomeComponents/CollegesSection";
import Banner from "./HomeComponents/Banner";
import GraduateGroup from "./HomeComponents/GraduateGroup";
import Research from "./HomeComponents/Research";
import Testimonials from "./HomeComponents/Testimonials";


const Home = () => {
    return (
        <div className="MyContainer">
            <Banner />
            <CollegesSection />
            <GraduateGroup />
            <Research />
            <Testimonials />
        </div>
    );
};

export default Home;