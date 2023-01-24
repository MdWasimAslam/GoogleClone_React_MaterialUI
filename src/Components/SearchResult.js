import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoogleSearchNav from "./GoogleSearchNav";
import SearchIcon from "@mui/icons-material/Search";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import "./Styles/SearchResult.css";

function SearchResult() {
    const [resultData, setresultData] = useState("")
    useEffect(() => {
        const resp =JSON.parse(localStorage.getItem("savedQuery"))
        setresultData(resp)
    }, [])
    //create a iifi
    
  return (
    <div>
      <GoogleSearchNav />
      <div className="resultContainer">
        <div className="result-wrapper">
          <div className="resultNavigation">
            <Button variant="contained" className="resultNavBtn">
              <SearchIcon />
              &nbsp; All
            </Button>
            <Button variant="contained" className="resultNavBtn">
              <OndemandVideoIcon />
              &nbsp; Video
            </Button>
            <Button variant="contained" className="resultNavBtn">
              <CropOriginalIcon /> &nbsp; Images
            </Button>
          </div>

          <div className="AllResult">
            {console.log(resultData.organic_results)}
            {resultData.organic_results!=undefined? resultData.organic_results.map((value,index)=>{
                return (
                    
                    <>
                    <p>Title : {value.title}</p>
                    <p>Domain : {value.domain}</p>
                    <p>URL :  {value.url}  </p>
                    <hr></hr>
                 </>
                )
            }):<></>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
