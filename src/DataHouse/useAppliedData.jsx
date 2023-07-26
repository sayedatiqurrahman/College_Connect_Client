import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useAppliedData = () => {
    const { user, updatePer, setUpdatePer } = useContext(AuthContext);
    const [myCollege, setMyCollege] = useState();
    const [applied, setApplied] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (user) {
            fetch(`https://collegeconnect-orpin.vercel.app/apply?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setApplied(data.appliedData);
                    setMyCollege(data.collegeData);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }
    }, [user]);

    return [myCollege, applied, user, updatePer, setUpdatePer];
};

export default useAppliedData