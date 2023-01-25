import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import "./Styles/GoogleSearchNav.css";
import { Avatar, InputAdornment, TextField } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function GoogleSearchNav() {
  const navigate = useNavigate();



  const [searchQuery, setsearchQuery] = React.useState("")

const handleSearchQuery=(e)=>{
console.log(e.target.value);
setsearchQuery(e.target.value)
}


const searchFunc = ()=>{
  localStorage.clear()
    googleSearchAPI()
}

const googleSearchAPI =async ()=>{
    const data = await fetch(`http://api.serpstack.com/search?access_key=9f8d2fa05baf0f1a306c81f0effe70ad&query=${searchQuery}&limit=50`)
    const response =await data.json();
    console.log(response)
    localStorage.setItem("savedQuery", JSON.stringify(response));
    window.location.reload();

}








  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="GSAppBar" elevation={0}>
        <Toolbar>
          <Link to={"/"}>
            <img
              className="GSNavLogo"
              src={
                "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              }
            ></img>
          </Link>
          <TextField
            sx={{
              "& fieldset": { border: "none" },
            }}
            onChange={handleSearchQuery}
            autoComplete="off"
            className="GoogleSearchTextField GSsearchField"
            id="outlined-basic"
            variant="outlined"
            placeholder="Search Google or type a URL"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon onclick={searchFunc} />
                </InputAdornment>
              ),
            }}
          />
          <button style={{border:"none",backgroundColor:"white",fontSize:"15px",marginLeft:"15px",cursor:"pointer"}} onClick={()=>searchFunc()}>Search</button>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge style={{ color: "#5F6368" }}>
                <SettingsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge style={{ color: "#5F6368" }}>
                <AppsIcon />
              </Badge>
            </IconButton>
            <Avatar
              sx={{ marginLeft: "20px" }}
              alt="Wasi"
              src="https://lh3.googleusercontent.com/ogw/AAEL6sh8iejzgBnOs_hM6LT8xDqoFoab1BmGQOlwD-7uhA=s32-c-mo"
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
