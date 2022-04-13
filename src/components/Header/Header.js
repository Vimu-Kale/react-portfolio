import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import { Button } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/styles';
import { useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="fixed" style={{backgroundColor:"black", color:"#4285F4", height:"5rem"}}>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, ml: 8, mt:2 }} style={{fontFamily:'Abril Fatface', fontSize:"xx-large", fontWeight:"bold", letterSpacing:".1rem"}} className="brandname" >
            vimu<span className="dot">.</span>
          </Typography>
        
            <div>
              {isMobile ? (
                <div>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, mt:2}}
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                // sx={{mt:3}}
              >
                <MenuItem onClick={handleClose}><Link style={{textDecoration:"none", color:"black"}} to="/">Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link style={{textDecoration:"none", color:"black"}} to="/about">About</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link style={{textDecoration:"none", color:"black"}} to="/skills">Skills</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link style={{textDecoration:"none", color:"black"}} to="/projects">Projects</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link style={{textDecoration:"none", color:"black"}} to="/contact">Contact</Link></MenuItem>
              </Menu>
              </div>
              )
                :(
                  <div style={{display:"flex"}} sx={{mr:8}} className="nav-link">
                    <Typography color='primary' size='large' className='menu-link'><Link style={{textDecoration:"none"}} className="link" to="/">home<span className="pipe"> |</span></Link></Typography>
                    <Typography color='primary' size='large' className='menu-link'><Link style={{textDecoration:"none"}} className="link" to="/about">about<span className="pipe"> |</span></Link></Typography>
                    <Typography color='primary' size='large' className='menu-link'><Link style={{textDecoration:"none"}} className="link" to="/skills">skills<span className="pipe"> |</span></Link></Typography>
                    <Typography color='primary' size='large' className='menu-link'><Link style={{textDecoration:"none"}} className="link" to="/projects">projects<span className="pipe"> |</span></Link></Typography>
                    <Typography color='primary' size='large' className='menu-link'><Link style={{textDecoration:"none"}} className="link" to="/contact">contact<span className="pipe"> |</span></Link></Typography>
                  </div>
                  
                )
            }
              
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Header;