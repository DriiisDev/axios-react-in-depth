import axios from 'axios';
import {useEffect} from 'react'

const productsUrl = 'https://course-api.com/react-store-products';

const randomUserUrl = 'https://randomUser.me/api';

const GlobalInstance = () => {
    const fetchData = async () =>{  
      try {
        const response = await axios.get(productsUrl);
        const response2 = await axios.get(randomUserUrl);
        console.log(response);
        console.log(response2);
      } catch (error) {
        console.log(error.response);
      }
    };

    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <h2>
        Global instance
    </h2>

  )
}

export default GlobalInstance