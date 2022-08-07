import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const NewsContext = createContext();
 

export const NewsContextProvider = (props) =>{
    const [data, setData] = useState([]);
    const apiKey = "76462a645a464a579a6272a4d1ac0fd2";

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${apiKey}
        `).then(response => setData(response.data))
        .catch(error => console.log(error))
    }, [])

  return (
    <NewsContext.Provider value={data}>
        {props.children}
    </NewsContext.Provider>
  )
}
