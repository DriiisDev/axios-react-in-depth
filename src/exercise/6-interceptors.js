import { useEffect } from "react";

import authFetch from "../axios/interceptors";

const Interceptors = () =>{
    const fetchData = async() =>{
        try {
            const response = await authFetch('/react-store-productss')
        } catch (error) {
            
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <h2>
            interceptors
        </h2>
    );
}

export default Interceptors;