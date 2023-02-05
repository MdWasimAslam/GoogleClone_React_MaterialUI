import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoogleSearchNav from "./GoogleSearchNav";
import SearchIcon from "@mui/icons-material/Search";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import "./Styles/SearchResult.css";
import Footer from "./Footer";

function SearchResult() {
  const [resultTab, setresultTab] = useState("All");

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
            <Button
              variant="contained"
              className="resultNavBtn"
              onClick={() => {
                setresultTab("All");
              }}
            >
              <SearchIcon />
              &nbsp; All
            </Button>
            {/* <Button variant="contained" className="resultNavBtn" onClick={()=>{setresultTab('Images')}} >
            <CropOriginalIcon /> &nbsp; Images
            </Button> */}
            <Button
              variant="contained"
              className="resultNavBtn"
              onClick={() => {
                setresultTab("RelatedSuggestion");
              }}
            >
              <CropOriginalIcon /> &nbsp; Related Suggestions
            </Button>
          </div>

          {resultTab == "All" ? (
            <>
              <AllResult organicResultData={resultData.organic} />
            </>
          ) : (
            <>
              <RelatedQuestionsResult
                relatedQuestionsResultData={resultData.related_searches}
              />
            </>
          )}
        </div>
      </div>
      <Footer />
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
                  <a
                    href={value.url}
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    <p style={{ fontSize: "15px", color: "black" }}>
                      {value.url}{" "}
                    </p>
                    <p style={{ color: "#1A0DAE", fontWeight: "500" }}>
                      {value.title}
                    </p>
                    <p style={{ fontSize: "15px", color: "grey" }}>
                      {value.description}{" "}
                    </p>
                    
                  </a>
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

const RelatedQuestionsResult = ({ relatedQuestionsResultData }) => {
  return (
    <>
      <div className="AllResult">
        {console.log("Related Searches >>>>>>>>>>>>",relatedQuestionsResultData)}
        {relatedQuestionsResultData != undefined ? (
          relatedQuestionsResultData.map((value, index) => {
            return (
              <>
                <div className="organicResult">
                  <p
                    style={{
                      fontSize: "15px",
                      color: "black",
                      marginTop: "20px",
                      fontFamily: "Segoe UI",
                    }}
                  >
                    <a
                    href={value.url}
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    <p style={{ color: "#1A0DAE", fontWeight: "500" }}>
                      {value.title}
                    </p>
                    <p style={{ fontSize: "15px", color: "black" }}>
                      {value.url}{" "}
                    </p>
  
                    
                  </a>
                  </p>
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
