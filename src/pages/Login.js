import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';

function Login() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        登录
      </Typography>
      <form>
        <TextField fullWidth margin="normal" label="用户名" variant="outlined" />
        <TextField fullWidth margin="normal" label="密码" type="password" variant="outlined" />
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
          登录
        </Button>
      </form>
    </Container>
  );
}

export default Login;