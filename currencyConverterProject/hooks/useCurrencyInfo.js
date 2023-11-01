import {useEffect, useState} from 'react';

const useCurrencyInfo = (currency)=>{
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  const [data, setData] = useState({});
  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
  },[currency]); // everytime there is change in currency, we want to call the api
  console.log(data);
  return data;
}

export default useCurrencyInfo;