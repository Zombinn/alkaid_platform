import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Projects() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        项目管理
      </Typography>
      <Typography variant="body1">
        这里将显示项目列表和管理功能。
      </Typography>
    </Container>
  );
}

export default Projects;