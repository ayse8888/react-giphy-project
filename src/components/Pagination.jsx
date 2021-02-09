import React, {useEffect, useState} from "react";
import axios from 'axios'



const API_KEY = "FTpNSjXOidmf4S3TEacRkitR38LLL4dU"

const Pagination = () => {
  const [result, setResult] = useState([])

  const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response.data.pagination);
        setResult(response.data.pagination)
      } catch (error) {
          console.error(error);
        }
      };
      sendRequest();
  },[])

  return(
    <>
      <p>
        Showing totally {result.count} of {result.total_count}  results
      </p>
    </>
  )
}

export default Pagination