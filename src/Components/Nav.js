import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";

export default function Nav() {
  return (
    <Box>
      <AppBar position="" sx={{backgroundColor:"white",color:"black"}} elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" }, alignItems: "center" }}>
            <Typography
              variant="body1"
              component="div"
              sx={{ marginLeft: "20px" }}
            >
              Gmail
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ marginLeft: "20px" }}
            >
              Images
            </Typography>
            <AppsIcon sx={{ marginLeft: "20px" }} />
            <Avatar
              sx={{ marginLeft: "20px" }}
              alt="Wasi"
              src="https://lh3.googleusercontent.com/ogw/AAEL6sh8iejzgBnOs_hM6LT8xDqoFoab1BmGQOlwD-7uhA=s32-c-mo"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
