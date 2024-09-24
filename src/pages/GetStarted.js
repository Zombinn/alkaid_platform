import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Stepper, 
  Step, 
  StepLabel, 
  StepContent,
  Paper,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    '注册 Alkaid 账户',
    '创建您的第一个 AI 模型',
    '上传并处理数据集',
    '开始模型训练',
    '部署并应用您的模型'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `首先，您需要注册一个 Alkaid 账户。点击右上角的"注册"按钮，填写必要的信息即可完成注册。`;
    case 1:
      return `登录后，进入"模型"页面。点击"创建新模型"按钮，选择您想要创建的模型类型，并设置基本参数。`;
    case 2:
      return `在"数据集"页面上传您的训练数据。Alkaid 支持多种数据格式，您可以使用我们的数据预处理工具来清洗和准备数据。`;
    case 3:
      return `回到您创建的模型页面，选择刚才上传的数据集，设置训练参数，然后开始训练过程。您可以实时监控训练进度和性能指标。`;
    case 4:
      return `训练完成后，您可以在模型详情页面查看性能报告。满意的话，就可以一键部署模型，使其可以通过 API 或者在线服务的方式使用。`;
    default:
      return '未知步骤';
  }
}

function GetStarted() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        开始使用 Alkaid
      </Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    返回
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? '完成' : '下一步'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>所有步骤已完成</Typography>
          <Button onClick={handleReset} className={classes.button}>
            重新开始
          </Button>
          <Button 
            component={RouterLink} 
            to="/register" 
            variant="contained" 
            color="primary" 
            className={classes.button}
          >
            立即注册
          </Button>
        </Paper>
      )}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          需要帮助？
        </Typography>
        <Typography paragraph>
          如果您在使用过程中遇到任何问题，可以查看我们的 
          <RouterLink to="/faq">常见问题</RouterLink> 或 
          <RouterLink to="/contact">联系我们的支持团队</RouterLink>。
        </Typography>
      </Box>
    </Container>
  );
}

export default GetStarted;