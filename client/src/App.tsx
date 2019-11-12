import React from 'react';
import './App.css';
import UserProfile from './component/views/UserProfile';
import LandingPage from './component/views/LandingPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AboutUs from './component/views/AboutUs';
import Services from './component/views/Services';
import Community from './component/views/Community';
import FAQ from './component/views/FAQ'
import signUp from './component/views/SignUp'
import Login from './component/views/Login'


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/user" exact component={UserProfile} />
          <Route path="/services" exact component={Services} />
          <Route path="/community" exact component={Community} />
          <Route path="/FAQ" exact component={FAQ} />
          <Route path="/signup" exact component={signUp} />
          <Route path="/login" exact component={Login} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
