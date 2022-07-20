import { useState } from 'react';
import axios from 'axios'
const url = 'https://course-api.com/axios-tutorial-post';

const PostRequest = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response =  await axios.post(url, {name, email})
            console.log(response.data);
        } catch (error) {
            console.log(error.response);
        }
    };
  return (
    <div className='section'>
        <h2> post request </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">name</label>
                <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <button type="submit">login</button>
            </div>
        </form>

    </div>
  )
}

export default PostRequest