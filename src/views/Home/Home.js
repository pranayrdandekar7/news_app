import axios from 'axios'
import "./Home.css"
import NewsArticle from '../../components/NewsArticle/NewsArticle'
import React, { useEffect, useState } from 'react'

function Home() {

    const [news, setNews] = useState([])

    const loadNews = async () => {
         try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-10-24&to=2024-10-24&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
        setNews(response.data.articles)
         }
         catch(err){
            console.log(err.massage)
         }
    }

    useEffect(() => {
        loadNews()
    }, [])
    return (
        <>
            <h1>News App </h1>
            <div className='news-container'>
            {
                news.map((newsArticle,index)=>{

                    const {author,title,description,url,urlToImage,publishedAt} =newsArticle

                    return (<NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt}  key={index}/>)
                    
                })
            }
            </div>

        </>
    )
}

export default Home