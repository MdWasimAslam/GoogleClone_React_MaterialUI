import { Button } from "@mui/material";
import React from "react";
import GoogleSearchNav from "./GoogleSearchNav";
import SearchIcon from "@mui/icons-material/Search";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import "./Styles/SearchResult.css";

function SearchResult() {
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
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
