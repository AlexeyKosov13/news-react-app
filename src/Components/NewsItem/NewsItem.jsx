import React from 'react';
import './NewsItem.css';

export default function NewsItem({data}) {
  return (
    <div className='newsItem'>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <span>{data.author}</span>
        <span>{data.publishedAt}</span>
        <a href={data.url}>Link</a>
        <img src={data.urlToImage} alt={data.title} className="newsItem__img" />
    </div>
  )
}
