import React from 'react';
import { Typography, Link, Container } from '@material-ui/core';

function Footer() {
  return (
    <footer style={{ marginTop: 'auto', backgroundColor: '#f5f5f5', padding: '20px 0' }}>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          © 2023 Alkaid. All rights reserved.
          {' '}
          <Link color="inherit" href="/terms">
            Terms
          </Link>
          {' | '}
          <Link color="inherit" href="/privacy">
            Privacy
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;