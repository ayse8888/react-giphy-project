import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../styles/giphDetails.scss'

const style = {
  width: "20rem"
}

const API_KEY = "FTpNSjXOidmf4S3TEacRkitR38LLL4dU"

const GiphDetails = (props) => {
  const { giphID } = useParams();
  const [zoom, setZoom] = useState([])

  const DetailsUrl = `https://api.giphy.com/v1/gifs/${giphID}?api_key=${API_KEY}`;

  useEffect(() => {
    const sendRequest = async () => {
      try {
          const response = await axios.get(DetailsUrl);
          console.log(response.data.data);
          setZoom(response.data.data)
      } catch (error) {
          console.error(error);
        }
      };
      sendRequest();
      // console.log(zoom);
  },[])

  

  return(
    <>
    {zoom.images ? 
    <>
        <div className="col-sm my-5">
          <nav aria-label="breadcrumb" className="d-flex justify-content-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/search" className="text-dark">
                  <i className="fas fa-reply mx-1"></i>
                  Back
                </Link>
              </li>
            </ol>
          </nav>
          <div className="card mb-5 mx-auto text-center" style={style}>
            <img
              height="350"
              src={zoom.images.fixed_height.url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title titles-style">
                {zoom.title}
              </h5>
            </div>
          </div>
        </div>
    </> 
    : ""}
    </>
  )
}

export default GiphDetails