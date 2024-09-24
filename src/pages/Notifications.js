import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Notifications() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        通知中心
      </Typography>
      <Typography variant="body1">
        这里将显示用户的通知列表。
      </Typography>
    </Container>
  );
}

export default Notifications;