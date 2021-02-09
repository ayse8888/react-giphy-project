import React, {useEffect, useState} from "react";
import axios from 'axios'
import '../styles/trending.scss'
import TrendingResults from './TrendingResults'
import Pagination from './Pagination'


const API_KEY = "FTpNSjXOidmf4S3TEacRkitR38LLL4dU"

const Trending = (props) => {
  const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
  const [giphy, setGiphy] = useState([])
  const [load, setLoad] = useState(20)

  const loadMore = () => {
      setLoad(value => value + 20)
    }

   useEffect(() => {
    const sendRequest = async () => {
      try {
          const response = await axios.get(URL);
          console.log(response.data.data);
          setGiphy(response.data.data)
      } catch (error) {
          console.error(error);
        }
      };
      sendRequest();
   },[])

  return(
      <div className="col-sm-12">
       <div className="row">
          <div className="col-sm-12 mt-3">
            <h5>Trending Giphs</h5>
            <Pagination />
          </div>
          <div className="col-sm-12">
           <div className="row">
            {giphy.slice(0, load).map(trending => (
            <TrendingResults key={trending.id} trending={trending}/>
            ))}
           </div>
          </div>
          <div className="col-sm-12 text-center my-3">
           <button 
            className="load-more" 
            onClick={loadMore}
           >
            LOAD MORE
           </button>
          </div>
       </div>
      </div>
  )
}

export default Trending