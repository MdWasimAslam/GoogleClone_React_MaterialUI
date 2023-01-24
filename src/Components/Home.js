import React from "react";
import Nav from "./Nav";
import Container from "@mui/material/Container";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Styles/Home.css";
import MicIcon from "@mui/icons-material/Mic";
import Footer from "./Footer";

function Home() {
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
            <Button className="searchBtn" variant="contained">
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
      </Container>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
