import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Card, CardContent, CardActions, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    padding: theme.spacing(8, 0, 6),
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    textAlign: 'center',
  },
  featureCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  quickStart: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.hero}>
        <Container maxWidth="sm" className={classes.heroContent}>
          <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
            Alkaid - 赋能您的AI之旅
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            探索、创新、突破 - 您的AI梦想从这里开始
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/get-started">
            立即开始
          </Button>
        </Container>
      </div>

      <Container maxWidth="md" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Typography variant="h4" align="center" gutterBottom>
          核心功能
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: '模型训练与管理', description: '轻松训练和管理您的AI模型', link: '/models' },
            { title: '数据集处理', description: '高效处理和管理您的数据集', link: '/datasets' },
            { title: '自动化部署', description: '一键部署您的AI模型', link: '/deploy' },
          ].map((feature) => (
            <Grid item key={feature.title} xs={12} sm={6} md={4}>
              <Card className={classes.featureCard}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" component={Link} to={feature.link}>
                    了解更多
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <div className={classes.quickStart}>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            快速开始
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            1. 注册Alkaid账户<br />
            2. 创建您的第一个AI模型<br />
            3. 上传并处理数据集<br />
            4. 开始模型训练<br />
            5. 部署并应用您的模型
          </Typography>
          <div style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" component={Link} to="/register">
              立即注册
            </Button>
          </div>
        </Container>
      </div>

      {/* 这里可以添加热门模型展示部分 */}
    </React.Fragment>
  );
}

export default Home;