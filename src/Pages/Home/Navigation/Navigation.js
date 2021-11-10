import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {



    //link style
    const navStyle = {
        textDecoration: "none",
        color: "black",
        marginRight:"10px"
}
    return (
        <div>
            <Box sx={{ flexGrow: 1}}>
                <AppBar sx={{ bgcolor: 'warning.main', color:'black.main' }} position="static">
                    <Toolbar>
                        <IconButton
                            style={{ color: "black" }}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <NavLink style={navStyle} to="/home">
                            <Typography  variant="h6" component="div">
                                Broom
                            </Typography>
                                </NavLink>
                        <NavLink style={navStyle} to="/reviews">
                            <Typography variant="subtitle2" component="div">
                                Reviews
                            </Typography>
                                </NavLink>
                        <NavLink style={navStyle} to="/products">
                            <Typography variant="subtitle2" component="div">
                                Products
                            </Typography>
                                </NavLink>
                        <NavLink style={navStyle} to="/home">
                            <Typography variant="subtitle2" component="div">
                                Broom
                            </Typography>
                                </NavLink>
                                
                        <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                                </Typography>
                        <NavLink style={navStyle} to="/dashboard">
                            <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                            dashboard
                            </Typography>
                                </NavLink>
                        <NavLink style={navStyle} to="/login">
                            <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                            Login
                            </Typography>
                                </NavLink>
                        <NavLink style={navStyle} to="/register">
                            <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                            Register
                            </Typography>
                                </NavLink>
                        <Button style={{ color: "black"}}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;