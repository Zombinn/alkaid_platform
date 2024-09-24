import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Settings() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        设置
      </Typography>
      <Typography variant="body1">
        这里将显示用户的各种设置选项。
      </Typography>
    </Container>
  );
}

export default Settings;