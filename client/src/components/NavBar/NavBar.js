import {
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box,
  Menu,
  MenuItem
} from '@material-ui/core';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import {useState} from 'react';
import useStyles from './styles.js'
import DropDown from '../DropDown/DropDown'
import { Link } from 'react-router-dom'

function NavBar () {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Container className={classes.navbarDisplayFlex} onClick = {handleClose}>
            <Typography variant="h6" color='primary' component = {Link} to = "/">
              Thrift Shop
            </Typography>  


          <DropDown />

          <DropDown />

          <Box display="flex" flexDirection="row-reverse" justifyContent="space-between">
            <Button className ={classes.navbarText} component = {Link} to = "/checkout"><ShoppingCartOutlinedIcon/></Button>
            <Button className={classes.navbarText}>Catalog</Button>
            <Button className={classes.navbarText}>About Us</Button>
            <Button className={classes.navbarText} component = {Link} to = "/login">Sign Up/Login</Button>
          </Box>
        </Container> 
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;