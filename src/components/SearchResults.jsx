import React from "react";
import {Link} from 'react-router-dom'
import '../styles/resultPages.scss'


const SearchResults = (props) => {
  const {title, images, id} = props.searchGiph
  return(
        <div className="col-sm-3 col-6 my-3">
          <div className="image-div">
            <img 
              className="image" 
              src={images.fixed_height.url} 
              alt="..."
            />
            <div className="text-div">
              <p className="titles">{title}</p>
            </div>
          </div>
           <Link to={`/giph/${id}`}>
            <i className="fas fa-search-plus text-dark mt-2"></i>
           </Link>
        </div>
  )
}

export default SearchResults