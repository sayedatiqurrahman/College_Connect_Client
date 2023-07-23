import { useEffect, useState } from "react";

const CollegesData = () => {
    const [Colleges, setTopCollege] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000").then(res => res.json()).then(data => setTopCollege(data))
    }, [])
    const TopColleges = Colleges.filter((college) => college.student_success?.graduation_rate >= 90)
    return [TopColleges, Colleges]
};

export default CollegesData;