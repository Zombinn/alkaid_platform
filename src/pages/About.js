import React from 'react';
import { Container, Typography } from '@material-ui/core';

function About() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        关于 Alkaid
      </Typography>
      <Typography variant="body1" paragraph>
        Alkaid 是一个先进的 AI 和机器学习平台，旨在为研究人员、开发者和企业提供强大的工具和资源，以加速 AI 创新和应用。
      </Typography>
      <Typography variant="body1" paragraph>
        我们的使命是通过简化 AI 模型的开发、训练和部署过程，使 AI 技术更加易于访问和应用。
      </Typography>
    </Container>
  );
}

export default About;