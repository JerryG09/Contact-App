import React from 'react';
import './App.css';
import Home from './component/Views/Home'
import Button from '@material-ui/core/Button';


const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
