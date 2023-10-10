import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {


    const getData = () => {
        axios.get("http://localhost:4000/user/getall").then((data) => console.log(data));
      };
    // axios.get('/api/someEndpoint')
    //   .then(response => {
    //     setData(response.data);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //   });
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    // Render your comp  <div className='grid'>
        <button style={style} onClick={getData}>
        Get
      </button>
  );
}
