import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import Datasets from './pages/Datasets';
import Projects from './pages/Projects';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import GetStarted from './pages/GetStarted';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/models" component={Models} />
          <Route path="/datasets" component={Datasets} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/settings" component={Settings} />
          <Route path="/get-started" component={GetStarted} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;