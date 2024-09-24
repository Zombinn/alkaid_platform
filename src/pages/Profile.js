import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Profile() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        个人信息
      </Typography>
      <Typography variant="body1">
        这里将显示用户的个人信息和相关设置。
      </Typography>
    </Container>
  );
}

export default Profile;