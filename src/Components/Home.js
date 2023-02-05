import React, { useState } from "react";
import Nav from "./Nav";
import Container from "@mui/material/Container";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Styles/Home.css";
import MicIcon from "@mui/icons-material/Mic";
import Footer from "./Footer";
import { Navigate, Route, useNavigate } from "react-router-dom";
import SearchResult from "./SearchResult";
import LinearProgress from "@mui/material/LinearProgress";

function Home() {
  const navigate = useNavigate();

  const [searchQuery, setsearchQuery] = useState("");
  const [loader, setloader] = useState(false);

  const handleSearchQuery = (e) => {
    console.log(e.target.value);
    setsearchQuery(e.target.value);
  };

  const searchFunc = () => {
    localStorage.clear();
    setloader(true);

    googleSearchAPI();
  };

  const googleSearchAPI = async () => {
    const data = await fetch(`https://app.zenserp.com/api/v2/search?apikey=14499fa0-a587-11ed-ab73-075df5944978&q=${searchQuery}&num=100`);
    const response = await data.json();
    console.log(response);
    localStorage.setItem("savedQuery", JSON.stringify(response));
    navigate("/search");
  };

  return (
    <div>
      {/* Nav Bar */}
      <Nav />

      <Container maxWidth="sm">
        <Box className="GoogleHomeContainer">
          <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png"></img>
          <TextField
            sx={{
              "& fieldset": { border: "none" },
            }}
            autoComplete="off"
            onChange={handleSearchQuery}
            className="GoogleSearchTextField"
            id="outlined-basic"
            variant="outlined"
            placeholder="Search Google or type a URL"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <MicIcon />
                </InputAdornment>
              ),
            }}
          />
          <div>
            <Button
              className="searchBtn"
              variant="contained"
              onClick={searchFunc}
            >
              Google Search
            </Button>
            <Button className="searchBtn" variant="contained">
              I'm Feeling Lucky
            </Button>
          </div>

          <p className="SearchLang">
            Google offered in:{" "}
            <span>
              हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ
            </span>
          </p>
        </Box>
        {loader ? (
          <>
            <Box sx={{ width: "100%", marginTop: "20px" }}>
              <LinearProgress color="inherit" />
            </Box>
          </>
        ) : (
          <></>
        )}
      </Container>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
