import { useEffect, useState } from "react";

const CollegesData = () => {
    const [Colleges, setTopCollege] = useState([])
    const [searchQ, setSearchQ] = useState('')
    useEffect(() => {
        fetch(`https://collegeconnect-orpin.vercel.app?q=${searchQ}`).then(res => res.json()).then(data => setTopCollege(data))
    }, [searchQ])
    const TopColleges = Colleges.filter((college) => college.student_success?.graduation_rate >= 90)
    const graduate = Colleges.filter((college) => college.graduate_group)


    return [TopColleges, Colleges, setSearchQ, searchQ, graduate]
};

export default CollegesData;