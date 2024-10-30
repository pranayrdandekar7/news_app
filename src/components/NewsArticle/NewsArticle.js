import React from 'react'
import "./NewsArticle.css"

function NewsArticle({author,title,description,url,urlToImage,publishedAt}) {
  return (<>
   
   <div className='news-article'>
    <img src={urlToImage} alt='' className='news-article-img'/>
    <h1 className='news-title'>{title}</h1>

    <div className='news-auther-container'>
      <span className='author'> Author : {author}</span>
      <span className='publish-at'>{publishedAt}</span>
    </div>
    <p className='news-description'>{description}</p>
    <a href={url} target='_blank' rel="noopener noreferrer" className='read-more-btn'>Read More</a>
    
   </div>
   
   </> )
}

export default NewsArticle