import React, { useState } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styles/search.scss'
import SearchResults from './SearchResults'


const API_KEY = "FTpNSjXOidmf4S3TEacRkitR38LLL4dU"

const Search = (props) => {
  const [search, setSearch] = useState("")
  const [result, setResult] = useState([])
  const [load, setLoad] = useState(20)


  const loadMore = () => {
      setLoad(value => value + 20)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}`


    const sendRequest = async () => {
      try {
          const response = await axios.get(URL);
          console.log(response.data.data);
          setResult(response.data.data)
      } catch (error) {
          console.error(error);
        }
      };
      sendRequest();

      const el = document.getElementsByClassName("load-more")[0]
      {sendRequest ? el.style.display = "block" : el}
    }
     
  return(
       <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-12 my-3">
            <div className="row">
              <div className="col-sm-6">
                <h4>Giphy</h4>
              </div>
              <div className="col-sm-6 d-flex justify-content-md-end">
                <input 
                  type="text" 
                  placeholder="Search Giphs" 
                  name="query" 
                  onChange={event => setSearch(event.target.value)}
                  className="search-input" 
                />
                <button 
                  onClick={submitHandler} 
                  type="submit" 
                  className="search-button"
                >
                  <i className="fas fa-search"></i>
              </button>
              </div>
            </div>
          </div>
          <hr />
          <p>
            <Link to="/" className="link">#Trending</Link>
          </p>
          <div className="col-sm-12">
            <div className="row">
              {result.slice(0, load).map(searchGiph => (
                <SearchResults key={searchGiph.id} searchGiph={searchGiph}/>
              ))}
            </div>
          </div>
          <div className="col-sm-12 d-flex justify-content-center my-3">
           <button 
              className="load-more" 
              onClick={loadMore}
              style = {{display:"none"}}
           >
              LOAD MORE
           </button>
          </div>
        </div>
       </div>
  )
}

export default Search