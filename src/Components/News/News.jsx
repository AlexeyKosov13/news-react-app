import React, { useContext } from 'react';
import { NewsContext } from '../../NewsContext';
import NewsItem from '../NewsItem/NewsItem';
import './News.css';

export default function News() {
     const {articles} = useContext(NewsContext);
     console.log(articles)
  return (
    <div className='news'>
      
        
        {articles ? articles.map((news) => (
          <NewsItem data={news} key={news.url} />
        )) : "Loading"}
    </div>
  )
}
