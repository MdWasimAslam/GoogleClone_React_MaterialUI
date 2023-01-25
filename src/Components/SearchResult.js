import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoogleSearchNav from "./GoogleSearchNav";
import SearchIcon from "@mui/icons-material/Search";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import "./Styles/SearchResult.css";
import Footer from "./Footer";

function SearchResult() {
  const [resultData, setresultData] = useState("");
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("savedQuery"));
    setresultData(resp);
  }, []);

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

          <AllResult organicResultData={resultData.organic_results} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

const AllResult = ({ organicResultData }) => {
  return (
    <>
      <div className="AllResult">
        {console.log(organicResultData)}
        {organicResultData != undefined ? (
          organicResultData.map((value, index) => {
            return (
              <>
                <div className="organicResult">
                <p> {value.domain}</p>
                <p style={{color:"#0e0ea4"}} ><b>{value.title}</b></p>
                <p style={{fontSize:"15px",color:"grey"}}>{value.url} </p>
                
                </div>
              </>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SearchResult;
