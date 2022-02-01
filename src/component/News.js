import React,{useEffect,useState} from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import ".//About.css";



const News = (props) => {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalize =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  document.title=`${capitalize(props.category)}- NewsBubble`;

  const updatenews = async()=>{
    props.setprogress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api} &page=${page}&pageSize=${props.pagesize}`;
    setloading(true);
    props.setprogress(50);
    let data= await fetch(url);
    let parseddata=await data.json();

    setarticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    setloading(false);
    
    props.setprogress(100);
  }

  useEffect(() => {
    updatenews();
    // eslint-disable-next-line 
  }, [])

  
   const fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api} &page=${page+1}&pageSize=${props.pagesize}`;
    setpage(page+1);
    setloading(true);
    let data= await fetch(url);
    let parseddata=await data.json();

    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults)
    setloading(false)
    
  };

       
        return (
          <>
          <h1 className="text-center1">{`Top ${capitalize(props.category)} Headlines`}</h1>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            
            hasMore={articles.length!==totalResults}
            loader={<Spinner/>}
            
            >
            <div className="container">
              <div className="row">
            {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                 <Newsitems title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} badge={props.badge}/>
               </div>
            })}
              </div>
            </div>
            </InfiniteScroll>
            
            </>
            
        )
    
}

News.defaultProps={
  pagesize:10,
  country:"in",
  category:"top headlines",
  badge:"danger"
}

News.propTypes={
  pagesize:PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string,
  badge:PropTypes.string
}

export default News
