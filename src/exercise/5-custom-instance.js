import {useEffect} from 'react';

import authFetch from '../axios/custom';

import axios from 'axios';

const randomUserUrl = 'https://randomUser.me/api';

const CustomInstance = () => {
    const fetchData = async () =>{  
        try {
            const response =await authFetch('/react-store-products')
            const response2 = await axios.get(randomUserUrl)

        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);

    return (
    <h2>
        Custom instance
    </h2>

    )

}

export default CustomInstance;