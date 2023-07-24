import { useEffect, useState } from "react";

const CollegesData = () => {
    const [Colleges, setTopCollege] = useState([])
    const [searchQ, setSearchQ] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/?q=${searchQ}`).then(res => res.json()).then(data => setTopCollege(data))
    }, [searchQ])
    const TopColleges = Colleges.filter((college) => college.student_success?.graduation_rate >= 90)


    return [TopColleges, Colleges, setSearchQ, searchQ]
};

export default CollegesData;