import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
// import { Box } from "@mui/system";
// import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
        <Box >
            <AppBar position="static" >
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu">
                        Navbar
                    </IconButton>
                    <Typography variant="h6" component="div" style={{  marginLeft:700, padding:5}}>
                        <NavLink to="/" style={{ margin: 10, padding: 5, color: "white" }}>Home</NavLink>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <NavLink to="/about" style={{ margin: 10, padding: 5, color: "white" }}  >About</NavLink>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <NavLink to="/contact" style={{ margin: 10, padding: 5, color: "white" }}  >Contact</NavLink>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <NavLink to="/from" style={{ margin: 10, padding: 5, color: "white" }} >Form</NavLink>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <NavLink to="/list" style={{ margin: 10, padding: 5, color: "white" }}  >List</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
          
        </Box>
       </>
    )
}
export default Home;