import React from "react";
import { useNavigate } from "react-router-dom";


interface Props {
    key: string;
    data: any;
}

const useHandleNavigation = () => {
    let navigate = useNavigate();

    const handleNavigation = (key: any, data: any) => {
        // console.log("CUSTOM HOOK")
        navigate(`/${key}`, { state: { data: data } });
    }

    return handleNavigation;

}

export default useHandleNavigation;


