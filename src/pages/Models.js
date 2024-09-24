import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Models() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        模型管理
      </Typography>
      <Typography variant="body1">
        这里将显示模型列表和管理功能。
      </Typography>
    </Container>
  );
}

export default Models;