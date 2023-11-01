import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
const Github = () => {

  const data = useLoaderData(); //using this hook to get data from the loader

  //this is another way of fetching data from api
  //const [data, setData] = useState({});


  // useEffect(() => {
  //   fetch('https://api.github.com/users/BickeyManandhar')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg text-center">
      <div className="text-3xl text-gray-800 font-bold mb-4">Github Profile</div>
      <div className="text-2xl text-gray-600">Followers: {data.followers || 'Loading...'}</div>
      <img src={data.avatar_url} alt="GitHub Profile" className="w-48 h-48 rounded-full mt-4 shadow-md" />
    </div>
  );
}

export default Github;


export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/BickeyManandhar')
  return response.json()
}