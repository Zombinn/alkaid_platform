import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Alkaid</Link>
        </Typography>
        <Button color="inherit" component={Link} to="/models">Models</Button>
        <Button color="inherit" component={Link} to="/datasets">Datasets</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Avatar component={Link} to="/profile" style={{ marginLeft: '10px' }}>U</Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default Header;