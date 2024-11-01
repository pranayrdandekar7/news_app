import axios from 'axios'
import "./Home.css"
import NewsArticle from '../../components/NewsArticle/NewsArticle'
import React, { useEffect, useState } from 'react'

function Home() {

    const [news, setNews] = useState([])
    const [searchQuery,setSearchQuery] =useState("pune")
    console.log(searchQuery)

    const loadNews = async () => {
         try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-11-24&to=2024-10-24&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
        setNews(response.data.articles)

        
         }
         catch(err){
            console.log(err.message)
         }
    }

    useEffect(() => {
        loadNews()
    }, [])

    useEffect(()=>{
        loadNews()
    },[searchQuery])

    return (
        <>
            <h1 className='main-heading'>News App </h1>
            <input
             placeholder='search'
             className='search-input'
            value={searchQuery}
            onChange={(e)=>
                setSearchQuery(e.target.value)
            }
            >
            </input>
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